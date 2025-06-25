function copyToClipboard() {
    const codeElement = document.querySelector("pre");
    navigator.clipboard.writeText(codeElement.innerText)
        .then(() => alert("Code copied to clipboard!"))
        .catch(err => console.error("Failed to copy: ", err));
}
