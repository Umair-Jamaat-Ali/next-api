import { NextResponse } from "next/server"


export const GET = (req , route) => {

    console.log("route",route.params);
 return NextResponse.json({message:"get method call from api/user/dynamic path " , userName: route.params.userName});
}


