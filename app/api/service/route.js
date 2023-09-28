import { NextResponse } from "next/server"


export const GET = () => {
  let  service = {
        name:"umair",
        course: "web and mobile deveolpment app",
        duration: "one years",
        loaction: "saylani welfare faisalabad"
    }

    return NextResponse.json(service);
}


export const POST = () => {
    return NextResponse.json({message:"Post function called"});
}

export const PUT = () => {
    return NextResponse.json({message:"Put function called"});
}


export const DELETE = () => {
    return NextResponse.json({message:"Delete function called"});
}