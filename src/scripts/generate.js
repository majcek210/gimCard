const form = document.getElementById("generate-form")
const code = document.querySelector(".code_showcase code")
const showcacseContainer = document.getElementById("preview-container")
const cardPreview = document.getElementById("card-preview")
const usernameInput = document.getElementById("username")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();

    const theme = (
        document.querySelector('input[name="theme"]:checked')

    ).value;

    const url = `${window.location.origin}/api/generate?username=${encodeURIComponent(username)}&theme=${theme}`;

    code.textContent = `<img src="${url}" alt="Gimcard" />`;

    cardPreview.src = url
    showcacseContainer.hidden = false
    
})