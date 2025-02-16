const container = document.getElementById('code-rain-container');
const poemText = document.getElementById('poem-text').innerHTML;
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+~`|}{\:;?><,./-=";

function createCodeRain() {
    let codeRain = "";
    for (let i = 0; i < poemText.length; i++) {
        if (poemText[i] === '\n') {
            codeRain += "<br>";
        } else {
            codeRain += `<span class="matrix-code">${characters.charAt(Math.floor(Math.random() * characters.length))}</span>`;
        }
    }
    container.innerHTML = codeRain;
}

function revealPoemText() {
    setTimeout(() => {
        container.innerHTML = poemText;
    }, 2000); // Adjust the delay as needed
}

createCodeRain();
revealPoemText();
