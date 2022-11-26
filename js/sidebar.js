const repersitoryButton1 = document.querySelector(".repersitory-button1")
const severRepersitory1 = document.querySelector(".server-repersitory1")

const repersitoryButton2 = document.querySelector(".repersitory-button2")
const severRepersitory2 = document.querySelector(".server-repersitory2")


repersitoryButton1.addEventListener("click", e => {
    severRepersitory1.classList.toggle("open");
});

repersitoryButton2.addEventListener("click", e => {
    severRepersitory2.classList.toggle("open");
});