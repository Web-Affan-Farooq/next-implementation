## Route handlers in Next.JS OR creating api endpoints

## Overview: 
Route handlers are the functions that handles our request on built in NextJS server and performs server side operation like authentication and authorization, fetching data from data base and responding to our client's requests and so on.

let's understand this by simply creating a built in mock api server within our Next.JS app which accepts requests using different methods and respond to each of them . These will also accept requests for indivisual users data and we will be able to perfrom CRUD (create,read,update,delete) functions in our server's database. For now we are using simple array containing objects with users data that acts as server database in our app. 
## Approach:

We will be creating different endpoints that accepts our request and respond differently as when request hit on our "/get-all-users" route, it will respond with data of all the users stored in a array called database . Similarly. "update-user" endpoint will be used to update the user using "PATCH" request, "delete-user" endpoint will be used to delete the user using "DELETE" request, "replace-user" endpoint will be used to replace the user using "PUT" request, "create-user" endpoint will be used to create new user using "POST" request. Also, when we want to get data of specific user, we will request it on the server specifically by utilizing dynamic route parameters and server will send the requested user to us.While we are peforming the operations. the server will also generating logs to our
## Implmentation:

## Step-1:
1. First create a folder named "api" in your app directory then inside of it create a new file named "route.ts". 
2. All of our server stuff has to be written inside of that file.
3. Note that you can also create additional nested routes as creating different folders inside app directory both having special file "route.ts" specifically for this project

``` curl
my-nextjs-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx  
│   ├── api/ 
│       ├── add-users/
│             ├── route.ts  // route handler 
│       ├── update-users/ 
│             ├── route.ts // route handler 
│       ├── delete-users/ 
│             ├── route.ts // route handler 
│       ├── get-all-users/ 
│             ├── route.ts // route handler 
│       ├── replace-user/ 
│             ├── route.ts // route handler 
├── public/ 

└── ... your_entire_folder_structure
 ```

 ## Step-2: Adding Sample Data

1. First we have to create an array containing our users as 

``` javascript 
interface IUsers {
    id: number;
    username: string;
    email: string;
}

const DataBase: IUsers[] = [ // this is the list that acts as database
    {
        id: 1,
        username: "Muhammad affan",
        email: "example@gmail.com"
    } // add other users in the list 
];
export default DataBase;

```

2. First we create an api endpoint function for listening GET request for doing this create this function inside /api/get-all-users/route.ts  as :

``` javascript 

```
