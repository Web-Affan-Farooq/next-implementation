## Fetching APIs in NextJS. Making your app dynamic

<p>Apis are usually fetched using <i style="color:blue">fetch()</i> method. But there are also some different appoaches to do it so</p>

<h1>Approach-1 Fetch api in client side:</h1>

<p>As we have to use callbacks and async await in it, this is not allowed to be directly implemented in our app. Here we have to use a built-in react hook called <i style="color:blue">useEffect()</i> which runs the fetch function inside it and handle it using
<i style="color:blue">useState()</i></p>

<h3>Implementation</h3>

``` typescript 

"use client";

import React, { useEffect, useState } from 'react'

interface TODO {  // todo types
  id: number;
  title: string;
  completed: false;
  userId: number;
}

const Home = () => {
  const [dataFromAPI, setdataFromAPI] = useState<TODO[] | []>();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');

        const data = await response.json();
        setdataFromAPI(data)
        return data;

      }
      catch (err) {
        console.error(err);
      }
    }
    getData();

  }, []);
  return (
    <div>
      {dataFromAPI?.map((todos: TODO) => {
        return <div key={todos.id}>{todos.title}</div>
      })}
    </div>
  )
}

export default Home

```

<b>in this component :</b>
<ol>
<li>Component is client sided</li>
<li>We have used basic react hooks for data storing and running side effects [useState hook](/guides/useState-hook.md) [useEffect hook](/guides/useEffect-hook.md)</li>
</ol>

<hr />

<h1>Approach-2 fetching data on server:</h1>
<br />
<p>You can directly fetch data from api within your server component as</p>

``` javascript

import React from 'react';

interface TODO {  // todo types
    id:number;
    title:string;
    completed:false;
    userId:number;
}

const Home = async () => {

      const response = await fetch('https://jsonplaceholder.typicode.com/todos/');

      const data = await response.json();

      if (!response.ok && response.status !== 200) {
        console.log("Error while fetching")
      }

  return (
    <div>
      {data?.map((todo:TODO,index:number) => {
        return <div key={index}>{todo.title}</div>
      })}
    </div>
  )
}

export default Home;

```

This approach will be more better than approach one because note that it's a server component and there is no exception handling. this data will fetch and rendered on server. Using powerfull capabilities of Next.JS . Yes, it is fast because your data is prerendered on server and then sended to you as static files.

<p>Next.JS extends the native fetch() function and add some other parameters</p>
<br/>

## Static Site Generation (SSG)

This method includes fetching ,caching and rendering data on server. Just update the obove component's fetch function and it will look as 

``` javascript
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
          cache:"force-cache"
      });

```
The data fetched on server is Static by default

<br/>

## Server Side Rendering (SSR)

This method include fetching data on server but disabling cache as:

``` javascript
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
          cache:"no-store"
      });

```
<br/>

## Incremental Site Generation (ISG)

This method include fetch data after given interval of time with no cache. This is commonly used in applications where data has to be updated in realtime or very frequently 
``` javascript
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
          next: {
            revalidate:10
          }
      });
```
<br/>

<span style="color:blue; font-weight:bold;">Bonus:</span> Explore free apis collections on <a href="https://api-ninjas.com/">api-ninjas.com</a> and build some awesome projects. Use 

## Data fetching patterns

There are two patterns of fetching data sequencial and parallel. 
sequencial refers to fetching on by one, while parallel mean fetching both at same time

## Parallel fetching 

``` javascript 

iimport React from 'react';

interface TODO {  // todo types
  id: number;
  title: string;
  completed: false;
  userId: number;
}
interface Comments { // types for comments data
  body: string;
  postId: number;
  id: number;
  name: string;
  email: string;
}

const getDataAPI_1 = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');

    const data = await response.json();
    return data;

  }
  catch (err) {
    console.error(err);
  }
}

const getDataAPI_2 = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');

    const data = await response.json();
    return data;


  }
  catch (err) {
    console.error(err);
  }
}
const Home = async () => {
  const apis = [await getDataAPI_1(), await getDataAPI_2()]; // making array of functions to be resolved

  // choice-1: Getting all the stuff

  const ALL_DATA = await Promise.all(apis); // map over the array and resolve them all
  console.log(ALL_DATA); // will print all data from getDataAPI_1() getDataAPI_2() functions

  // Better approach: destructure it as
  const [dataFromAPI_1, dataFromAPI_2] = await Promise.all(apis);  // map over the array and resolve them all

  console.log(dataFromAPI_1); // get indivisually
  console.log(dataFromAPI_2);// get indivisually


  return (
    <div className='text-white'>
      <h1 className='text-center text-3xl text-white'>Data from api-1</h1>
      {dataFromAPI_1?.map((todo: TODO, index: number) => {
        return <div key={index}>{todo.title}</div>
      })}

      <div className=''>
        <h1 className='text-center text-3xl text-white'>Data from api-2</h1>

        {dataFromAPI_2.map((comments: Comments) => {
          return <div key={comments.id}>
            From <span className='text-blue-500'>{comments.name}</span>
            <br />
            <span className='text-gray-400'>{comments.body}</span>
          </div>
        })}
      </div>

    </div>
  )
}

export default Home;

```


<br/>

## Sequencial fetching 
just remove the promise.all() from above component and handle both api's manually

<!--
included later

 ## Using cache():

cache() function is another react built in function that is used to enable component-level caching

# implementation:

``` javascript 
import React from 'react';

interface TODO {  // todo types
    id:number;
    title:string;
    completed:false;
    userId:number;
}

const getData = cache(
  async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');

    const data = await response.json();
    return data;


  }
  catch (err) {
    console.error(err);
  }
}
)

const Home = async () => {


  return (
    <div>
      {data?.map((todo:TODO,index:number) => {
        return <div key={index}>{todo.title}</div>
      })}
    </div>
  )
}

export default Home;

 ``` -->