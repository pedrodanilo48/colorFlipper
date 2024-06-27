document.addEventListener("DOMContentLoaded", () => {
    const colorButton = document.getElementById("colorButton");
    const colorCode = document.getElementById("colorCode");

    colorButton.addEventListener("click", () => {
        const newColor = getRandomColor();
        document.body.style.backgroundColor = newColor;
        colorCode.textContent = newColor;
    });

    function getRandomColor() {
        const hexValues = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += hexValues[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
