import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    // const debug = render(<PostCard {...postCardPropsMock} />);
    // debug();

    render(<PostCard {...postCardPropsMock} />);

    expect(screen.getByAltText(/title 1/i)).toHaveAttribute(
      "src",
      "img/img.png"
    );
    // expect(screen.getByRole("img", { name: /title 1/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /title 1/i })).toHaveAttribute(
      "src",
      "img/img.png"
    );
    expect(
      screen.getByRole("heading", { name: /title 1 1/i })
    ).toBeInTheDocument();
    expect(screen.getByText("body 1")).toBeInTheDocument();
  });

  it("should macth snapshot", () => {
    const { container } = render(<PostCard {...postCardPropsMock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
