const inputHeight = document.getElementById("height");
const inputWeight = document.getElementById("weight");
const heightError = document.getElementById("heightError");
const weightError = document.getElementById("weightError");
const calculateBtn = document.getElementById("calculate");
const bmiScore = document.querySelector(".bmi-score");
const items = document.querySelectorAll(".item");
const form = document.getElementById("bmiform");
const heightUnitValue = document.querySelector(
  ".height-unit-value"
);
const weightUnitValue = document.querySelector(
  ".weight-unit-value"
);
const heightUpDown = document.querySelector('.height-updown');
const weightUpDown = document.querySelector('.weight-updown');
const heightDialog = document.querySelector(".height-dialog");
const weightDialog = document.querySelector(".weight-dialog");
const heightUnits = document.querySelectorAll(".height-unit");
const weightUnits = document.querySelectorAll(".weight-unit");
const heightUnit = document.querySelector(".height-unit-value");
const weightUnit = document.querySelector(".weight-unit-value");

// Details
const askForDetails = document.querySelector(".ask-for-details a");
const detailsSection = document.getElementById("details");
const detailsBmiScore = document.getElementById("bmi-score");
const bodyType = document.getElementById("body-type");
const genTipsList = document.querySelector(".general-tips ul");
const vegTipsList = document.querySelector(".veg ul");
const nonVegTipsList = document.querySelector(".non-veg ul");

resetViews();

let bmiValue = 0;
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

// Tips Details
const tipsDetails = [
  {
    category: "Under Weight",
    generalTips: [
      {
        title: "Increase Caloric Intake",
        tip: "Eat more frequent meals and snacks with a focus on calorie-dense foods",
      },
      {
        title: "Balanced Diet",
        tip: "Include a mix of carbohydrates, proteins, and fats in your meals",
      },
      {
        title: "Strength Training",
        tip: "Engage in strength training exercises to build muscle mass",
      },
    ],
    vegTips: [
      {
        title: "Nuts and Seeds",
        tip: "Incorporate almonds, walnuts, chia seeds, and flaxseeds for extra calories and healthy fats",
      },
      {
        title: "Nut Butters",
        tip: "Add peanut butter or almond butter to smoothies and snacks",
      },
      {
        title: "Whole Grains",
        tip: "Opt for quinoa, oats, and whole grain bread.",
      },
      {
        title: "Dairy Products: ",
        tip: "Consume whole milk, yogurt, and cheese for added calories and protein",
      },
    ],
    nonVegTips: [
      {
        title: "Lean Meats",
        tip: "Include chicken, turkey, and lean cuts of beef or pork for protein and calories",
      },
      {
        title: "Eggs",
        tip: "Eat eggs in various forms, like boiled, scrambled, or in omelets",
      },
      {
        title: "Fish",
        tip: "Incorporate fatty fish like salmon or mackerel for healthy fats and protein",
      },
      {
        title: "Dairy Products",
        tip: "Include milk, cheese, and yogurt for extra calories and protein",
      },
    ],
  },

  {
    category: "Normal Weight",
    generalTips: [
      {
        title: "Maintain Balance",
        tip: "Continue a balanced diet with appropriate portions of proteins, carbs, and fats",
      },
      {
        title: "Regular Exercise",
        tip: "Maintain a mix of aerobic and strength training exercises",
      },
      {
        title: "Hydration",
        tip: "Drink plenty of water throughout the day",
      },
    ],
    vegTips: [
      {
        title: "Variety",
        tip: "Include a variety of fruits, vegetables, whole grains, and legumes",
      },
      {
        title: "Protein Sources",
        tip: "Opt for beans, lentils, tofu, and tempeh",
      },
      {
        title: "Healthy Fats",
        tip: "Use avocados, nuts, and olive oil in your diet",
      },
      {
        title: "Fiber",
        tip: "Focus on high-fiber foods like vegetables, fruits, and whole grains",
      },
    ],
    nonVegTips: [
      {
        title: "Lean Proteins",
        tip: "Include a variety of lean meats, poultry, and fish",
      },
      {
        title: "Whole Grains",
        tip: "Choose brown rice, whole wheat bread, and oats",
      },
      {
        title: "Healthy Fats",
        tip: "Incorporate avocados, nuts, and olive oil",
      },
      {
        title: "Fruits and Vegetables",
        tip: "Maintain a good intake of a wide variety of fruits and vegetables",
      },
    ],
  },

  {
    category: "Under Weight",
    generalTips: [
      {
        title: "Increase Caloric Intake",
        tip: "Eat more frequent meals and snacks with a focus on calorie-dense foods",
      },
      {
        title: "Balanced Diet",
        tip: "Include a mix of carbohydrates, proteins, and fats in your meals",
      },
      {
        title: "Strength Training",
        tip: "Engage in strength training exercises to build muscle mass",
      },
    ],
    vegTips: [
      {
        title: "Nuts and Seeds",
        tip: "Incorporate almonds, walnuts, chia seeds, and flaxseeds for extra calories and healthy fats",
      },
      {
        title: "Nut Butters",
        tip: "Add peanut butter or almond butter to smoothies and snacks",
      },
      {
        title: "Whole Grains",
        tip: "Opt for quinoa, oats, and whole grain bread",
      },
      {
        title: "Dairy Products",
        tip: "Consume whole milk, yogurt, and cheese for added calories and protein",
      },
    ],
    nonVegTips: [
      {
        title: "Lean Meats",
        tip: "Include chicken, turkey, and lean cuts of beef or pork for protein and calories",
      },
      {
        title: "Eggs",
        tip: "Eat eggs in various forms, like boiled, scrambled, or in omelets",
      },
      {
        title: "Fish",
        tip: "Incorporate fatty fish like salmon or mackerel for healthy fats and protein",
      },
      {
        title: "Dairy Products",
        tip: "Include milk, cheese, and yogurt for extra calories and protein",
      },
    ],
  },

  {
    category: "Obesity",
    generalTips: [
      {
        title: "Caloric Deficit",
        tip: "Focus on creating a calorie deficit to promote weight loss",
      },
      {
        title: "Frequent, Small Meals",
        tip: "Eat smaller, more frequent meals to help control hunger",
      },
      {
        title: "Consult a Professional",
        tip: "Consider seeking advice from a healthcare provider or dietitian for personalized guidance",
      },
    ],
    vegTips: [
      {
        title: "Low-Calorie Options",
        tip: "Focus on low-calorie vegetables, fruits, and legumes",
      },
      {
        title: "Healthy Cooking Methods",
        tip: "Use methods like steaming, grilling, or baking instead of frying",
      },
      {
        title: "Hydration",
        tip: "Drink plenty of water and herbal teas",
      },
    ],
    nonVegTips: [
      {
        title: "Lean Proteins",
        tip: "Choose lean meats and fish, and avoid high-fat cuts",
      },
      {
        title: "Vegetable-Based Meals",
        tip: "Incorporate more vegetable-based meals and reduce meat portions",
      },
      {
        title: "Limit High-Calorie Sauces",
        tip: "Avoid creamy or sugary sauces and dressings",
      },
    ],
  },
];

