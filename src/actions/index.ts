"use server";

import { redirect } from "next/navigation";
import { db } from "@/db";
import { message } from "antd";

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
  const title = formData.get("title");
  const code = formData.get("code");
  if (typeof title !== "string" || title.length < 3) {
    return {
      message: "Title must be longer",
    };
  }
  if (typeof code !== "string" || code.length < 10) {
    return {
      message: "code must be longer",
    };
  }
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
