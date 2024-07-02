const allNavItems = document.querySelectorAll('.nav__input')
const resultRow = document.querySelector('.result__row')
const navButton = document.querySelector('.nav__button')
const table = document.querySelector('.result__table')
const allInputs = document.querySelectorAll('.nav__input')

// let numberOfMonths = 4
let numberOfTableElements = 4

const getMonthlyRateValueFunction = () => {
	const initialValue = allInputs[0].value
	const depreciationRate = allInputs[2].value / 100
	const depreciationAmount = ((initialValue * depreciationRate) / 12).toFixed(2)
	return depreciationAmount
}
const getNumberOfPeriodsFunction = () => {
	const initialValue = allInputs[0].value
	const depreciationRate = allInputs[2].value / 100
	const depreciationAmount = ((initialValue * depreciationRate) / 12).toFixed(2)
	const numberOfMonths = (initialValue / depreciationAmount).toFixed(2)
	return numberOfMonths
}

const createTableElementFunction = () => {
	let lp = 1
	let initialDate = new Date(allInputs[1].value)
	let month = parseInt(initialDate.getMonth())
	let year = initialDate.getFullYear()
	for (let i = 0; i < getNumberOfPeriodsFunction(); i++) {
		const lastRow = document.createElement('tr')
		lastRow.classList.add('result__row')
		table.appendChild(lastRow)
		for (let j = 0; j < numberOfTableElements; j++) {
			const tableItem = document.createElement('td')
			tableItem.classList.add('result__item')
			lastRow.appendChild(tableItem)
		}

		let tableItemsInLastRow = lastRow.children
		tableItemsInLastRow[0].textContent = lp
		tableItemsInLastRow[1].textContent = month
		tableItemsInLastRow[2].textContent = year
		tableItemsInLastRow[3].textContent = getMonthlyRateValueFunction()
		lp = lp + 1
		if (month === 12) {
			month = 1
			year = year + 1
		} else {
			month = month + 1
		}
	}
}

navButton.addEventListener('click', createTableElementFunction)
navButton.addEventListener('click', getMonthlyRateValueFunction)
navButton.addEventListener('click', getNumberOfPeriodsFunction)
