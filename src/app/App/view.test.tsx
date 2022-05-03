import { render, screen } from "@testing-library/react";
import { AppView } from "./view";

jest.mock("../../features/post", () => ({
  PostList: () => <div>postList</div>,
}));

test("renders learn react link", () => {
  render(<AppView />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
