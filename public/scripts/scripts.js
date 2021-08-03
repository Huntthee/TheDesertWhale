// A little bit of increased UX. Pre-populate the form text-field with some default text about the customer's choice, depending on which link they've clicked!
const addValue = choice => {
  const reply = "I would like to get the ";
  const pick = choice;
  document.getElementById("comments").value += `${reply}${pick}`;
};


// Simple logic for a toggle function
const toggleMenu = () => {
  let menu = document.getElementById("main-nav");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
};