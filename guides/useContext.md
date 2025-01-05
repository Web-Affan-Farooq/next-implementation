<h1>useContext hook in react:</h1>

<h2>Overview:</h2>
useContext is a built in react hook which is used to manage states globally . Word <b>Context</b> means anything that is available globally.

<h2>Scenario:</h2>
Consider that a react component have data that you want to use in another component.

``` javascript
const Home = () => {
    let data = "affan";  // data that have to be used
    return (
        <div>component-1</div>
    )
}
export default Home;
```

the one way is to import the required component and pass the data as props to it

``` javascript
import Component_2 from "./Component-2.tsx";

const Home = () => {
    let data = "affan";
    return (
        <div>component-1</div>
        <Component_2 requiredData={data}/>
    )
}
export default Home;
```

and the component-2 accepts that data as

``` javascript
interface Data {
    requiredData:string;
}

const Component_2 = ({requiredData}:Data) => {
    return (
        <div>Component-2</div>
        <div>recieved data is {requiredData}</div>
    )
}
export default Component_2;
```

now there is need to pass the data to the nested component <b>Component-3</b> inside <b>component-2</b> 

``` javascript
import Component_3 from "./Component-3.tsx";

interface Data {
    requiredData:string;
}

const Component_2 = ({requiredData}:Data) => {
    let data = "affan";
    return (
        <div>Component-2</div>
        <div>recieved data is {requiredData}</div>
        <Component_3 dataToNested={requiredData}/>
    )
}
export default Component_2;
```

so we will repeat the same approach. Just pass the data as props to nested component <b>Component-3</b> and it will recieve it as

``` javascript
interface Data {
    dataToNested:string;
}

const Component_2 = ({dataToNested}:Data) => {
    return (
        <div>Component-2</div>
        <div>recieved data is {dataToNested}</div>
    )
}
export default Component_2;
```

So there the entire page is filled with props and passing data which will lead to security issues due to lack of limitations. There is no fixed way where data should flow in our app. Also if this value is changing overtime then it is very hard to be implemented.


<h1>Repeating The Same Approach With <b>useContext</b></h1>

Now repeat the same scenerio with useContext create a context in a new file.
In this file create a component

``` javascript
const Context = () => {
    return (
        <div>component-1</div>
    )
}
export default Context;
 ```

 in react ,we know that each component recieves it's nested components as <b>Children</b> props . so remove all the existing content from this context component and pass the childrens props as

  ``` javascript
const Context = ({children}:React.ReactNode) => {
    return (
        <div>
        {childrens}
        </div>
    )
}
export default Context;
 ```

 now import <b>createContext</b> in your file and create a new context as 

   ``` javascript
   import React {createContext} from "react;

   const myContext = createContext();

const Context = ({children}:React.ReactNode) => {
    return (
        <div>
        {children}
        </div>
    )
}
export default Context;
 ```

 now change the component as

 <ul>
 <li>rename the component from <b>Context</b> to <b>ContextProvider</b> </li>
  <li>Replace the div with <code>
  <span><</span><span>myContext.provider></span><span><</span><span>/myContext.provider></span>
  </code> tag.</li>
 </ul>

 
   ``` javascript
   import React {createContext} from "react;

   const myContext = createContext();

const ContextProvider = ({children}:React.ReactElement) => {
    return (
        <myContext.provider>
        {childrens}
        </myContext.provider>
    )
}
export default ContextProvider;
 ```

The <code><span><</span><span>myContext.provider></span><span><</span><span>/myContext.provider></span></code> tag accepts a <b>value</b> prop that we have to pass. For now just create a state for storing data. This state helps us get data globally on any component and the provided setter function will helps us to update this state from anywhere in our app.

``` javascript
   import React {createContext, useState} from "react;

   const myContext = createContext();

const ContextProvider = ({children}:React.ReactElement) => {

    const [nameState, setNameState] = useState<string>("muhammad affan"); // "nameState" state with setter function "setNameState"

    return (
        <myContext.provider>
        {childrens}
        </myContext.provider>
    )
}
export default ContextProvider;
 ```

now pass array containing state <b>nameState</b> along with it's setter function <b>setNameState</b> to the value prop as

