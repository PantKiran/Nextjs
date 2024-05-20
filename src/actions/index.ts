"use server";

import { redirect } from "next/navigation";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

const editSnippet = async (id: number, code: string) => {
  await db.snippet.update({
    where: {
      id,
    },
    data: { code },
  });
  revalidatePath(`/snippets/${id}`)
  redirect(`/snippets/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await db.snippet.delete({
    where: {
      id,
    },
  });
  revalidatePath('/')
  redirect(`/`);
};
export default editSnippet;

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  try {
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
    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    } else {
      return "Something went wrong...";
    }
  }
  revalidatePath('/')
  // redirect the user back to the root route
  redirect("/");
}
