import { NextResponse } from "next/server"
import { ReadBlogDataFile, GetSingleBlog } from '../../../../backend/BlogPage/boggingHangler'


export const POST = async (req: Request, res: Response) => {
    let url = await req.url
    const {blogid} = await req.json()
    try {
        const serverResponse = await GetSingleBlog(blogid)
        return NextResponse.json({
            status: 200,
            message: "ok",
            data: serverResponse,
            id:blogid
        })
    } catch {
        return NextResponse.json({
            status: 400,
            message: "bad"
        })
    }
}

export const GET = async(req:Request, res: Response) => {
    try {
        return NextResponse.json({
            status: 200,
            message: "ok",
            data: "data working .. "
        })
    } catch (error) {
        return NextResponse.json({
            status: 400,
            message: "bad"
        })
    }
}