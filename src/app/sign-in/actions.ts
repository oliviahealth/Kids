"use server"

import { PrismaClient } from '@prisma/client'
import { ISigninFormData } from "./definitions";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const signInUser = async (signupFormData: ISigninFormData) => {
    const { email, password } = signupFormData;

    try {
        const user = await prisma.user.findUnique({
            where: { email }
        });
        
        if(!user || !user.password) {
            return false;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid) {
            return false;
        }

    } catch {
        return false;
    }

    return true;
}