import React, { useState } from "react";
import CurrencyDropDown from "../CurrencyDropDown/CurrencyDropDown";
import {
  currencies,
  appHeader,
  fromLabel,
  toLabel,
  convertButtonText,
  replaceSidesIcon,
  inputLabelText,
} from "../../utils/constants";
import Button from "@mui/material/Button";
import Convert from "../../api/Convert";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import "./Converter.css";

export default function Converter() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("ILS");
  const [convertResult, setConvertResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");

  const handleConvert = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const convertResult = await Convert(fromCurrency, toCurrency, amount);
    setConvertResult(convertResult);
    setIsLoading(false);
  };

  const handleReplaceCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="main-container">
      <Card>
        <CardContent>
          <h1 className="header">{appHeader}</h1>
          <form onSubmit={handleConvert}>
            <span className="data-container">
              <div>
                <div>
                  <CurrencyDropDown
                    currencies={currencies}
                    currency={fromCurrency}
                    setCurrency={setFromCurrency}
                    labelName={fromLabel}
                  />
                </div>
                <div className="convert-input">
                  <TextField
                    id="currency-input"
                    InputProps={{ inputProps: { min: "0" } }}
                    className="input-field"
                    required
                    type="number"
                    value={amount}
                    label={inputLabelText}
                    onChange={(e) => setAmount(e.target.value)}
                    variant="standard"
                  />
                </div>
              </div>
              <img
                src={replaceSidesIcon}
                className="change-sides-img"
                height="35px"
                width="35px"
                onClick={handleReplaceCurrencies}
              />
              <div>
                <CurrencyDropDown
                  currencies={currencies}
                  currency={toCurrency}
                  setCurrency={setToCurrency}
                  labelName={toLabel}
                />
                <div className="convert-result">{convertResult}</div>
              </div>
            </span>
            <div className="convert-submit">
              <div className="loader">
                {isLoading && <CircularProgress className="loader" />}
              </div>
              <Button variant="contained" type="submit">
                {convertButtonText}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
