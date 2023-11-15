document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        const requiredFields = [
            { id: "nome", label: "Nome", minLength: 8 },
            { id: "email", label: "Email" },
            { id: "mensagem", label: "Mensagem", minLength: 10 }
        ];

        const errorList = document.getElementById("error-list");
        errorList.innerHTML = "";

        let hasError = false;

        requiredFields.forEach(field => {
            const input = document.getElementById(field.id);
            const value = input.value.trim();

            if (field.id === "email" && !value) {
                input.classList.add("error");
                hasError = true;
                const listItem = document.createElement("li");
                listItem.innerHTML = `O campo <strong>${field.label}</strong> é obrigatório.`;
                listItem.addEventListener("click", () => {
                    input.focus();
                });
                errorList.appendChild(listItem);
            } else if (!value && field.id !== "email") {
                input.classList.add("error");
                hasError = true;
                const listItem = document.createElement("li");
                listItem.innerHTML = `O campo <strong>${field.label}</strong> é obrigatório.`;
                listItem.addEventListener("click", () => {
                    input.focus();
                });
                errorList.appendChild(listItem);
            } else if (field.minLength && value.length < field.minLength) {
                input.classList.add("error");
                hasError = true;
                const listItem = document.createElement("li");
                listItem.innerHTML = `O campo <strong>${field.label}</strong> deve ter no mínimo ${field.minLength} caracteres.`;
                listItem.addEventListener("click", () => {
                    input.focus();
                });
                errorList.appendChild(listItem);
            } else {
                input.classList.remove("error");
            }
        });

        
        //Obrigar o usuário digitar a formato correto de telefone, não é viavel, não deixa navegar com o tab
       /* 
        const telefoneInput = document.getElementById("telefone");
        const telefoneValue = telefoneInput.value.trim();
        if (telefoneValue && !/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(telefoneValue)) {
            telefoneInput.classList.add("error");
            hasError = true;

            const listItem = document.createElement("li");
            listItem.innerHTML = `O campo <strong>Telefone</strong> está em um formato inválido.`;
            listItem.addEventListener("click", () => {
                telefoneInput.focus();
             });
            errorList.appendChild(listItem);
        }
        */

         if (hasError) {
             event.preventDefault();
             const errorMessage = document.getElementById("error-message");
             errorMessage.style.display = "grid";
            }


    });
});
