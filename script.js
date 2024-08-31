
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
    const targetId = "#" + entryDropdown.value;
    /*
    targetId + ' .input-container': This part combines the targetId
    (the ID of the parent element) with the .input-container class name.
    The space between them is crucial because it indicates that we want
    to find an element with the class .input-container that is a direct 
    child of the element with the ID targetId.
    */
    const targetInputContainer = document.querySelector(`${targetId} .input-container`);
 }