import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import "./CurrencyDropDown.css";

export default function CurrencyDropDown(props) {
  return (
    <div>
      <InputLabel id="currency-select-label">{props.labelName}</InputLabel>
      <Select
        className="select"
        value={props.currency}
        labelId="currency-select-label"
        onChange={(e) => props.setCurrency(e.target.value)}
        required
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
