import Link from "next/link";
import { getPosts } from "../../lib/posts";

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
    revalidate: 60,
  };
}

function PostList({ posts }) {
  return (
    <div className="container mx-auto my-8">
      <h1>文章列表</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link className="py-2" href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
