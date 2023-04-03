import React, { useState } from "react";
import CurrencyDropDown from "../CurrencyDropDown/CurrencyDropDown";
import {
  currencies,
  appHeader,
  fromLabel,
  toLabel,
  ConvertButtonText,
  replaceSidesIcon,
} from "../../utils/constants";
import Button from "@mui/material/Button";
import Convert from "../../api/Convert";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./converter.css";

export default function Converter() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("ILS");
  const [convertResult, setConvertResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState(0);

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
          <h1>{appHeader}</h1>
          <form onSubmit={handleConvert}>
            <span className="data-container">
              <div className="row1">
                <label>{fromLabel}</label>
                <div>
                  <CurrencyDropDown
                    className="items"
                    currencies={currencies}
                    currency={fromCurrency}
                    setCurrency={setFromCurrency}
                  />
                </div>
                <div className="convert-input">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="0"
                    className="items"
                    required
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
              <div className="row2">
                <label>{toLabel}</label>
                <CurrencyDropDown
                  currencies={currencies}
                  currency={toCurrency}
                  setCurrency={setToCurrency}
                />
                <div className="items">{convertResult}</div>
              </div>
            </span>
            <div className="convert-submit">
              <div className="loader">
                {isLoading && <CircularProgress className="loader" />}
              </div>
              <Button variant="contained" type="submit">
                {ConvertButtonText}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
