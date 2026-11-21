const form = document.getElementById("generate-form")
const code = document.querySelector(".code_showcase code")
const showcacseContainer = document.getElementById("preview-container")
const cardPreview = document.getElementById("card-preview")
const usernameInput = document.getElementById("username")
const copyCodeButton = document.getElementById("copy_btn_code")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();


    const url = `${window.location.origin}/api/generate?username=${encodeURIComponent(username)}`;

    code.textContent = `<img src="${url}" alt="Gimcard" />`;

    cardPreview.src = url
    showcacseContainer.hidden = false
    copyCodeButton.hidden = false
    
})

copyCodeButton.addEventListener("click", () => {
    const text = code.textContent
    if (text) {
        navigator.clipboard.writeText(text)
            .then(() => console.log("Copied!"))
            .catch(err => console.error("Copy failed! Error: ", err))
    }
})