const images = ["🍎", "🍌", "🍒", "🍇", "🍍", "🍋"];
let attempts = 0;
const maxAttempts = 3;

function generateRandomImages() {
    const slot1 = images[Math.floor(Math.random() * images.length)];
    const slot2 = images[Math.floor(Math.random() * images.length)];
    const slot3 = images[Math.floor(Math.random() * images.length)];

    document.getElementById("slot1").textContent = slot1;
    document.getElementById("slot2").textContent = slot2;
    document.getElementById("slot3").textContent = slot3;

    return [slot1, slot2, slot3];
}

function checkWin(slot1, slot2, slot3) {
    if (slot1 === slot2 && slot2 === slot3) {
        return true;
    }
    return false;
}

document.getElementById("generateButton").addEventListener("click", function() {
    if (attempts >= maxAttempts) {
        document.getElementById("message").textContent = "You have used all attempts!";
        return;
    }

    attempts++;
    const [slot1, slot2, slot3] = generateRandomImages();
    document.getElementById("result").textContent = `Attempt ${attempts} of ${maxAttempts}`;

    if (checkWin(slot1, slot2, slot3)) {
        document.getElementById("message").textContent = "You win!";
    } else {
        document.getElementById("message").textContent = "No win, try again!";
    }
});
