import App from "@/components/App/App";
import { render, screen } from "@testing-library/react";

describe('App', () => {
  it('Should render the component', () => {
    render(<App />);
    expect(screen.getAllByRole('textbox').length).toBe(2);
    expect(screen.getAllByRole('combobox').length).toBe(2);
  });
});
