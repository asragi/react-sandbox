import { fetchPosts, postReducer } from "./slice";

test("fetch posts", () => {
  const fetchedPosts = [
    {
      id: 0,
      userId: 10,
      title: "test title",
      body: "test text",
    },
  ];
  expect(postReducer(undefined, fetchPosts(fetchedPosts))).toEqual({
    posts: fetchedPosts,
  });
});
