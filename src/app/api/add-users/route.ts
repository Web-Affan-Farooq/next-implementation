import { NextRequest, NextResponse } from "next/server";
import DataBase, { Iuser } from "@/logic/USERS_DATA";

export async function POST(req:NextRequest, res:NextResponse) {
    const newUser = await req.json();

    let {data, response} = DataBase;
    let alreadyExists = data.find((user:Iuser) => {
        user.email === newUser.email && user.id === newUser.id 
    });
    if(alreadyExists) {
        response.message = "User already exists";
        return Response.json({apiData:data, apiResponse:response.message})  
    }
    else {
        data.push(newUser);
        response.message = "Post request sucessfull";
        return Response.json({apiData:data, apiResponse:response.message})  
    }
}