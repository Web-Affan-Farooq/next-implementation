## Routing in NextJS

What is routing in Next.js? How is it different from React Router?
Hint: Explain file-based routing vs. library-based routing.


# Overview:
Routing is the endpoints where the request should be hit by the client and server returns some content which is specific to that page

There are two types of routing:

<b>1. File based</b>
<b>1. using react-router-dom also known as library-based-routing</b>

The main difference between the two is, the <i>react-router-dom</i> have to be manually import and used , while file based routing (like routing in nextjs) hasbeen implemented as by craeting a folder named as route name and a specific name file called page.tsx containing our components that have to be shown on the response


## Q1.How do you create a basic route in Next.js? Can you provide an example?

We can create a basic route by craeting folder that should be named as route name and then specific page.tsx file in it which contains the components that are to be rendered on that page

## Q2. What is the pages directory in Next.js? Why is it important?

Pages directory is the directory where all the route are located in NextJS project but it is implemented in the older versions of NextJS

## Q3. Explain the difference between pages/index.js and pages/about.js. How does Next.js handle these files?


## Q4. How do you navigate between routes in Next.js?
# Hint: Discuss the use of the Link component.
 using NextJS's built in <Link> component</Link> that acts as same as anchor tag in HTML