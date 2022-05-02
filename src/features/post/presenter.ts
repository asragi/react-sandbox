import { FetchedPost } from "./types";

export interface PresenterProps {
  fetchedPosts: FetchedPost[];
}

export interface ViewProps {
  posts: {
    id: number;
    title: string;
  }[];
}

export const postPresenter = ({ fetchedPosts }: PresenterProps): ViewProps => {
  const posts = fetchedPosts.map((p) => ({
    title: p.title,
    id: p.id,
  }));

  return {
    posts,
  };
};
