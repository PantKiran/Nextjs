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
  return <div>{Snippet.title}</div>;
};

export default SnippetShowPage;
