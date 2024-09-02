
const calorieCounter = document.getElementById('calorieCounter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
let output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
    const regex = /[+-\s]/g;
    // const regex = /[^0-9]/g;
    return str.replace(regex, '');
 }

 function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
 }

 function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    // let entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]');
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name">;
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories"> 
    `;
    targetInputContainer.innerHTML += HTMLString;
 }