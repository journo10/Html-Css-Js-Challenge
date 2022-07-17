//function validate
function FormElementValidation(formElement) {
    if (!formElement.checkValidity()) {

        if (formElement.nextElementSibling?.className !== "error") {
            const error = document.createElement("small");
            error.className = "error";
            error.innerText = formElement.validationMessage;
            formElement.insertAdjacentElement("afterend", error)
        }

    } else {
        if (formElement.nextElementSibling?.className === "error") {
            formElement.nextElementSibling.remove()
        }
    }
}


const form = document.getElementById("form");

[...form.elements].forEach((formElement) => {
    ["change", "keyup"].forEach((method) => {
        formElement.addEventListener(method, () => {
            FormElementValidation(formElement)
        })
    })
})

form.addEventListener("submit", function (e) {
    e.preventDefault();
    [...this.elements].forEach((formElement) => {
        FormElementValidation(formElement)
    })
})