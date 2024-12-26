import React , {useEffect} from 'react';

interface Params {
  params: Promise<{ id: string }>; 
}

interface Itodo { // Interface for todo data
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

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

/*


// Interface for post data
interface Post {
  slug: string;
  // Add other properties as needed for your posts
}

export async function generateStaticParams(): Promise<{ params: { slug: string } }[]> {
  try {
    const response = await fetch('https://.../posts');

    if (!response.ok) {
      throw new Error(`Error fetching posts: ${response.statusText}`);
    }

    const posts: Post[] = await response.json();

    return posts.map((post) => ({
      params: { slug: post.slug },
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    // Handle errors gracefully (e.g., return an empty array)
    return [];
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // ... (rest of your component logic using the slug)

  // Example: Fetch additional data based on the slug
  try {
    const response = await fetch(`https://.../posts/${slug}`);

    if (!response.ok) {
      throw new Error(`Error fetching post details: ${response.statusText}`);
    }

    const postDetails: Post = await response.json();

    // Use postDetails in your component rendering
  } catch (error) {
    console.error('Error fetching post details:', error);
    // Handle errors gracefully (e.g., display an error message)
  }

  return (
    <div>
    hello
      </div>
    );
  }
 */