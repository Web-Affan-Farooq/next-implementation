## useState() Hook In React:

<b style="color:blue; font-style:italic;">useState()</b> is a hook in react that allow us to manage states in our pages. 

<h2>What is state of an element??</h2>
<p>In very short words the state is defined as <b>current situation of an element which it's undergoing now when rendered on screen and if we change it, his state supposed to be changed</b></p>

## Basic syntax:

``` Javascript
const [state, setterFunction] = useState();

 ```
 These states will acts as variables for storage in react

## Implementation:

<b>Step-1:</b> import useState() as


``` Javascript
import React,{useState} from 'react';
 ```
<b>Step-2:</b> use it inside your component function as

``` Javascript
"use client";
import React,{useState} from 'react';

const Home = () => {
  const [name, setName] = useState<string | null("Muhammad Affan");

  return (
    <div>
    {name}
    </div>
  )
}

export default Home

 ```
<p>This component will show a name <b>Muhammad affan </b> when rendered within this element
</p>
You also have consider it as variables in react that are readable and updatable.

## Important note:

<ol>
<li>you can store any data type in state as well as objects and arrays. and also update them on various conditions</li>
<li>you can store any data type in state as well as objects and arrays.</li>

</ol>

## updating arrays:

Arrays can be updated by directly applying array methods.

``` javascript 
"use client";

import React, { useState } from 'react';

const Home = () => {
  const [APIData, setAPIData] = useState<string[]>([
    "Mango",
    "orange",
    "banana",
    "peach"
  ]);

  return (
    <div className='text-white'>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      {APIData.map((fruits:any) => {
        return fruits;
      })}
    </div>
  )
}

export default Home

```
but remember that you've to use these methods inside useEffect() hook in react because if you implement any function or use any method. it will implemented twice. See below

``` javascript 
"use client";

import React, { useState } from 'react';

const Home = () => {
  const [APIData, setAPIData] = useState<string[]>([
    "Mango",
    "orange",
    "banana",
    "peach"
  ]);

  APIData.push("pomegranate") // This will add pomegranate twice
  
  return (
    <div className='text-white'>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      {APIData.map((fruits:any) => {
        return fruits;
      })}
    </div>
  )
}

export default Home

```