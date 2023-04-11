// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Joi from 'joi'
import validation from '@/lib/validatator';
import connectToDatabase from '@/lib/mongodb';
import bcrypt from 'bcrypt'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) return res.status(422).json(validation(error));

    const { db } = await connectToDatabase();
    const { name, email, password } = req.body
    try {
        await db.collection("users").insertOne({
            name,
            email,
            password: bcrypt.hashSync(password, 10)
        });
        return res.status(200).json({ message: "User created successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }


}
