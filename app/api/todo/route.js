import { NextResponse } from "next/server"

export const POST =(req) =>{

    let title = new URL(req.url).searchParams.get("title");
    let des = new URL(req.url).searchParams.get("description");
    return NextResponse.json({message:"Post method call from api/user/dynamic path", data:title , description:des})
}

