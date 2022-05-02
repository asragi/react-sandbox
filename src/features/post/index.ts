import { useFetchPost, Props } from "../hooks/useFetchPost";
import { postPresenter } from "./presenter";
import { PostView } from "./view";

export const PostList = (props: Props) => 
  PostView(postPresenter(useFetchPost(props)));
