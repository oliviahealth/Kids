import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const prisma = new PrismaClient();

const verifyJwt = () => {
  const jwt = cookies().get("jwt")?.value;

  if (!jwt) {
    throw new Error("Unauthorized");
  }

  const decodedToken = verify(jwt, process.env.JWT_SECRET!) as {
    userId: string;
  };

  return decodedToken.userId;
};

const Layout = async ({ children }: LayoutProps) => {
  const userId = verifyJwt();

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new Error("Unauthorized");
  }

  return <>{children}</>;
};

export default Layout;