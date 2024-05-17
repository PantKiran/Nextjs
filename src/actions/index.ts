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

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  // check the user input and make sure they are valid
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;
  // create a record in database
  if (!title || !code) return;
  const snippet = await db.snippet.create({
    data: {
      title,
      code,
    },
  });

  // redirect the user back to the root route
  redirect("/");
}
