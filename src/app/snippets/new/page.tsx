"use client";
import { createSnippet } from "@/actions";
import { db } from "@/db";
import { message } from "antd";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useFormState } from "react-dom";
const SnippetCreatePage = () => {
  const [formState, action] = useFormState(createSnippet, { message: "" });
  return (
    <form action={action}>
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
        <div>{formState?.message}</div>
        <button type="submit" className="border rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
