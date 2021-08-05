import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from ".";

describe("<TextInput />", () => {
  it("should have a value of searchValue", () => {
    const fn = jest.fn();

    // const { debug } = render(
    //   <TextInput handleChange={fn} searchValue={"testando"} />
    // );
    // debug();

    render(<TextInput handleChange={fn} searchValue={"testando"} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    // expect(input).toBeInTheDocument();

    expect(input.value).toBe("testando");
  });

  it("should call handleChange function on each key pressed", () => {
    const fn = jest.fn();

    render(<TextInput handleChange={fn} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const valueDigit = "o valor";

    userEvent.type(input, valueDigit);
    screen.debug();

    expect(input.value).toBe(valueDigit);
    expect(fn).toHaveBeenCalledTimes(valueDigit.length);
  });

  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} />);
    expect(container).toMatchSnapshot();
  });
});
