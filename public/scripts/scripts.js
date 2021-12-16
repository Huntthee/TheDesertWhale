// Pre-populate the form text-field with some default text about the customer's choice, depending on which link they've clicked!
const addValue = choice => {
  const pick = choice;
  document.getElementById("comments").value += `I would like to get the ${pick} please!`;
};


// Hamburger menu toggle function
const toggleMenu = () => {
  let menu = document.getElementById("main-nav");

  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
};

// Change the status with greater ease in future.
const commissionStatus = document.getElementById('comm-status');
commissionStatus.innerHTML += '<span id="status"> Open</span>';