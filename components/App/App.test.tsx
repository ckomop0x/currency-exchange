import App from "./App";
import { render, screen } from "@testing-library/react";

describe('App', () => {
  it('Should render the component', () => {
    render(<App />);
    expect(screen.getAllByRole('textbox').length).toBe(2);
  });
});
