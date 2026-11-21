function alphaJail() {
  const body = document.body;

  const freeWorld = document.createElement("div");
  freeWorld.classList.add("outside", "zone");

  const jail = document.createElement("div");
  jail.classList.add("inside", "zone");

  body.append(freeWorld, jail);

  let spawnedLetter = null;
  let x = 0;
  let y = 0;

  let mouseFollower = (e) => {
    x = e.clientX;
    y = e.clientY;
    const jailDimension = jail.getBoundingClientRect().left;
    if (!spawnedLetter || !spawnedLetter.classList.contains("follow")) {
      return;
    }
    const divDimensions = spawnedLetter.getBoundingClientRect();
    spawnedLetter.style.top = y - divDimensions.height / 2 + "px";
    spawnedLetter.style.left = x - divDimensions.width / 2 + "px";
    if (x > jailDimension) {
      spawnedLetter.classList.add("trapped");
      spawnedLetter.style.backgroundColor = "var(--orange)";
    }

    if (spawnedLetter.classList.contains("trapped") && x < jailDimension) {
      spawnedLetter.classList.remove("follow");
      spawnedLetter.style.top = y - divDimensions.height / 2 + "px";
      spawnedLetter.style.left = jailDimension + "px";
      spawnedLetter = null;
      return;
    }
  };

  document.addEventListener("mousemove", mouseFollower);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.querySelectorAll(".character").forEach((char) => char.remove());
      spawnedLetter = null;
      return;
    }

    if (spawnedLetter) {
      spawnedLetter.classList.remove("follow");
    }

    if (!/^[a-z]$/.test(event.key)) return;

    spawnedLetter = document.createElement("div");
    spawnedLetter.classList.add("character");
    spawnedLetter.classList.add("follow");
    spawnedLetter.textContent = event.key;
    spawnedLetter.style.top = y + "px";
    spawnedLetter.style.left = x + "px";
    body.append(spawnedLetter);
    mouseFollower({ clientX: x, clientY: y });
  });
}

alphaJail();
