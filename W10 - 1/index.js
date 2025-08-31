const circles = document.querySelectorAll(".progress-circle");
const connectors = document.querySelectorAll(".progress-connector");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentStep = 0;

function updateSteps() {
  circles.forEach((circle, index) => {
    if (index <= currentStep) {
      circle.classList.add("active-circle");
    } else {
      circle.classList.remove("active-circle");
    }
  });

  connectors.forEach((connector, index) => {
    if (index < currentStep) {
      connector.classList.add("active-connector");
    } else {
      connector.classList.remove("active-connector");
    }
  });

  prevBtn.disabled = currentStep === 0;
  nextBtn.disabled = currentStep === circles.length - 1;
}

nextBtn.addEventListener("click", () => {
  if (currentStep < circles.length - 1) {
    currentStep++;
    updateSteps();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    updateSteps();
  }
});
