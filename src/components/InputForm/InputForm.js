import React from "react";
import Button from "../UI/Button/Button";

const InputForm = () => {
  return (
    <form className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Interest (%, per year)</label>
          <input type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" />
        </p>
      </div>
      <p className="actions">
        {/* <button type="reset" className="buttonAlt">
          Reset
        </button> */}
        <Button type={"reset"} className={"buttonAlt"} text={"Reset"}></Button>
        <Button type={"submit"} className={"button"} text={"Calculate"}></Button>
        {/* <button type="submit" className="button">
          Calculate
        </button> */}
      </p>
    </form>
  );
};

export default InputForm;
