import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./CurrencyDropDown.css";

export default function CurrencyDropDown(props) {
  return (
    <div>
      <Select
        className="select"
        value={props.currency}
        onChange={(e) => props.setCurrency(e.target.value)}
      >
        {props.currencies.map((currency, ind) => (
          <MenuItem value={currency} key={ind}>
            {currency}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
