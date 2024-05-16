"use server";

import { redirect } from "next/navigation"; 
import { db } from "@/db";

const editSnippet = async (id: number, code: string) => {
  console.log(id, code);
  await db.snippet.update({
    where: {
      id,
    },
    data: { code },
  });
  redirect(`/snippets/${id}`);
};

export default editSnippet;
