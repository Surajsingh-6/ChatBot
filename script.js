function handleClick() {
  let bars = document.getElementById("three-bars");
  let nav = document.getElementById("nav");
  nav.classList.toggle("change");
  let main = document.getElementById("main");
  if (nav.classList.contains("change")) {
    main.style.display = "block";
  } else {
    main.style.display = "none";
  }
}

// hello
