import { render, screen } from "@testing-library/react";
import { PostView } from "./view";

const testProps = [
  { title: "TitleA", id: 1 },
  { title: "TitleB", id: 2 },
];

describe("assert view", () => {
  test("title appears", () => {
    render(<PostView posts={testProps} />);
    expect(screen.getByText("TitleB")).toBeInTheDocument();
  });
});
