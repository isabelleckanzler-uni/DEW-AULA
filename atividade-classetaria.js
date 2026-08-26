function executarAtividade() {
    const idade = Number(prompt("Digite sua idade:"));
    const evento = prompt("Digite o evento (Livre, 16 ou 18):").toLowerCase();

    if (evento === "livre") {
        alert("Resultado: Pode entrar\nMotivo: entrada livre.");
    } else if (evento === "16" && idade >= 16) {
        alert("Resultado: Pode entrar\nMotivo: idade mínima atingida.");
    } else if (evento === "16" && idade < 16) {
        alert("Resultado: Não pode entrar\nMotivo: idade inferior à classificação mínima de 16 anos.");
    } else if (evento === "18" && idade >= 18) {
        alert("Resultado: Pode entrar\nMotivo: idade mínima atingida.");
    } else if (evento === "18" && idade < 18) {
        alert("Resultado: Não pode entrar\nMotivo: idade inferior à classificação mínima de 18 anos.");
    } else {
        alert("Opção inválida! Digite Livre, 16 ou 18.");
    }
}

