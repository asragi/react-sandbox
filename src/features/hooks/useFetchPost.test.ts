import { renderHook } from "@testing-library/react";
import { useFetchPost } from "./useFetchPost";
import { server } from '../../mocks';

describe("useFetchPost", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should be empty array", () => {
    const { result } = renderHook(() => useFetchPost({}));
    const { current } = result;
    expect(current.fetchedPosts.length).toBe(0);
  });
});
