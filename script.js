const inputHeight = document.getElementById("height");
const inputWeight = document.getElementById("weight");
const calculateBtn = document.getElementById("calculate");
const bmiScore = document.querySelector(".bmi-score");
const items = document.querySelectorAll(".item");

let heightValue = "";
let weightValue = "";

const form = document.getElementById("bmiform");

const styles = [
  { backgroundColor: "#ff0b0b", color: "white" },
  { backgroundColor: "#de6903", color: "white" },
  { backgroundColor: "#f2f700", color: "black" },
  { backgroundColor: "#41de03", color: "white" },
  { backgroundColor: "#f2f700", color: "black" },
  { backgroundColor: "#de6903", color: "white" },
  { backgroundColor: "#ff0b0b", color: "white" },
  { backgroundColor: "#970000", color: "white" },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const heightValue = parseFloat(document.getElementById("height").value);
  const weightValue = parseFloat(document.getElementById("weight").value);

  const heightValueM = heightValue / 100;
  const bmiValue = weightValue / (heightValueM * heightValueM);
  const roundedBmiValue = bmiValue.toFixed(1);

  bmiScore.textContent = roundedBmiValue;
  bmiScore.style.color = "black";

  items.forEach((item) => {
    item.style.backgroundColor = "";
    item.style.color = "";
    item.style.padding = "";
  });

  let index = 3;
  if (roundedBmiValue < 16) {
    index = 0;
  } else if (roundedBmiValue >= 16 && roundedBmiValue < 17) {
    index = 1;
  } else if (roundedBmiValue >= 17 && roundedBmiValue < 18.5) {
    index = 2;
  } else if (roundedBmiValue >= 18.5 && roundedBmiValue < 25) {
    index = 3;
  } else if (roundedBmiValue >= 25 && roundedBmiValue < 30) {
    index = 4;
  } else if (roundedBmiValue >= 30 && roundedBmiValue < 35) {
    index = 5;
  } else if (roundedBmiValue >= 35 && roundedBmiValue < 40) {
    index = 6;
  } else if (roundedBmiValue >= 40) {
    index = 7;
  }

  items[index].style.padding = "5px";
  items[index].style.borderRadius = "5px";
  Object.assign(items[index].style, styles[index]);


  //   console.log(index);

  //   switch (index) {
  //     case 0:
  //       console.log(items[index]);
  //       items[index].style.padding = "5px";
  //       items[index].style.color = "white";
  //       items[index].style.borderRadius = "5px";
  //       items[index].style.backgroundColor = "#ff0b0b";
  //       break;
  //     case 1:
  //       console.log(items[index]);
  //       items[index].style.padding = "5px";
  //       items[index].style.borderRadius = "5px";
  //       items[index].style.color = "white";
  //       items[index].style.backgroundColor = "#de6903";
  //       break;
  //     case 2:
  //       console.log(items[index]);
  //       items[index].style.padding = "5px";
  //       items[index].style.borderRadius = "5px";
  //       items[index].style.color = "black";
  //       items[index].style.backgroundColor = "#f2f700";
  //       break;
  //     case 3:
  //       console.log(items[index]);
  //       items[index].style.padding = "5px";
  //       items[index].style.borderRadius = "5px";
  //       items[index].style.color = "white";
  //       items[index].style.backgroundColor = "#41de03";
  //       break;
  //     case 4:
  //       console.log(items[index]);
  //       items[index].style.padding = "5px";
  //       items[index].style.borderRadius = "5px";
  //       items[index].style.color = "black";
  //       items[index].style.backgroundColor = "#f2f700";
  //       break;
  //     case 5:
  //       console.log(items[index]);
  //       items[index].style.padding = "5px";
  //       items[index].style.borderRadius = "5px";
  //       items[index].style.color = "white";
  //       items[index].style.backgroundColor = "#de6903";
  //       break;
  //     case 6:
  //       console.log(items[index]);
  //       items[index].style.padding = "5px";
  //       items[index].style.borderRadius = "5px";
  //       items[index].style.color = "white";
  //       items[index].style.backgroundColor = "#ff0b0b";
  //       break;
  //     case 7:
  //       console.log(items[index]);
  //       items[index].style.padding = "5px";
  //       items[index].style.borderRadius = "5px";
  //       items[index].style.color = "white";
  //       items[index].style.backgroundColor = "#970000";
  //       break;
  //   }
});
