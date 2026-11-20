function createLinks(JSONarray) {
  const body = document.body;
  const unorderedList = document.createElement("ul");

  unorderedList.classList.add("team-links");
  const exists = document.getElementById("team-list-nav");
  if (exists) {
    exists.remove();
  }
  unorderedList.id = "team-list-nav";
  //   --- Initialize HTML structure ---
  for (let obj of JSONarray) {
    const list = document.createElement("li");
    list.style.backgroundColor = obj.primary;

    const anchor = document.createElement("a");
    anchor.href = obj.url;
    anchor.style.color = obj.secondary;
    anchor.textContent = obj.name;

    const span = document.createElement("span");
    span.textContent = "[copy]";
    span.addEventListener("click", () => {
      const url = obj.url;
      navigator.clipboard.writeText(url);
    });

    list.append(anchor, span);
    unorderedList.append(list);
  }

  body.append(unorderedList);

  //   --- Copy link to clipboard ---

  //   --- Bolden when hovering over the links ---
  //   document.addEventListener("mouseover", (event) => {
  //     if (event.target.tagName === "LI") {
  //       event.target.childNodes[0].style.fontWeight = "bold";
  //     }
  //   });

  //   document.addEventListener("mouseout", (event) => {
  //     if (event.target.tagName === "LI") {
  //       event.target.childNodes[0].style.fontWeight = "";
  //     }
  //   });
}

const JSONarray = [
  {
    name: "Brazil",
    url: "https://en.wikipedia.org/wiki/Brazil_national_football_team",
    primary: "#ffdf00",
    secondary: "#009c3b",
  },
  {
    name: "Netherlands",
    url: "https://en.wikipedia.org/wiki/Netherlands_national_football_team",
    primary: "#f36c21",
    secondary: "#ffffff",
  },
];

createLinks(JSONarray);
