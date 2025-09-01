const dogsImage = document.getElementById("dogs");
const changeDogs = document.getElementById("change-dogs-image");
const loader = document.querySelector(".loader");

const dogsImageSrc = async (params) => {
  try {
    const dogsApi = await fetch("https://dog.ceo/api/breeds/image/random");
    const dogsArray = await dogsApi.json();
    return dogsArray.message;
  } catch (error) {
    console.error("خطا در دریافت تصویر سگ:", error);
    return "/Image/fallback-image.jpg";
  }
};

changeDogs.addEventListener("click", async () => {
  loader.classList.add("show");
  dogsImage.style.opacity = "0";
  const newImageSrc = await dogsImageSrc();
  dogsImage.src = newImageSrc || "/Image/fallback-image.jpg";
  loader.classList.remove("show");
  dogsImage.style.opacity = "1";
});
