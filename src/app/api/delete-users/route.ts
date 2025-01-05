// import { NextRequest, NextResponse } from "next/server";
// import Database from "../../../logic/USERS_DATA";
// import { IUsers } from "../../../logic/USERS_DATA";

// export async function DELETE(req:NextRequest,res:NextResponse) {
//     let userToBeDeleted = await req.json();
//     // console.log(userToBeDeleted.id);
//     // console.log(Database[3-1].id);
//     let required:IUsers | undefined= Database.find((user:IUsers, index:number) => {
//         return user.id === userToBeDeleted.id
//     });
//     if(required) {
//         Database.splice(Database.indexOf(required),1);
//         console.log("user successfully deleted");
//         return Response.json(Database);
//     }    else {
//         return Response.json({message:"UserNotfound"});
//     }

//     // console.log(Database.findIndex((user:IUsers) => { user.id === userToBeDeleted.id}));
// }
import DataBase, { Iuser } from "@/logic/USERS_DATA";
import { NextRequest, NextResponse } from "next/server";
import React from "react";

export async function DELETE(req:NextRequest, res:NextResponse) {
    // {id:3}
    let {id} = await req.json();
    let {data, response} = DataBase;

    let required:Iuser | undefined= data.find((user:Iuser) => {
        return user.id === id;
    });
    if(required) {
        let index= data.indexOf(required);
        console.log("User Found: ", data[index]);
        
        data.splice(index, 1)
        return Response.json({apiData:data,apiResponse:"Delete request successfull"});
    }else {
        console.log("User Not Found");
        return Response.json({apiData:data, apiResponse:"No user found"})
    }
}