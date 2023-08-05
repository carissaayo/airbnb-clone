import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import prisma from "@/app/libs/prismadb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      console.log("no session");

      return null;
    }
    console.log(session);

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
    };
  } catch (error: any) {
    console.log(error);

    return null;
  }
}
