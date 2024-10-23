import { paragraphText, worldText } from "./module";
import "./style.css";

{
  const textEnterByUser = document.getElementById("userText");
  const validationBtn = document.getElementById("validationBtn");

  const textProposed = document.querySelector(".textSave");
  const score = document.querySelector(".score");

  const radioBtn = document.querySelectorAll("#world");

  console.log(textEnterByUser, validationBtn, textProposed, score, radioBtn);
}

console.log(worldText, paragraphText);

const handdleSubmit = (e) => {
  e.preventDefault();
  console.log("test");
};

{
  validationBtn.addEventListener("click", handdleSubmit);
}
