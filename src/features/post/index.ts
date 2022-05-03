import { config } from "../../config";
import { useFetchPost } from "../hooks/useFetchPost";
import { postPresenter } from "./presenter";
import { PostView } from "./view";

export const PostList = () => {
  const url = new URL(config.fetchPostUrl);
  return PostView(postPresenter(useFetchPost({ url })));
};
