interface SnippetEditPageProps {
  params: {
    id: string;
  };
}
const SnippetEditPage = (props: SnippetEditPageProps) => {
  const id = parseInt(props.params.id);
  return <div>Snippet Edit Page with id {id}</div>;
};

export default SnippetEditPage;
