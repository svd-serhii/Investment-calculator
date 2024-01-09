import React from "react";
// import Button from "../UI/Button/Button";

import styles from "./InputForm.module.css";

const InputForm = ({ onChange, userInput }) => {
	// const submitHandler = (event) => {
	// 	event.preventDefault();

	// 	props.onCalculate(userInput);
	// };

	// const resetHandler = () => {
	// 	setUserInput(initialState);
	// };

	return (
		<form className={styles.form}>
			<div className={styles["input-group"]}>
				<p>
					<label htmlFor="initialInvestment">Initial Investment($)</label>
					<input
						onChange={(e) => onChange("initialInvestment", e.target.value)}
						value={userInput.initialInvestment}
						type="number"
						id="initialInvestment"
						required
					/>
				</p>
				<p>
					<label htmlFor="yearly-contribution">Annual Investment ($)</label>
					<input
						onChange={(e) => onChange("annualInvestment", e.target.value)}
						value={userInput.annualInvestment}
						type="number"
						id="yearly-contribution"
						required
					/>
				</p>
			</div>
			<div className={styles["input-group"]}>
				<p>
					<label htmlFor="expected-return">Expected Return (%, per year)</label>
					<input
						onChange={(e) => onChange("expectedReturn", e.target.value)}
						value={userInput.expectedReturn}
						type="number"
						id="expected-return"
						required
					/>
				</p>
				<p>
					<label htmlFor={styles["duration"]}> Duration (years)</label>
					<input
						onChange={(e) => onChange("duration", e.target.value)}
						value={userInput.duration}
						type="number"
						id="duration"
						required
					/>
				</p>
			</div>
			{/* <p className={styles.actions}>
				<Button
					onClick={resetHandler}
					type={"reset"}
					className={styles["buttonAlt"]}
					text={"Reset"}
				></Button>
				<Button
					type={"submit"}
					className={styles["button"]}
					text={"Calculate"}
				></Button>
			</p> */}
		</form>
	);
};

export default InputForm;