calculateBtn.addEventListener("click", () => {
  askForDetails.classList.remove("disabled");
  weightDialog.style.display = "none";
  heightDialog.style.display = "none";

  const inputHeightValue = parseFloat(document.getElementById("height").value);
  const inputWeightValue = parseFloat(document.getElementById("weight").value);

  const inputHeightUnit = heightUnitValue.textContent;
  const inputWeightUnit = weightUnitValue.textContent;

  const heightValue = unitConvertor(inputHeightUnit, inputHeightValue);
  const weightValue = unitConvertor(inputWeightUnit, inputWeightValue);

  if (isNaN(heightValue) || heightValue < 0 || heightValue > 250) {
    heightError.style.display = "block";
    resetViews();
  }

  if (isNaN(weightValue) || weightValue < 0 || weightValue > 300) {
    weightError.style.display = "block";
    resetViews();
  }

  bmiValue = calculateBMI(heightValue, weightValue);
  const index = getIndexByBMI(bmiValue);

  if (
    heightError.style.display === "none" &&
    weightError.style.display === "none"
  ) {
    highlighTheType(index);
  }
});

heightError.addEventListener("click", ()=> {
  heightError.style.display = "none";
  inputHeight.focus();
});
weightError.addEventListener("click", ()=> {
  weightError.style.display = "none";
  inputWeight.focus();
});

inputHeight.addEventListener("click", () => {
  heightError.style.display = "none";
  resetViews();
});
inputWeight.addEventListener("click", () => {
  weightError.style.display = "none";
  resetViews();
});

askForDetails.addEventListener("click", (event) => {
  if (askForDetails.classList.contains("disabled")) {
    event.preventDefault();
  } else {
    detailsSection.style.display = "block";
    askForDetails.style.display = "none";
    setDetails(bmiValue);
  }
});

