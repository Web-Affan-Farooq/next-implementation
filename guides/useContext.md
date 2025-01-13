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


## Creating Context:
Now repeat the same scenerio with useContext . Create a <b>Client component</b> in a new typescript file <b>context.ts</b> file and create a component in it as

``` javascript
"use client";
import React from "react";
// will be created in context.ts
const Context = () => {
    return (
        <div>component-1</div>
    )
}
export default Context;
 ```

 in react ,we know that each component recieves it's nested components as <b>Children</b> props . so destructure a new parameter in component called <b>"children"</b> 

  ``` javascript
  "use client";
import React from "react";
// will be created in context.ts
const Context = ({children}) => {
    return (
        <div>
        {children}
        </div>
    )
}
export default Context;
 ```

furthur more , the type of this children prop becomes react node as.

  ``` javascript
  "use client";

import React from "react";
// will be created in context.ts
const Context = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
        {children}
        </div>
    )
}
export default Context;
 ```

 now import <b>createContext</b> in your file and create a new context as 

   ``` javascript
     "use client";
   import React {createContext} from "react;
// will be created in context.ts

   const myContext = createContext();  // context

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
     "use client";
   import React {createContext} from "react;
// will be created in context.ts

   const myContext = createContext();  // context

const ContextProvider = ({children}:React.ReactNode) => {
    return (
        <myContext.provider>
        {children}
        </myContext.provider>
    )
}
export default ContextProvider;
 ```

The <code><span><</span><span>myContext.provider></span><span><</span><span>/myContext.provider></span></code> tag accepts a <b>value</b> prop that we have to pass. For now just create a state for storing data. This state helps us get data globally on any component and the provided setter function will helps us to update this state from anywhere in our app.

``` javascript
     "use client";
   import React {createContext, useState} from "react;
   // will be created in context.ts

   const myContext = createContext();  // context

const ContextProvider = ({children}:React.ReactNode) => {

    const [nameState, setNameState] = useState<string>("muhammad affan"); // "nameState" state with setter function "setNameState"

    return (
        <myContext.provider>
        {children}
        </myContext.provider>
    )
}
export default ContextProvider;
 ```

now pass array containing state <b>nameState</b> along with it's setter function <b>setNameState</b> to the value prop as

``` javascript
"use client";
   import React {createContext, useState} from "react;
// will be created in context.ts

   const myContext = createContext();

const ContextProvider = ({children}:{children:React.ReactNode}) => {

    const [nameState, setNameState] = useState<string>("muhammad affan"); // "nameState" state with setter function "setNameState"

    return (
        <myContext.provider value={
            [nameState, setNameState] // passed an array of state along with it's setter function
            }>
        {children}
        </myContext.provider>
    )
}
export default ContextProvider;
 ```

 that's it. your context is created, now one more step is to explicitly type the states and all the context in our component because we are using typescript.

 Note that the context stores a complete state inside it in the form of array containing state data and a setter function to update it. 

 ```typescript 
// will be created in context.ts

   const myContext = createContext(); // contains ["muhammad affan", setNameState()];

 ```

 Don't worry ,this is not the actual code. It is the pictorial representation of our context. The main point is data type of data stored in the state is <b>string</b> and the type of setter function is <b><code>SetStateAction<<span></span>string></code></b>.Also the the react has to update the state globally in every part of our app and specially in our <b>Virtual DOM</b> so that the type of setter function should be wrapped in <b>React.Dispatch<></b> to allow it to be change the value frequently see below. 

 ``` javascript
 // context.ts file
   const myContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(); //attached tuple type [] first value is the data type of state and second is the React.Dispatch< SetStateAction<string> > type 
 ```
<br/>

 Now the context accepts and initial value to be provided, leave it blank or if you're using react19 along with typescript , provide blank values as

  <br/>

 ``` javascript
 // context.ts file
   const myContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(["", () => {}]); // blank string with blank values
 ```
<br/>

 similarly, you can also store an array in state along with it's setter function to make it available globally . This allows you to update the array from parts (means parts that you allow to accept context, we'll discussed below) of application . See array state example

 ``` javascript

"use client";
   import React {createContext, useState} from "react;
// will be created in context.ts

   const myContext = createContext<[string[], React.Dispatch<React.SetStateAction<string[]>>]>(); //attached type to context state

const ContextProvider = ({children}:{children:React.ReactNode}) => {

    const [nameState, setNameState] = useState<string[]>(["Muhammad affan","Ayan majeed", "Ibad uddin"]); // "nameState" state with setter function "setNameState"

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

 In this context , the state contains an array of names of some students and a setter function to update the list of these students. You can also store an object in it as 

```javascript
"use client";
   import React {createContext, useState} from "react;
// will be created in context.ts
interface Student {
    name:string;
    age:number;
    subject:string;
}

   const myContext = createContext<[Student, React.Dispatch<React.SetStateAction<Student>>]>({}); //attached type "Student" and initialize the context with a blank object "{}" 

const ContextProvider = ({children}:{children:React.ReactNode}) => {

    const [StudentData, setStudentData] = useState<Student>(
        {
            name:"Muhammad Affan",
            age:10,
            subject:"Mathematics",
        }
    ); // "StudentData" state with setter function "setStudentData" 

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
Weather the context will contains a primitive or any non-primitive data type in it, it has to be updated similarly as the corresponding updating methods in useState() hook 

now your final code will look like this

``` javascript
"use client";
   import React {createContext, useState} from "react;
// will be created in context.ts
   const myContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(["", () => {}]); //attached type and initialized with blank values

const ContextProvider = ({children}:{children:React.ReactNode}) => {  // type of childrens is React.ReactNode

    const [nameState, setNameState] = useState<string>("muhammad affan"); // "nameState" state with setter function "setNameState" the context will store this state

    return (
        {/*provider function tag with value containing array of data in state and setter function of useState that should be provided to the childrens to interact with the state*/}
        <myContext.provider value={
            [nameState, setNameState] // passed an array of state along with it's setter function
            }>
        {childrens}
        </myContext.provider>
    )
}
export default ContextProvider;
 ```

 ## Making It Globally Available
 Now in your root layout import the <b>ContextProvider</b> and wrap the entire return statement with <span><</span>ContextProvider></span><span><</span>/ContextProvider></span> tag so that your layout.tsx should look like this

 ``` javascript
import type { Metadata } from "next";
import ContextProvider from "./Context.tsx";  // importing the context component

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
    <ContextProvider> {/* Wrap the components in it so that the data should be shared between the wrapped components*/}
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

 The component above is rendering name muhammad affan along with button to change user using <b> changeUser </b>  function . you can import it in any other component using useContext hook and get the value in global state as well as the provided setter function allows you to change the value from any of your component wrapped in the <span><</span>ContextProvider>

 ## Best Practices:
 
 <ol>
 <li>Wrap only those selected components in <span><</span>ContextProvider> tag to restrict the flow of data and avoid unnessessary data shared across components </li>
 </ol>