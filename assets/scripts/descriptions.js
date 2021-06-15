// A little bit of increased UX. Pre-populate the form text-field with some default text about the customer's choice, depending on which link they've clicked!
function addValue(choice) {
  const reply = "I would like to get the ";
  const pick = choice;
  document.getElementById("comments").value += `${reply}${pick}`;
}