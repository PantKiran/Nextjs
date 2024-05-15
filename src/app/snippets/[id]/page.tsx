import { db } from "@/db";
import { notFound } from "next/navigation";
interface SnippetShowPagePropps {
  params: {
    id: string;
  };
}
const SnippetShowPage = async (props: SnippetShowPagePropps) => {
  console.log(props);
  const Snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });
  console.log(Snippet);
  if (!Snippet) {
    return notFound();
  }
  return (
    <div>
      <div className="flex m-4 justify-between items-center ">
        <h1 className="text-xl font-bold">{Snippet.title}</h1>
        <div className="flex gap-4">
          <button className="p-2 border rounded">Edit</button>
          <button className="p-2 border rounded">Delete</button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{Snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetShowPage;
