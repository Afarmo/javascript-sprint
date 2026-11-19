function initializeContainers() {
  const body = document.body;

  const letterContainer = document.createElement("div");
  letterContainer.classList.add("letter-container");

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  body.append(letterContainer, buttonContainer);

  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  let selectedLetterID = null;
  let selectedID = 0;
  for (let i = 0; i < 26; i++) {
    const letter = document.createElement("div");
    letter.classList.add("letter");
    if (selectedLetterID === null) {
      selectedLetterID = alphabet.toLowerCase().charAt(i);
      selectedID = i;
      letter.classList.add("selected");
      letter.style.fontWeight = "bold";
    }
    letter.id = alphabet.toLowerCase().charAt(i);
    letter.textContent = alphabet.charAt(i);
    letterContainer.append(letter);
  }

  //   ---- Select Letter By Clicking ----
  letterContainer.addEventListener("click", (event) => {
    let previousLetter = document.getElementById(selectedLetterID);
    previousLetter.classList.remove("selected");
    previousLetter.style.fontWeight = "";
    let nextLetter = event.target;
    nextLetter.classList.add("selected");
    nextLetter.style.fontWeight = "bold";

    selectedLetterID = nextLetter.id;
    selectedID = alphabet.indexOf(selectedLetterID.toUpperCase());
  });

  //   ---- Previous Button ----
  const prev = document.createElement("button");
  prev.id = "prev";
  prev.textContent = " < ";
  prev.addEventListener("click", () => {
    // Remove the previously selected letter
    let previousLetter = document.getElementById(selectedLetterID);
    previousLetter.classList.remove("selected");
    previousLetter.style.fontWeight = "";
    // Decrement the selected ID and wrap around if needed
    selectedID--;
    let newID = wrapAround(selectedID);

    let nextLetter = document.getElementById(
      alphabet.toLowerCase().charAt(newID),
    );

    nextLetter.classList.add("selected");
    nextLetter.style.fontWeight = "bold";
    // Update the currently selected letter ID
    selectedLetterID = alphabet.toLowerCase().charAt(newID);
  });

  //   ---- Next Button ----
  const next = document.createElement("button");
  next.id = "next";
  next.textContent = " > ";
  next.addEventListener("click", () => {
    // Remove the previously selected letter
    let previousLetter = document.getElementById(selectedLetterID);
    previousLetter.classList.remove("selected");
    previousLetter.style.fontWeight = "";
    // Increment the selected ID and wrap around if needed
    selectedID++;
    let newID = wrapAround(selectedID);

    let nextLetter = document.getElementById(
      alphabet.toLowerCase().charAt(newID),
    );

    nextLetter.classList.add("selected");
    nextLetter.style.fontWeight = "bold";

    // Update the currently selected letter ID
    selectedLetterID = alphabet.toLowerCase().charAt(newID);
  });

  let fontSize = 0;
  //   ---- Decrease Button ----
  const decrease = document.createElement("button");
  decrease.id = "decrease";
  decrease.textContent = " - ";
  decrease.addEventListener("click", () => {
    let selected = document.getElementById(selectedLetterID);
    fontSize = getComputedStyle(selected)
      .getPropertyValue("font-size")
      .slice(0, -2);
    if (Number(fontSize) - Number(2) >= 10) {
      fontSize = fontSize - 2;
      selected.style.fontSize = `${fontSize}px`;
    }
  });

  //   ---- Increase Button ----
  const increase = document.createElement("button");
  increase.id = "increase";
  increase.textContent = " + ";
  increase.addEventListener("click", () => {
    let selected = document.getElementById(selectedLetterID);
    fontSize = getComputedStyle(selected)
      .getPropertyValue("font-size")
      .slice(0, -2);

    console.log(Number(fontSize) + 2);

    if (Number(fontSize) + Number(2) <= 26) {
      console.log("hello");

      fontSize = Number(fontSize) + Number(2);
      selected.style.fontSize = `${fontSize}px`;
    }
  });

  buttonContainer.append(prev, next, decrease, increase);
}

function wrapAround(num) {
  return ((num % 26) + 26) % 26;
}

initializeContainers();
