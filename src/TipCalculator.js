import React from "react";
import "./App.scss";

import logo from "./assets/logo.svg";
import iconDollar from "./assets/icon-dollar.svg";
import iconPerson from "./assets/icon-person.svg";
import NumberInput from "./components/NumberInput";
import ResultDisplay from "./components/ResultDisplay";
import SelectTipInput from "./components/SelectTipInput";

class TipCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetBill = this.handleSetBill.bind(this);
    this.handleSetNumberOfPeople = this.handleSetNumberOfPeople.bind(this);
    this.onChangeTip = this.onChangeTip.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      bill: 0,
      numberOfPeople: 0,
      tip: "",
      tipAmount: 0,
      total: 0,
      error: "",
    };
  }

  handleSetBill(e) {
    this.setState({ bill: e.target.value });
  }

  handleSetNumberOfPeople(e) {
    this.setState({ numberOfPeople: e.target.value });
  }

  onChangeTip(e) {
    this.setState({ tip: e.target.value });
  }

  handleSubmit(e) {
    if (Number(this.state.numberOfPeople) === 0) {
      this.setState({ error: "Can't be zero" });

      e.preventDefault();
    } else {
      this.setState({ error: "" });

      const calcTip = (Number(this.state.bill) * Number(this.state.tip)) / 100;
      let calcTipAmount = calcTip / Number(this.state.numberOfPeople);
      calcTipAmount = calcTipAmount.toFixed(2);
      this.setState({ tipAmount: calcTipAmount });

      let calcTotal =
        (Number(this.state.bill) + calcTip) / Number(this.state.numberOfPeople);
      calcTotal = calcTotal.toFixed(2);
      this.setState({ total: calcTotal });

      e.preventDefault();
    }
  }

  render() {
    const { bill, error, numberOfPeople, tip, tipAmount, total } = this.state;

    return (
      <main className="container">
        <img src={logo} alt="spliter" className="logo" />
        <section className="card-container">
          <form className="form-container" onSubmit={this.handleSubmit}>
            <div className="inputsContainer">
              <NumberInput
                id="bill"
                iconSrc={iconDollar}
                label="Bill"
                value={bill}
                onChange={this.handleSetBill}
              />
              <div className="selectField">
                <p className="label">Select Tip %</p>
                <div className="selectsContainer">
                  <SelectTipInput
                    value="5"
                    onChangeSelect={this.onChangeTip}
                    isChecked={tip === "5"}
                  />

                  <SelectTipInput
                    value="10"
                    onChangeSelect={this.onChangeTip}
                    isChecked={tip === "10"}
                  />

                  <SelectTipInput
                    value="15"
                    onChangeSelect={this.onChangeTip}
                    isChecked={tip === "15"}
                  />

                  <SelectTipInput
                    value="25"
                    onChangeSelect={this.onChangeTip}
                    isChecked={tip === "25"}
                  />

                  <SelectTipInput
                    value="50"
                    onChangeSelect={this.onChangeTip}
                    isChecked={tip === "50"}
                  />

                  <input
                    className="tipInput"
                    type="number"
                    placeholder="Custom"
                    onChange={this.onChangeTip}
                    value={tip}
                  />
                </div>
              </div>

              <NumberInput
                id="numberOfPeople"
                error={error}
                iconSrc={iconPerson}
                label="Number of People"
                value={numberOfPeople}
                onChange={this.handleSetNumberOfPeople}
                className={error ? "activeError" : ""}
              />
            </div>
            <section className="result-container">
              <div>
                <ResultDisplay title="Tip Amount" value={tipAmount} />
                <ResultDisplay title="Total" value={total} />
              </div>
              <input type="submit" value="RESET" />
            </section>
          </form>
        </section>
      </main>
    );
  }
}

export default TipCalculator;
