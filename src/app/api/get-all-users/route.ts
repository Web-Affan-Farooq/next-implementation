import { NextRequest, NextResponse } from "next/server";
import DataBase from "@/logic/USERS_DATA";

export async function GET(req:NextRequest,res:NextResponse) {
    let {data,response} = DataBase;
    response.message = "Get request successfull";

    return Response.json({apiData:data, apiResponse:response.message});
}