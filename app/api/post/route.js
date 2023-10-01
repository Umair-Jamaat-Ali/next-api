import { NextResponse } from "next/server"

var posts = [
    {
    id:"1",
    course:"mobile development",
    description:"a detail description on mobile development app",
    image:"mobile.pnj"
},
{
    id:"2",
    course:"web development",
    description:"a detail description on web development app",
    image:"web.pnj"
},

]

export const GET = () =>{

    return NextResponse.json(posts);
}

export const POST = async (req) => {
    const body = await req.json();
    posts.push(body);

    return NextResponse.json({message:"post have been upload"})
}

export const DELETE = (req) => {

    const id = new URL (req.url).searchParams.get("id");
    console.log("id", id);

    posts = posts.filter((item) => item.id !== id)

    return NextResponse.json({message:"post have been delete"})
}

export const PUT = async (req) => {
    const body = await req.json()

    posts = posts.map((item) => {
        if (item.id === body.id) {
            return body
        }
        else {
            return item
        }
    })

    return NextResponse.json({message:"post have been updated"})
}