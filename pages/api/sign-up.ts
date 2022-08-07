import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const token = Math.random().toString(16).slice(2);
        res.setHeader(
            "set-cookie",
            serialize("token", token, { path: "/", httpOnly: true })
        );
        res.status(200).json({
            message: "you logged in successfully",
            user: { name: "User" },
        });
    }
}
