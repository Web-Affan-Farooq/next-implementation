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