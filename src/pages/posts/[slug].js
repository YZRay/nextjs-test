import { getPostById, getPosts } from "../../lib/posts";

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.id.toString() },
  }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const post = await getPostById(params.slug);

  return {
    props: { post },
    revalidate: 60,
  };
}

function PostPage({ post }) {
  if (!post) return <div>文章不存在</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default PostPage;
