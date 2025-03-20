"use server"

import { PrismaClient } from '@prisma/client'
import { ISignupFormData } from "./definitions";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const createUser = async (signupFormData: ISignupFormData) => {
    const { name, email, password } = signupFormData;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });
    } catch {
        return false;
    }

    return true;
}