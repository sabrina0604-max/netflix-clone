const carrossel = document.querySelectorAll(".carrossel");

const btnDireito = document.querySelectorAll(".btn-direito");
const btnEsquerdo = document.querySelectorAll(".btn-esquerdo");

btnDireito.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        carrossel[index].scrollLeft +=800;
    });
});

btnEsquerdo.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        carrossel[index].scrollLeft -=800;
    });
});