``` javascript
   import React {createContext, useState} from "react;

   const myContext = createContext();

const ContextProvider = ({children}:{children:React.ReactNode}) => {

    const [nameState, setNameState] = useState<string>("muhammad affan"); // "nameState" state with setter function "setNameState"

    return (
        <myContext.provider value={
            [nameState, setNameState] // passed an array of state along with it's setter function
            }>
        {childrens}
        </myContext.provider>
    )
}
export default ContextProvider;
 ```

 that's it. your context is created, now one more step is to explicitly type the states and all the context in our component because we are using typescript.


``` javascript
   import React {createContext, useState} from "react;

   const myContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(); //attached type to context state

const ContextProvider = ({children}:{children:React.ReactNode}) => {

    const [nameState, setNameState] = useState<string>("muhammad affan"); // "nameState" state with setter function "setNameState"

    return (
        <myContext.provider value={
            [nameState, setNameState] // passed an array of state along with it's setter function
            }>
        {childrens}
        </myContext.provider>
    )
}
export default ContextProvider;
 ```

Here:
 <ul>
  <li>The context will accept the explicit types in the form of tuples as <[string, React.Dispatch<span><</span>React.SetStateAction<span><</span>string>>]>();</li>
 <li>First <b>string</b> type indicates that the state only contains string typed data</li>
 <li><b>React.SetStateAction<></b> type along with <b>string</b> indicates that the setter function will update the value of state only when it is string </li>
 <li><b>React.Dispatch<></b> with <b>React.SetStateAction<span><</span>string></b> type indicates that the value of context is to be updated with the help of setter function that will update the value of state only when it is string </li>
 </ul>

<br/>
<br/>

 also assign the array of blank value with blank string  or any type of data to the context as 

 ``` javascript
 const myContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(["", () => {}]);
 ```

 <br/>
 <br/>
 <br/>
now your final code will look like this

``` javascript
   import React {createContext, useState} from "react;

   const myContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(); //tuple type to context which contains state type and setter function type

const ContextProvider = ({children}:{children:React.ReactNode}) => {  // type of childrens is React.ReactNode

    const [nameState, setNameState] = useState<string>("muhammad affan"); // "nameState" state with setter function "setNameState" the context will store this state

    return (
        {/*provider function tag with value that should be provided to the childrens*/}
        <myContext.provider value={
            [nameState, setNameState] // passed an array of state along with it's setter function
            }>
        {childrens}
        </myContext.provider>
    )
}
export default ContextProvider;
 ```

 now in your root layout import the <b>ContextProvider</b> and wrap the entire return statement with <span><</span>ContextProvider></span><span><</span>/ContextProvider></span> tag so that your layout.tsx should look like this



 ``` javascript
import type { Metadata } from "next";
import ContextProvider from "./Context.tsx";

import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <ContextProvider>
        <div>
        {children}
        </div>
    </ContextProvider>
    </html>
  );
}
 ```

<h2>Usage In Components</h2>

You can use the state that is stored in context anywhere in the application now because you have inserted all of your app in <span><</span>ContextProvider></span><span><</span>/ContextProvider></span> tag . If you want your state to be available only in specific section within your app so you can wrap only that section with it

<h3>Example</h3>

 ``` javascript
import type { Metadata } from "next";
import ContextProvider from "./Context.tsx";
import Section_1 from "./Section-1.tsx";
import Section_2 from "./Section-2.tsx";
import Section_3 from "./Section-3.tsx";

import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <div>
        <ContextProvider> 
                    {/*Now your context is only available in these three components*/}
        <Section_1/>
        <Section_2/>
        <Section_3/>
        </ContextProvider>
        {children}
        </div>
    </html>
  );
}
 ```

you can import it in any of your section and use it as

 ``` javascript
 import React,{useContext} from "react";
import {myContext} from "./Context.tsx";

export default function Section_1() {
    const [name, setName] = useContext(myContext);

const changeUser = () => {
    setName("Muhammad Ayan");
}

  return (
        <div>
        <p> user name is {name}</p>
        <button type="button" onClick={changeUser}>update user </button>
        </div>
  );
}
 ```

 The component above is rendering name muhammad affan along with button to change user using <b> changeUser </b>  function . you can import it in any other component using useContext hook and get the value in global state as well as the provided setter function allows you to change the value from any of your component 