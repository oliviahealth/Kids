"use server";

import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { cookies } from "next/headers";

import { ISignupFormData } from "./definitions";

const prisma = new PrismaClient();

export const createUser = async (signupFormData: ISignupFormData) => {
    const { name, email, password, accessToken } = signupFormData;

    const token = await prisma.accessToken.findFirst({
        where: {
          id: accessToken
        }
    });
    if(!token) {
        throw new Error("Access token invalid")
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });

    const jwt_token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    cookies().set({
        name: "jwt",
        secure: process.env.NODE_ENV === 'production', // Ensure this is set to true in production
        value: jwt_token,
        httpOnly: true,
        path: "/",
    });

    return { user, token: jwt_token }
};
