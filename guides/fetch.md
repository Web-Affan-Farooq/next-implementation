## Fetching APIs in NextJS. Making your app dynamic

<p>Apis are usually fetched using <i style="color:blue">fetch()</i> method. But there are also some different appoaches to do it so</p>

<h1>Approach-1 Fetch api in client side:</h1>

<p>As we have to use callbacks and async await in it, this is not allowed to be directly implemented in our app. Here we have to use a built-in react hook called <i style="color:blue">useEffect()</i> which runs the fetch function inside it and handle it using
<i style="color:blue">useState()</i></p>

<h3>Implementation</h3>



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


<p>While some cases you'll also have to disable the static response feature. The only thing you'll have to do is</p>

``` javascript

export const dynamic= "force-dynamic" ;

```
<span style="color:blue; font-weight:bold;">Bonus:</span> Explore free apis collections on <a href="https://api-ninjas.com/">api-ninjas.com</a> and build some awesome projects. Use 