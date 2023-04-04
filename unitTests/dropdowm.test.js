import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CurrencyDropDown from "../src/components/CurrencyDropDown/CurrencyDropDown";

it("check if drop down exists and have usd option", () => {
  render(
    <CurrencyDropDown currencies={["USD", "EUR", "ILS"]} currency="USD" />
  );
  const dropDownIcon = screen.getByTestId("ArrowDropDownIcon");
  expect(dropDownIcon).toBeInTheDocument();
  fireEvent.click(dropDownIcon);
  screen.getByDisplayValue("USD");
});
