import { renderHook } from "@testing-library/react";
import { useFetchPost } from "./useFetchPost";

describe("useFetchPost", () => {
  it("should be empty array", () => {
    const { result } = renderHook(() => useFetchPost({}));
    const { current } = result;
    expect(current.fetchedPosts.length).toBe(0);
  });
});
