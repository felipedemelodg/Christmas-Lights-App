let on_button = document.getElementById('on')
let tempo = document.getElementById('tempo')
let off_button = document.getElementById('off')
let circulos = document.getElementsByClassName('padrao')
let len = circulos.length
let tamanho = document.getElementById('tamanho')
let cores = document.getElementById('cores')
let cont = 0;
let area = document.getElementById('area')



function mostrarControles() {
    on_button.style.display = "block"
    off_button.style.display = "block"
    tamanho.style.display = "block"
    tempo.style.display = "block"
}

function Lampada() {
    this.lampada = document.createElement('div')
    this.lampada.classList.add('padrao', "_" + cont)
    cont++
    area.appendChild(this.lampada)
}

function Animacao() {
    this.animacao = new Lampada()
    cores.value == 'amarelo' ?
        this.animacao.lampada.classList.add('amarelo') :
        cores.value == 'vermelho' ?
        this.animacao.lampada.classList.add('vermelho') :
        this.animacao.lampada.classList.add('azul')
}

function Controle() {
    this.controle = new Animacao
    this.controle
        .animacao
        .lampada
        .addEventListener(
            'click', mostrarControles
        )

    this.controle
        .animacao
        .lampada
        .addEventListener(
            'click', controleDeTamamanho
        )
    this.controle
        .animacao
        .lampada
        .addEventListener(
            'click', selecao
        )

    on_button.addEventListener('click', on)
    off_button.addEventListener('click', off)
    tempo.addEventListener('input',velocidade)

}

function velocidade() {
    Object
        .values(
            document
            .getElementsByClassName('marcado')).forEach(el => {
            el.style.animationDuration = tempo.value+"s"
        })
}
function on() {
    Object
        .values(
            document
            .getElementsByClassName('marcado')).forEach(el => {
            el.style.animationDuration = '1s'
        })
}
function off() {
    Object
        .values(
            document
            .getElementsByClassName('marcado')).forEach(el => {
            el.style.animationDuration = '0s'
        })
}

function selecao(e) {
    if (e.target.classList.contains('marcado')) {
        e.target.classList.remove('marcado')
    } else {
        e.target.classList.add('marcado')
    }
}

function controleDeTamamanho() {
    let selecao = document.getElementsByClassName('marcado')
    tamanho.addEventListener('input', () => {
        Object.values(selecao).forEach(mudaTamanho)
    })
}

function mudaTamanho(el) {
    el.style.width = tamanho.value + "px"
    el.style.height = tamanho.value + "px"
}


cores.addEventListener('input', Controle, false)