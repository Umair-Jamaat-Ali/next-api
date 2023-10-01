import { NextResponse } from "next/server"


export const GET = (req) => {
  let  service = {
        name:"umair",
        course: "web and mobile deveolpment app",
        duration: "one years",
        loaction: "saylani welfare faisalabad"
    }

    

    return NextResponse.json(service);
}


export const POST = (req) => {

    const body = req.json();
    console.log("body", body);
    return NextResponse.json({message:"Post function called"});
}

export const PUT = () => {
    return NextResponse.json({message:"Put function called"});
}


export const DELETE = () => {
    return NextResponse.json({message:"Delete function called"});
}