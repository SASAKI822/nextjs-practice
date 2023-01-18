import { async } from "@firebase/util";

export default function post({ post }: { post: any }) {
  return (
    <>
      <h1>POST{post.id}</h1>
    </>
  );
}

export async function getServerSideProps({ params }: { params: any }) {
  const id = params.post;
  return <h1>df</h1>;
  console.log(params);
}
