import { NextURL } from "next/dist/server/web/next-url"
import { NextResponse, NextRequest } from "next/server"



export const GET = async(req: NextRequest, res: Response) => {


    try {
        return NextResponse.json({
            status: 200,
            message: "ok"
        })
    } catch (error) {
        return NextResponse.json({
            status: 400,
            message: "bad"
        })
    }
}