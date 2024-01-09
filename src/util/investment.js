export function calculateInvestmentResults({
	initialInvestment,
	annualInvestment,
	expectedReturn,
	duration,
}) {
	const annualData = [];
	let investmentValue = initialInvestment;

	for (let i = 0; i < duration; i++) {
		const interestEarnedInYear = investmentValue * expectedReturn;
		investmentValue += interestEarnedInYear + annualInvestment;
		annualData.push({
			year: i + 1,
			interest: interestEarnedInYear,
			valueEndOfYear: investmentValue,
			annualInvestment: annualInvestment,
		});
	}
}

export const formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	minimumFractionDigits: 0,
	maximumFractionDigits: 0,
});
