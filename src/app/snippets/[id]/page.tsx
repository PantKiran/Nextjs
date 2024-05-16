import { deleteSnippet } from "@/actions";
import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "path";
interface SnippetShowPagePropps {
  params: {
    id: string;
  };
}
const SnippetShowPage = async (props: SnippetShowPagePropps) => {
  const Snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!Snippet) {
    return notFound();
  }
  const SnippetDeleteAction = deleteSnippet.bind(null, Snippet.id);
  return (
    <div>
      <div className="flex m-4 justify-between items-center ">
        <h1 className="text-xl font-bold">{Snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${Snippet.id}/edit`}
            className="p-2 border rounded"
          >
            Edit
          </Link>

          <form action={SnippetDeleteAction}>
            <button type="submit" className="p-2 border rounded">
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{Snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetShowPage;
