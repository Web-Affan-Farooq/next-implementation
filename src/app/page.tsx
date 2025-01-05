"use client";

import React, { useEffect, useState } from 'react';
import { Iuser} from "../logic/USERS_DATA";

const Home = () => {

  const [users, setusers] = useState<Iuser[]>();

  const [message, setmessage] = useState("");

  const getAllUsers = async () => {
    try {
      const response = await fetch("/api/get-all-users");
      const {apiData, apiResponse } = await response.json();
      setusers(apiData);
      setmessage(apiResponse);
      alert(apiResponse)
    }
    catch (err) {
      console.error(err);
    }
  }

  const deleteUser = async () => {
    let deleteThisUser = 5;
    try {
      const request = await fetch("/api/delete-users", {
        method:"DELETE",
        headers: {
          "Content-Type":"application/json"
        },
        body:JSON.stringify({id:deleteThisUser})
      });

      const response = await request.json();
      console.log(response);
      // setusers(response.apiData.data);
      console.log(response.apiData);
      console.log(response.apiResponse);
      // setmessage(response.apiResponse);
      alert(response.apiResponse)
    }
    catch (err) {
      console.error(err);
    }
  }

  const addUser = async () => {  // fix error 
    let newUser:Iuser = {
      username:"New user",
      id:21,
      email:"newemail.gmail.com"
    };

    try {
      const request = await fetch("/api/add-users", {
        method:"POST",
        headers: {
          "Content-Type":"application/json"
        },
        body:JSON.stringify(newUser)
      });
      const response = await request.json();
      console.log(response);
      let {apiData, apiResponse} = response;
      
    }
    catch(err) {
      console.error(err);
    }

  }

  // useEffect(() => {
  // console.log(users);
  // console.log(message);
  // },[users, message])

  return (
    <div>

      <div className='flex flex-row flex-wrap justify-center items-center gap-3'>
        {users?.map((user: Iuser) => {
          return <div key={user.id} className='rounded-lg border-2 border-solid border-black w-[300px]'>
            <div>Name: {user.username}</div>
            <div>Name: {user.email}</div>
          </div>
        })}
      </div>


      <br /><br /><br /><br /><br /><br /><br />

      <div className='flex flex-row flex-wrap justify-center items-center gap-5'>
        <button type="button" className='px-[20px] py-[10px] rounded-lg text-white bg-black' onClick={() => {
          addUser();
        }}>Add a new user</button>
        <button type="button" className='px-[20px] py-[10px] rounded-lg text-white bg-red-500' onClick={() => {
          deleteUser();
          // console.log(users);
          // console.log(message);
        }}>Delete user</button>
        <button type="button" className='px-[20px] py-[10px] rounded-lg text-white bg-purple-600'>Update user</button>
        <button type="button" className='px-[20px] py-[10px] rounded-lg text-white bg-blue-600'>Replace a user</button>
        <button type="button" className='px-[20px] py-[10px] rounded-lg text-white bg-pink-500'>Get user-1 </button>
        <button type="button" className='px-[20px] py-[10px] rounded-lg text-white bg-green-500' onClick={() => {
          getAllUsers();
        }}>Get all </button>
      </div>
    </div>

  )
}

export default Home