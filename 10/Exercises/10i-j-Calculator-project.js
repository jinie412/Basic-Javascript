let calculation = localStorage.getItem("calculation") || "";

function clickedButton(e, type) {
  const buttonName = e.target.innerText;

  if (type === "btn-number") {
    document.querySelector(".input").innerText += buttonName;
  } else if (type === "btn-operator") {
    document.querySelector(".input").innerText += ` ${buttonName} `;
  }
  calculation = document.querySelector(".input").innerText;
  localStorage.setItem("calculation", calculation);
}
