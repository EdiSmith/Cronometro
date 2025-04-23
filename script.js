let comecar = document.getElementById("start")
let parar = document.getElementById("stop")
let reiniciar = document.getElementById("resat")


let hora = document.getElementById("hora")
let minuto = document.getElementById("minuto")
let segundo = document.getElementById("segundo")


comecar.addEventListener("click", iniciar)
parar.addEventListener("click", fim)
reiniciar.addEventListener("click", novamente)

let cont = 0

function iniciar(){

    if (segundo.textContent >= 0 && segundo.textContent == 59) {

        cont = setInterval(() => {

            segundo.textContent = parseInt(segundo.textContent) + 1
                
            }, 1000);
        
    }

    if (minuto.textContent >=0 || minuto.textContent < 59) {

        cont = setInterval(() => {

            minuto.textContent = parseInt(minuto.textContent) + 1
                
            }, 1000);
        
    }

    if (segundo.textContent >= 0 || segundo.textContent < 59) {

        cont = setInterval(() => {

            segundo.textContent = parseInt(segundo.textContent) + 1
                
            }, 1000);
        
    }

    


}

function fim(){

   clearInterval(cont) 
}

function novamente(){
    tempo.textContent = 0
}