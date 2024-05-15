import { db } from "@/db";
import { redirect } from "next/navigation";
import { useState } from "react";


const SnippetCreatePage = () => {
  async function createSnippet(formData: FormData) {
    // this needs to be a server action!
    "use server";
    // check the user input and make sure they are valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    // create a record in database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);
    // redirect the user back to the root route
    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-8">
          <label className="w-4" htmlFor="title">
            Title
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div className="flex gap-8">
          <label className="w-4" htmlFor="code">
            Code
          </label>
          <textarea
            className="border rounded p-2 w-full"
            name="code"
            id="code"
          />
        </div>
        <button type="submit" className="border rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
