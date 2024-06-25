import { NextResponse } from "next/server"
import { ReadBlogDataFile, GetSingleBlog } from '../../../../backend/BlogPage/boggingHangler'


export const POST = async (req: Request, res: Response) => {
    let { blogid } = await req.json()
    try {
        const serverResponse = await GetSingleBlog(blogid)
        return NextResponse.json({
            status: 200,
            message: "ok",
            data: serverResponse
        })
    } catch {
        return NextResponse.json({
            status: 400,
            message: "bad"
        })
    }
}