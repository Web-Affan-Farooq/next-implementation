## 1. implementation of dynamic segments :

# Step-1: 
 first create a dynamic segment like products/[id]/page.tsx

 create a route which serves as a parent route for dynamic implementation E.g products and create it's corrensponding <b>page.tsx</b> file also

# Step-2: 
  create and render a component

  ``` bash
  const ProductsDynamicSegment = () => {
  
  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        ProductsDynamicSegment</div>
  )
}

export default ProductsDynamicSegment

  ```

# Step-3: 
 destructure a parameter in the component named as "params"

 ``` javascript
 const ProductsDynamicSegment = ( {params}) => {
  
  return (
    <div>
        
        
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        ProductsDynamicSegment</div>
  )
}

export default ProductsDynamicSegment

```
then outside the component, create an interface called "Params"

``` javascript
// interface for parameters

interface Params {
  params: Promise<{id:string}>;
}

```

also we have to use built in "use " function in react to resolve these parameters of type "promise" to a predicted "string". Note that React.use function is used for resolving small promises within our app. use it as 

``` javascript
interface Params {
  params: Promise< {id:string} >; // shows that when the promise is resolved it will give an object containing string typed id
}

const ProductsDynamicSegment = ( {params} : Params) => {

  const resolved = React.use(params)   // React.use for resolving promise 
  console.log(resolved); // checking the resolved parameters. displays an object cotaining our parameter values
  
  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        ProductsDynamicSegment {resolved.id}</div>
  )
}

export default ProductsDynamicSegment
```


## code for dynamic segments:

``` javascript
import React from 'react';

interface Params {
  params: Promise<{id:string}>;
}

const ProductsDynamicSegment = ( {params} : Params) => {

  const resolved = React.use(params)
  console.log(resolved);
  
  return (
    <div className='text-white'>
        
        
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        ProductsDynamicSegment {resolved.id}</div>
  )
}

export default ProductsDynamicSegment
```

<br/>
<br/>
<br/>

## Sharp your skills:

<b> Q1. How can you create a dynamic route in Next.js? Give an example.
</b>

<b>Follow-up: How do you access dynamic route parameters?</b>

<i>See [products route](/src/app/products/) for more consise</i>