## Suspense in react

# Basic overview: 
Suspense is a built in react component that is used for optimizing performance in react applications while acting as a resolved component with dynamic data. it provides options like:

<b>fallback={your loading skeleton}</b>







Intermediate-Level Questions
What are dynamic segments and how can you implement catch-all routes in Next.js?
Hint: Focus on [...slug].js.



Explain the difference between getStaticProps and getServerSideProps. How are they related to routing?

How do you create API routes in Next.js? Where are they located, and how do you call them?
Hint: Explain the pages/api folder.

How do you handle client-side routing in Next.js? When should you use it over server-side navigation?

What is the difference between shallow routing and normal routing? How can you implement shallow routing?
Follow-up: Provide a use case where shallow routing is beneficial.

Advanced-Level Questions
How can you customize the 404 error page and 500 error page in Next.js?

What is the role of the useRouter hook in Next.js? Give an example of how it can be used to access query parameters.

How do you implement optional catch-all routes in Next.js? What is their syntax?

Explain how middleware can be used to intercept routes in Next.js. Provide an example use case.

What are the benefits of parallel routes and intercepting routes in Next.js (e.g., Next.js App Directory features)?

How does Next.js optimize routing for static sites versus server-rendered sites?

Can you explain the difference between prefetching and lazy loading in Next.js routes?

How do you implement internationalized routing in Next.js?

Practical Coding Questions
Create a dynamic route that accepts a slug parameter and fetches data based on it. Use getStaticPaths and getStaticProps.

Implement a catch-all route in the pages directory and display the route parameters.

Write an API route under pages/api that returns JSON data when visited.

Use the useRouter hook to access the query parameters of a page and conditionally render content.

Implement shallow routing to update the URL without triggering a full page reload.

