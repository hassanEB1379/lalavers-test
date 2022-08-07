import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default function logoutHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method, cookies } = req;
    console.log(cookies);

    if (method === "GET" && cookies.token) {
        res.setHeader(
            "set-cookie",
            serialize("token", "", {
                maxAge: -1,
                path: "/",
                httpOnly: true,
            })
        );

        res.status(200).json({ message: "You have successfully logged out" });
    }
}
