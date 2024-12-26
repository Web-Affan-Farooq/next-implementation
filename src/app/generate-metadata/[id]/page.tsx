import React from "react";
import type { ResolvingMetadata, Metadata } from "next";

interface IProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params, searchParams }: IProps): Promise<Metadata> {
  // Await both promises to ensure data is available before using it
  const { id } = await params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await response.json();

  return {
    title: data.title || 'Default Title', // Handle potential missing title
  };
}

const GenerateMetadataComponent = ({ params, searchParams }: IProps) => {
  const resolvedId = React.use(params); // Extract id

  return (
    <div className="text-white">
      <br /> {/* Add a single line break for spacing */}
      GenerateMetadataComponent: {resolvedId.id ? resolvedId.id : 'Loading...'}
      {/* Display "Loading..." while data is being fetched */}
    </div>
  );
};

export default GenerateMetadataComponent;
 