weightUnitValue.addEventListener("click", () => {
  weightDialog.style.display = "block";
});

heightUnitValue.addEventListener("click", () => {
  heightDialog.style.display = "block";
});

weightUpDown.addEventListener("click", () => {
  weightDialog.style.display = "block";
});

heightUpDown.addEventListener("click", () => {
  heightDialog.style.display = "block";
});

weightUnits.forEach((unit) => {
  unit.addEventListener("click", () => {
    const unitValue = unit.textContent.split("(");
    const unitSymbol = unitValue[1].slice(0, -1);
    weightUnit.textContent = unitSymbol;
    weightDialog.style.display = "none";
  });
});

heightUnits.forEach((unit) => {
  unit.addEventListener("click", () => {
    const unitValue = unit.textContent.split("(");
    const unitSymbol = unitValue[1].slice(0, -1);
    heightUnit.textContent = unitSymbol;
    heightDialog.style.display = "none";
  });
});

function highlighTheType(index) {
  // Set the BMI Score
  bmiScore.textContent = bmiValue;
  bmiScore.style.color = "black";

  // Reset the highlighted type, if already exists
  items.forEach((item) => {
    item.style.backgroundColor = "";
    item.style.color = "";
    item.style.padding = "";
  });

  // Highlight the type and give padding and roundness to border
  items[index].style.padding = "5px";
  items[index].style.borderRadius = "5px";
  Object.assign(items[index].style, styles[index]);
}

function calculateBMI(heightValue, weightValue) {
  const heightValueM = heightValue / 100;
  const bmiValueFloat = weightValue / (heightValueM * heightValueM);
  const roundedBmiValue = bmiValueFloat.toFixed(1);

  return roundedBmiValue;
}

function getIndexByBMI(bmiValue) {
  let index = 0;
  if (bmiValue < 16) {
    index = 0;
  } else if (bmiValue >= 16 && bmiValue < 17) {
    index = 1;
  } else if (bmiValue >= 17 && bmiValue < 18.5) {
    index = 2;
  } else if (bmiValue >= 18.5 && bmiValue < 25) {
    index = 3;
  } else if (bmiValue >= 25 && bmiValue < 30) {
    index = 4;
  } else if (bmiValue >= 30 && bmiValue < 35) {
    index = 5;
  } else if (bmiValue >= 35 && bmiValue < 40) {
    index = 6;
  } else if (bmiValue >= 40) {
    index = 7;
  }
  return index;
}

function setDetails(bmiValue) {
  const indexForDetails = returnIndexForDetails(bmiValue);
  const bodyTypeValue = tipsDetails[indexForDetails].category;

  detailsBmiScore.textContent = bmiValue;
  bodyType.textContent = bodyTypeValue;

  createListOfTips(indexForDetails);
}

function returnIndexForDetails(bmiValue) {
  let index = 0;
  if (bmiValue < 18.5) {
    index = 0;
  } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
    index = 1;
  } else if (bmiValue >= 25 && bmiValue < 29.9) {
    index = 2;
  } else if (bmiValue >= 30) {
    index = 3;
  }
  return index;
}

function createListOfTips(index) {
  const genTipsData = tipsDetails[index].generalTips;
  const vegTipsData = tipsDetails[index].vegTips;
  const nonVegTipsData = tipsDetails[index].nonVegTips;

  createAndAppendList(genTipsData, genTipsList);
  createAndAppendList(vegTipsData, vegTipsList);
  createAndAppendList(nonVegTipsData, nonVegTipsList);
}

function createAndAppendList(tipsData, tipsList) {
  tipsList.innerHTML = "";
  tipsData.forEach((tipItem) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<b>${tipItem.title}: </b>${tipItem.tip}.`;
    tipsList.appendChild(listItem);
  });
}

function resetViews() {
  bmiScore.textContent = "20.1";
  bmiScore.style.color = "#c4c4c4";

  items.forEach((item) => {
    item.style.backgroundColor = "";
    item.style.color = "";
    item.style.padding = "";
  });

  askForDetails.style.display = "block";
  askForDetails.classList.add("disabled");
  detailsSection.style.display = "none";
  weightDialog.style.display = "none";
  heightDialog.style.display = "none";
}

function unitConvertor(unit, value) {
  if(unit === "cm" || unit === "kg") {
    return value;
  }

  switch (unit) {
    case "m":
      return value*100;
  
    case "ft":
      return value*30.48;

    case "in":
      return value*2.54;

    case "lbs":
      return value*0.45359237;
  }
}
