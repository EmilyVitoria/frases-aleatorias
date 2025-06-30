const frases = [
    "Confia no processo, mas faz o café primeiro.",
    "Se deu errado, era aprendizado. Se deu certo, era destino.",
    "Às vezes o bug é só carinho em formato de caos.",
    "Respira. É só um HTML que não tá fechando.",
    "Nem tudo que quebra está errado. Às vezes é só o JavaScript mesmo.",
    "Foco, café, e que a internet não caia.",
    "Ctrl + S salva o código, e às vezes o emocional também.",
    "O problema era uma vírgula. Sempre foi.",
    "Debugar é um ato de fé.",
    "Seja a função pura que você quer ver no mundo.",
    "Promessas foram feitas... e não resolvidas.",
    "Nada como um bug novo pra esquecer os antigos.",
    "Quem nunca cometeu um 'console.log existencial' que atire a primeira exceção.",
    "A vida é como um if sem else: nem sempre tem retorno.",
    "Desenvolvedor bom é desenvolvedor que comita com medo e deploya com fé."
];

let contador = 0;

// Exibe nova frase com fade
function novaFrase() {
    const fraseEl = document.getElementById("frase");
    const indice = Math.floor(Math.random() * frases.length);

    fraseEl.style.opacity = 0;
    setTimeout(() => {
        fraseEl.textContent = `"${frases[indice]}"`;
        fraseEl.style.opacity = 1;
        contador++;
        document.getElementById("contador").textContent = `Frases geradas: ${contador}`;
    }, 300);
}

// Copiar a frase exibida
function copiarFrase() {
    const texto = document.getElementById("frase").textContent;
    navigator.clipboard.writeText(texto);
    alert("Frase copiada para a área de transferência!");
}

// Alternar entre tema claro e escuro
function alternarTema() {
    const html = document.documentElement;
    const temaAtual = html.getAttribute("data-theme");
    html.setAttribute("data-theme", temaAtual === "dark" ? "light" : "dark");
}

// Salvar frase nos favoritos (localStorage)
function salvarFavorita() {
    const fraseAtual = document.getElementById("frase").textContent;
    let favoritas = JSON.parse(localStorage.getItem("favoritas")) || [];

    if (!favoritas.includes(fraseAtual)) {
        favoritas.push(fraseAtual);
        localStorage.setItem("favoritas", JSON.stringify(favoritas));
        atualizarFavoritas();
    } else {
        alert("Essa frase já está salva!");
    }
}

// Atualizar lista de frases favoritas
function atualizarFavoritas() {
    const lista = document.getElementById("listaFavoritas");
    lista.innerHTML = "";

    const favoritas = JSON.parse(localStorage.getItem("favoritas")) || [];

    favoritas.forEach(frase => {
        const li = document.createElement("li");
        li.textContent = frase;
        lista.appendChild(li);
    });
}

// Ao carregar o site
window.onload = () => {
    atualizarFavoritas();
};
