"use server";

import { redirect } from "next/navigation";
import { db } from "@/db";

const editSnippet = async (id: number, code: string) => {
  await db.snippet.update({
    where: {
      id,
    },
    data: { code },
  });
  redirect(`/snippets/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await db.snippet.delete({
    where: {
      id,
    },
  });
  redirect(`/`);
};
export default editSnippet;
