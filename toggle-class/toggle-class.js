function initialiazeToggleClass() {
  const body = document.body;

  const content = document.createElement("div");
  content.id = "content";

  const paragraph = document.createElement("p");
  paragraph.textContent = "code";
  content.append(paragraph);

  //   --- Buttons ---
  const controls = document.createElement("div");
  controls.classList.add("controls");
  const bold = document.createElement("button");
  bold.id = "bold";
  bold.textContent = "B";
  bold.addEventListener("click", () => {
    paragraph.classList.toggle("bold");
  });

  const italic = document.createElement("button");
  italic.id = "italic";
  italic.textContent = "I";

  italic.addEventListener("click", () => {
    paragraph.classList.toggle("italic");
  });

  const underline = document.createElement("button");
  underline.id = "underline";
  underline.textContent = "U";

  underline.addEventListener("click", () => {
    paragraph.classList.toggle("underline");
  });

  const highlight = document.createElement("button");
  highlight.id = "highlight";
  highlight.textContent = "Highlight";

  highlight.addEventListener("click", () => {
    content.classList.toggle("highlight");
  });

  controls.append(bold, italic, underline, highlight);
  body.append(content, controls);
}

initialiazeToggleClass();
