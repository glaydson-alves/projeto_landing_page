let soma = document.querySelector("#soma")
let form = document.querySelector("form")
let resultado

/* CAMPO DE SOMA COM VALORES DINÂMICOS */
window.addEventListener("load",()=>{
    // Math.floor arredonda os valores para baixo
    let num1 = Math.floor(Math.random() * 10)// gerando valores aleatórios
    let num2 = Math.floor(Math.random() * 10)// gerando valores aleatórios
    
    soma.setAttribute("placeholder",`Qual a soma de ${num1} + ${num2}`)
    resultado = num1 + num2 
})

/* VALIDAR O CAMPO DE SOMA */
function verificaSoma(){
    if(soma.value == ""){
        soma.style.outline = "none"
    }
    else if(soma.value != resultado){
        soma.style.outline = "2px solid red"
        return false
    }
        else{
            soma.style.outline = "2px solid green"
            return true
        }
}

soma.addEventListener("keyup",verificaSoma)

form.addEventListener("submit",(evento)=>{
    if(verificaSoma()){
        alert("Tudo Certo")
        return true
    }

    else{
        evento.preventDefault()
        alert("A soma está errada!")
        return false
    }
})