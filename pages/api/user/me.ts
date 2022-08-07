import type { NextApiRequest, NextApiResponse } from "next";

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
    const { method, cookies } = req;

    if (method === "GET") {
        if (cookies.token) res.status(200).json({ name: `User` });
        else res.status(401).json({ message: "you are not logged in" });
    }
}
