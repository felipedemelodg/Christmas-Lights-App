let on_button = document.getElementById('on')
let velocidade = document.getElementById('tempo')
let off_button = document.getElementById('off')
let circulos = document.getElementsByClassName('padrao')
let tamanho = document.getElementById('tamanho')
let cores = document.getElementById('cores')
let cont = 0;

function CriarLuzes() {





    this.luz = document.createElement('div')
    this.luz.classList.add('padrao', cores.value, '_' + cont)
    cont++
    cores.value == 'vermelho' ?
        this.luz.style.backgroundColor = 'red' :
        cores.value == 'amarelo' ?
        this.luz.style.backgroundColor = 'yellow' :
        this.luz.style.backgroundColor = 'blue'

    document.getElementById('area').appendChild(
        this.luz
    )
    let marcado = document.getElementsByClassName('marcado')
    if (marcado.length > 1) {
        marcado[marcado.length - 2].classList.remove('marcado')

    }
    for (let i = 0; i < circulos.length; i++) {
        circulos[i].addEventListener('click', () => {
            let indice = Object.values(circulos).indexOf(circulos[i])
            circulos[indice].classList.add('marcado')
            tamanho.value = circulos[indice].style.width 
            if (marcado.length > 0) {
                velocidade.style.display = 'flex'
                on_button.style.display = 'flex'
                off_button.style.display = 'flex'
                tamanho.style.display = 'flex'
                let marcados = Object.values(circulos).filter(el =>
                    el.classList.contains('marcado')
                )
                marcados.forEach(el =>
                    el.classList.remove('marcado')
                )
                document.querySelector('._' + indice)
                    .classList.add('marcado')

                tamanho.addEventListener('input', () => {
                    let element = Object.values(circulos).filter(el =>
                        el.classList.contains('marcado'))
                       
                        element[0].style.width = tamanho.value+'px'
                        element[0].style.height = tamanho.value+'px'
                })
            }
        })
    }

}


function tempo() {
    for (let i = 0; i < circulos.length; i++) {
        circulos[i].style.animationDuration = velocidade.value + "s"
    }
}

function on() {
    for (let i = 0; i < circulos.length; i++) {
        circulos[i].removeAttribute('style')
        circulos[i].style.animationPlayState = 'running'
    }
}

function off() {
    for (let i = 0; i < circulos.length; i++) {
        circulos[i].style.animation = 'none'
    }

}

on_button.addEventListener('click', on, false)
off_button.addEventListener('click', off, false)
velocidade.addEventListener('click', tempo, false)
cores.addEventListener('click', CriarLuzes, false)