import { useState } from "react";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import ResultsTable from "./components/ResultsTable/ResultsTable";

const initialState = {
	initialInvestment: 10000,
	annualInvestment: 1200,
	expectedReturn: 7,
	duration: 10,
};

function App() {
	const [userInput, setUserInput] = useState(initialState);

	const inputIsValid = userInput.duration >= 1;

	const inputChangeHandler = (input, value) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				[input]: +value, //+ convert data to number!!!!
			};
		});
	};

	return (
		<div>
			<Header />

			<InputForm userInput={userInput} onChange={inputChangeHandler} />
			{!inputIsValid && (
				<p style={{ textAlign: "center" }}>
					Please enter a duration greater than zero.{" "}
				</p>
			)}
			{inputIsValid && <ResultsTable input={userInput} />}
		</div>
	);
}

export default App;
