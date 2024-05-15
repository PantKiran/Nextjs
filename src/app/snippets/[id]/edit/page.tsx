import SnippetEditForm from "@/components/snippet-edit-form";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}
const SnippetEditPage = async (props: SnippetEditPageProps) => {
  const id = parseInt(props.params.id);
  const Snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });
  if (!Snippet) {
    return notFound();
  }
  return (
    <div>
      <SnippetEditForm snippet={Snippet} />
    </div>
  );
};

export default SnippetEditPage;
