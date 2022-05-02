import { postPresenter } from "./presenter";

const testFetchedPosts = {
  fetchedPosts: [
    {
      userId: 11,
      id: 10,
      title: "testA",
      body: "testB",
    },
    {
      userId: 11,
      id: 12,
      title: "testC",
      body: "testD",
    },
  ],
};

describe("test tutorial", () => {
  test("extract id and title", () => {
    const result = postPresenter(testFetchedPosts);
    const { posts } = result;
    expect(posts[1].id).toBe(testFetchedPosts.fetchedPosts[1].id);
    expect(posts[1].title).toBe(testFetchedPosts.fetchedPosts[1].title);
  });
});
