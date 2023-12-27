/* for creation of more div for image */

const containerE1 = document.querySelector(".grid-container");


for (let index = 0; index < 6; index++) {
  const imageContainerE1 = document.createElement("div");
  imageContainerE1.classList.add("image-item");
  containerE1.appendChild(imageContainerE1);
}

/* for creation of more div for image */


/* for button command */
const btnContainerE1 = document.querySelector(".btn-container");

const btnE1 = document.createElement("button");
btnE1.innerText = "Load More";
btnE1.classList.add("btn");
btnContainerE1.appendChild(btnE1);

btnE1.addEventListener("click", () => {
  for (let index = 0; index < 3; index++) {
    const imageContainerE1 = document.createElement("div");
    imageContainerE1.classList.add("image-item");
    containerE1.appendChild(imageContainerE1);
  }
  generateImage();
})

/* for button command */


/* for adding more pictures when reloading*/


function generateImage() {
  const imageContainerE1s = document.querySelectorAll(".image-item");

  imageContainerE1s.forEach((imageContainerE1) => {
    imageContainerE1.style.backgroundImage = `url(https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)})`;
  });
  console.log(`Assigned images to all ${imageContainerE1s.length} containers.`);
}

// Call generateImage when the page loads:
window.addEventListener("load", generateImage);


/* for adding more pictures when reloading*/

