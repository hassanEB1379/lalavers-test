import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const token = Math.random().toString(16).slice(2);
        const cookie = `token=${token}`;
        res.setHeader("Set-Cookie", cookie);
        res.status(200).json({ message: "you logged in successfully" });
    }
}
