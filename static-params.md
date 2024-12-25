## Static Parameters In Nextjs 15:

# Basic overview:
static parameters are the dynamic parameters that are created on build time. It is use to generate all the possible parameters values on build time resulting in faster responses 
we can implement this by using a function called <i style="color:blue">generateStaticParams()</i>
let's implement a data fetching example

## Implementation:

# Step-1: 
 first create a dynamic segment like products/[id]/page.tsx by following [This guide](/dynamic-segments.md).

# Step-2: 

1. use the generateStaticParams function as async function

``` Javascript 
export async function generateStaticParams() {}
```

2.fetch data from API as you can do
``` Javascript 
export async function generateStaticParams() {
  try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);

        
    if (!response.ok) {
      throw new Error('Error fetching todos'); // Handle errors gracefully
    }

    const data: Itodo[] = await response.json();  // fetched data successfully

    return data.map((todo: Itodo) => ({
      params: { id: todo.id },
    })); /*
    return array of objects as 
    [
      {
        params: {id:1}
      },
      {
        params: {id:2}
      }
    ]
    */

  }
  catch(error) {
    console.error(`Error generating static parameters ${error}`);
    return [];
  }
}
```

<br/>
<br/>
<br/>
3. Your code should look like this:

``` javascript
export async function generateStaticParams(): Promise<{ params: { id: number } }[]> { // returning array of objects after being resolved
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);

    if (!response.ok) {
      throw new Error('Error fetching todos'); // Handle errors gracefully
    }

    const data: Itodo[] = await response.json(); // Array of todo objects

    return data.map((todo: Itodo) => ({
      params: { id: todo.id },
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    // Handle errors gracefully (e.g., return an empty array)
    return [];
  }
}
```

4. Make sure to explicitly type function 

``` Javascript 
export async function generateStaticParams(): Promise<{ params: { id: number } }[]> { }

```
<br/>
This will make sure that the function will return array of objects when promised is resolved

# Step-3: 
Now you're almost completed . Create component if you've not created yet. Make sure compoenent should be dynamic

``` typescript
const GenerateStaticParamsComponent = ({ params }: Params) => {
  const resolved = React.use(params);

  return (
    <div className='text-white'>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      ProductsDynamicSegment {resolved.id}
    </div>
  );
};

export default GenerateStaticParamsComponent;
```

# Step-4: 
 Now make build your app to production simply by running build command :

 ``` bash
 npm run build
 ```

 This may be show some errors in your app:

 I've created an example of error . See this example below

 ```bash
./src/app/generate-static-params/[id]/page.tsx
3:17  Error: 'useEffect' is defined but never used.  @typescript-eslint/no-unused-vars
  ```

  <div style="background-color:black; color:aqua; font-weight:300">
  <span style="color:red; font-weight:bold">Fail to compile:</span> <br/>
./src/app/generate-static-params/[id]/page.tsx
<br/> 3:17 &nbsp;<span style="color:red; font-weight:bold">Error:</span>&nbsp;&nbsp; 'useEffect' is defined but never used. &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:gray">@typescript-eslint/no-unused-vars</span>
</div>

<br/>

For now, there you see a module name with gray color " @typescript-eslint/no-unused-vars"
<br/>

 just goto .eslintrc.json file and disable this feature. Note that this will not usually recommended and it's a very bad approach because in typescript disabling any feature can results in harmful security risks in your application. So use these options wisely

 just add this line in json format

 ``` json
   "rules": {
    " @typescript-eslint/no-unused-vars" :"off"
  }
  ```
  <br>
  and your.eslintrc.json file should look like this.

   ``` json
{
  "extends": ["next/core-web-vitals", "next/typescript"],
  "rules": {
    " @typescript-eslint/no-unused-vars" :"off"
  }
}

  ```

# Step-4: 
 Once all issues resolved, run the build command again and you'll see interface like this

<div style="background-color:black; color:aqua; font-weight:300">

Route (app)      &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;                        Size  &nbsp; &nbsp; &nbsp; &nbsp;    First Load JS <br/>
┌ ○ /          &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;                          153 B   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;        99.8 kB
├ ○ /_not-found     &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;                     897 B         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   101 kB
├ ○ /about           &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;                    153 B        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   99.8 kB
├ ƒ /docs/dynamic/[...slug]   &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;           153 B         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  99.8 kB
├ ƒ /generate-static-params/[id]  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;       153 B        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   99.8 kB
├ ○ /login                    &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;           153 B        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   99.8 kB
└ ƒ /products/[id]    &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;                   153 B       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    99.8 kB
+ First Load JS shared by all  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;          99.7 kB
  ├ chunks/215-4a487724d7dbc7a6.js &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;      45.2 kB
  ├ chunks/4bd1b696-1855a2e92938cec4.js&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  52.6 kB
  └ other shared chunks (total)  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;        1.88 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand


</div>

Look for that option in the output
<div style="background-color:black; color:aqua; font-weight:300">
 ├ ƒ /generate-static-params/[id]&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;153 B     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;      99.8 kB 
 </div>
 
 <br/>
 if present, you've successfully generated your first static parameters