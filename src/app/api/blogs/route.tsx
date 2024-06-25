import { NextResponse } from "next/server"
import { ReadBlogDataFile, GetSingleBlog, AddToFile, getLastId } from '../../../backend/BlogPage/boggingHangler'


export const GET = (req: Request, res: Response) => {
    try {
        let BlogReadData = ReadBlogDataFile()
        return NextResponse.json({
            status: 200,
            message: "ok",
            data: BlogReadData
        })
    } catch (error) {
        return NextResponse.json({
            status: 400,
            message: "bad"
        })
    }
}

export const POST = async (req: Request, res: Response) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let { data } = await req.json()
    data.id = getLastId()
    data.date = `${dd + '/' + mm + '/' + yyyy}`
    try {
        const serverResponse = await AddToFile({ ...data })
        return NextResponse.json({
            status: 200,
            message: "ok",
            data: data
        })
    } catch {
        return NextResponse.json({
            status: 400,
            message: "bad"
        })
    }
}
