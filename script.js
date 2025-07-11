document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".login-form");
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita o envio tradicional do formulário

        const email = emailInput.value.trim();
        const senha = senhaInput.value.trim();

        // Validação simples
        if (!email || !senha) {
            alert("Preencha todos os campos!");
            return;
        }

        // Você pode substituir isso com uma chamada AJAX (ex: fetch)
        console.log("Tentando login com:", email, senha);

        // Simulação de login válido
        if (email === "admin@exemplo.com" && senha === "senha123") {
            alert("Login bem-sucedido!");
            window.location.href = "painel.html"; // redireciona após login
        } else {
            alert("Credenciais inválidas!");
        }
    });
});
