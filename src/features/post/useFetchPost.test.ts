import { renderHook } from "@testing-library/react";
import { useFetchPost } from "./useFetchPost";
import { server, getPostUrl } from '../../mocks';

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => () => mockDispatch(),
  useSelector: () => [],
}));

describe("useFetchPost", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should be empty array", () => {
    const { result } = renderHook(() => useFetchPost({url: getPostUrl}));
    const { current } = result;
    expect(current.fetchedPosts.length).toBe(0);
  });
});
