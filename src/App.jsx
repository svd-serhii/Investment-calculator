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

	const inputChangeHandler = (input, value) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				[input]: +value, //+ convert data to number!!!!
			};
		});
	};

	// const calculateHandler = (userInput) => {
	// 	setUserInput(userInput);
	// };

	return (
		<div>
			<Header />

			<InputForm userInput={userInput} onChange={inputChangeHandler} />
			<ResultsTable input={userInput} />

			{/* {!userInput && (
				<p style={{ textAlign: "center" }}>No investment calculated yet.</p>
			)}
			{userInput && <ResultsTable input={userInput} />} */}
		</div>
	);
}

export default App;
