## 1. implementation of dynamic segments :

# Step-1: 
 first create a dynamic segment like products/[id]/page.tsx

# Step-2: 
  create and render a component

# Step-3: 
 destructure a parameter and import type "Params" from next/dist/server/request/params . These will act as type declarations for params parameter

# Step-4: 
 create a async function and return resolved required parameters value from that function

# Step-5: 
 wrap that function in React.use() and store in variable. Now this variable contains a required value that you're going to access it using simple params.YOUR_DYNAMIC_SEGMENT_NAME

# Step-6: 
 use it where you want in your component.


## code for dynamic segments:

import React from "react";
import type { Params } from "next/dist/server/request/params";

const DynamicComponent = ({ params }: { params: Params }) => {

    const handleParams = async () => {
        let requiredParams = await params.id;
        return requiredParams; 
    }
    let parameters = React.use(handleParams());


  return (
    <div>This is dynamic page no. {parameters}</div>
  );
};

export default DynamicComponent;




## Q1. How can you create a dynamic route in Next.js? Give an example.

# Follow-up: How do you access dynamic route parameters?





----------------------------------------------------

`
import React from 'react';
import type { Params } from 'next/dist/server/request/params';
// export async function generateStaticParams() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const data = await response.json();

//     return data.map((data:any) => {

//     })
// }


const ProductsDynamicSegment = ({params}: {params: Promise<{id:string}>}) => {

  console.log(params);
  
  return (
    <div>ProductsDynamicSegment</div>
  )
}

export default ProductsDynamicSegment

/*
import { Metadata } from 'next';

// Define props for the page component
interface ProductPageProps {
  params: { id: string }; // Dynamic route parameter
}

// Fetch all the possible `id` values for pre-rendering
export async function generateStaticParams() {
  const products = await fetch('https://api.example.com/products')
    .then((res) => res.json());

  return products.map((product: { id: number }) => ({
    id: product.id.toString(), // Convert `id` to a string
  }));
}

// Optional: Add metadata for the page
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await fetch(`https://api.example.com/products/${params.id}`)
    .then((res) => res.json());

  return {
    title: product ? product.name : 'Product Not Found',
    description: product ? product.description : 'This product does not exist.',
  };
}

// The dynamic page component
const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await fetch(`https://api.example.com/products/${params.id}`)
    .then((res) => res.json());

  // Handle the case where the product is not found
  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductPage;

 */
  
`