const imgBox = document.querySelector(".imgbox");
const whiteboxes = document.getElementsByClassName("whitebox");

imgBox.addEventListener("dragstart", (e) => {
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className = "hide";
  },0);
});

imgBox.addEventListener("dragend", (e) => {
  e.target.className = "imgbox";
});

for (whitebox of whiteboxes) {
  whitebox.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  whitebox.addEventListener("dragenter", (e) => {
    e.preventDefault();
    e.target.className += " dashed";
  });

  whitebox.addEventListener("dragleave", (e) => {
    e.preventDefault();
    e.target.className = "whitebox";
  });

  whitebox.addEventListener("drop", (e) => {
    e.preventDefault();
    e.target.append(imgBox);
  });
}
