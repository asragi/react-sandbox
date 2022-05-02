import { ContainerComponent, Props } from "./container";
import { postPresenter } from "./presenter";
import { PostView } from "./view";

export const PostList = (props: Props) =>
  PostView(postPresenter(ContainerComponent(props)));
