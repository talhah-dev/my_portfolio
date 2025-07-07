import mongooseDB from "@/lib/mongoDB";
import { NextResponse } from "next/server";
import contactModel from "../../../../models/contact";

export async function POST(req: Request) {
    try {
        await mongooseDB();

        const { name, email, message } = await req.json()

        if (!name || !email) {
            return NextResponse.json({ message: "All fields are required" });
        }

        const data = await contactModel.create({
            name,
            email,
            message
        })

        await data.save()

        return NextResponse.json({ sucess: true }, { status: 201 })
    } catch {
        return NextResponse.json({ sucess: false }, { status: 500 })
    }

}