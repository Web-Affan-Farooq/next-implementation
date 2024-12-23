import React from 'react';
import type { Params } from 'next/dist/server/request/params';
// export async function generateStaticParams() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const data = await response.json();

//     return data.map((data:any) => {

//     })
// }


const ProductsDynamicSegment = ({params}: {params: Promise<{id:string}>}) => {

  const resolved = React.use(params)
  console.log(resolved);
  
  return (
    <div className='text-white'>
        
        
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        ProductsDynamicSegment {resolved.id}</div>
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
  
