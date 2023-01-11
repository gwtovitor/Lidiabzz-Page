const btn = document.getElementById('btn')
function togglemenu(){
    const nav = document.getElementById('divmenu')
    nav.classList.toggle('active')
}
btn.addEventListener('click', togglemenu)

const clk = document.getElementById('btn')
function botaoclicado(){
    const botao = document.getElementById('btn')
    btn.classList.toggle('active')
}
clk.addEventListener('click', botaoclicado)