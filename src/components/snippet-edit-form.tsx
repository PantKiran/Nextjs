"use client";
import type { Snippet } from "@prisma/client";
interface SnippetEditFormProps {
  snippet: Snippet;
}
const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  return <div>Client component has Snippet with title {snippet.title}</div>;
};

export default SnippetEditForm;
