import { ViewProps } from "./presenter";

export const PostView = ({ posts }: ViewProps) => {
  return (
    <div>
      {
        posts.map(post => <h2 key={post.id}>{post.title}</h2>)
      }
    </div>
  );
}