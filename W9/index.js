document.addEventListener("DOMContentLoaded", () => {
  // Selectors
  const buttons = document.querySelectorAll(".color-inputs button");
  const colorBoxes = document.querySelectorAll(".color-box");
  const selectInputs = document.querySelectorAll(".ready-colors select");
  const colorPickers = document.querySelectorAll(
    ".input-colors input[type='color']"
  );
  // Random color inputs
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  // show color's code in inpute
  function changeColor(box, input, newColor) {
    box.style.backgroundColor = newColor;
    input.value = newColor;
    const textElement = box.querySelector("div");
    if (textElement) {
      textElement.style.color = isDarkColor(newColor) ? "white" : "black";
    }
  }

  //Generate random color with click
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.closest(".boxs");
      const colorBox = parent.querySelector(".color-box");
      const colorInput = parent.querySelector(".color-code input");
      const randomColor = getRandomColor();
      changeColor(colorBox, colorInput, randomColor);
    });
  });

  //Change color with click
  colorBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      const parent = box.closest(".boxs");
      const colorInput = parent.querySelector(".color-code input");
      const randomColor = getRandomColor();
      changeColor(box, colorInput, randomColor);
    });
  });

  // Ready colors
  selectInputs.forEach((select) => {
    select.addEventListener("change", () => {
      const parent = select.closest(".boxs");
      const colorBox = parent.querySelector(".color-box");
      const colorInput = parent.querySelector(".color-code input");
      const selectedColor = select.value;
      changeColor(colorBox, colorInput, selectedColor);
    });
  });

  // input[type="color"]
  colorPickers.forEach((picker) => {
    picker.addEventListener("input", () => {
      const parent = picker.closest(".boxs");
      const colorBox = parent.querySelector(".color-box");
      const colorInput = parent.querySelector(".color-code input");
      const pickedColor = picker.value;
      changeColor(colorBox, colorInput, pickedColor);
    });
  });
});
// color: dark & light check
function isDarkColor(hex) {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
}
