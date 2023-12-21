document.querySelectorAll(".copy-link").forEach((copyLinkParent) => {
    const inputField = copyLinkParent.querySelector(".copy-link-input");
    const copyButton = copyLinkParent.querySelector(".copy-link-button");
    const text = inputField.value;



    inputField.addEventListener("focus", () => inputField.select());

    copyButton.addEventListener("click", () => {
      inputField.select();
      navigator.clipboard.writeText(text);

      copyButton.textContent = "Copied!";
      setTimeout(() => (copyButton.textContent = "-"), 5000);
    });
  });