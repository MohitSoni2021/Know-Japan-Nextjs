import { NextURL } from "next/dist/server/web/next-url"
import { NextResponse, NextRequest } from "next/server"



export const GET = async(req: NextRequest, res: Response) => {
    const parameters:any = []
    const data = await req.nextUrl.searchParams.forEach((value:string, key:string, parent:URLSearchParams)=>{
        parameters.push({
            key: key,
            value: value
        })
    })
    try {
        return NextResponse.json({
            status: 200,
            message: "ok",
            data: parameters
        })
    } catch (error) {
        return NextResponse.json({
            status: 400,
            message: "bad"
        })
    }
}