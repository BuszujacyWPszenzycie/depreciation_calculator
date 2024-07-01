const allNavItems = document.querySelectorAll('.nav__input')
const resultRow = document.querySelector('.result__row')
const navButton = document.querySelector('.nav__button')

let numberOfTableElements = 4

const createTableElementFunction = () => {
	for (let i = 1; i < numberOfTableElements; i++) {
		const resultItem = document.createElement('td')
		resultItem.classList.add()
		resultRow.appendChild(resultItem)
	}
}

navButton.addEventListener('click', createTableElementFunction)
