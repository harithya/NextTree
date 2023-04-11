// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDatabase from '@/lib/mongodb';
import validation from '@/lib/validatator';
import Joi from 'joi';
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })

    const { error } = schema.validate(req.body, { abortEarly: false })
    if (error) return res.status(422).json(validation(error))

    const { email, password } = req.body
    try {
        const { db } = await connectToDatabase();
        const auth = await db.collection("users").findOne({ email });
        if (auth && bcrypt.compareSync(password, auth?.password)) {
            // @ts-ignore
            const token = jwt.sign({ id: auth?._id }, process.env.JWT_PRIVATE_KEY, { expiresIn: "7d" });
            return res.status(200).json({
                message: "User logged in successfully",
                data: {
                    name: auth?.name,
                    email: auth?.email
                },
                token
            });
        }
        return res.status(422).json({ message: "Invalid credentials" });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Something went wrong" });
    }
}
