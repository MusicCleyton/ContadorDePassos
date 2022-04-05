
function calculaNumeros() {
var ini = document.getElementById('number01')
var fim = document.getElementById('number02')
var passo = document.getElementById('number03')
var res = document.getElementById('res')

if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert('[ERRO] Faltam dados!')
}else{
    res.innerHTML = 'Contando:'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    for(let c = i; c <= f; c += p ) {
        res.innerHTML += `${c} \u{1F449}`
    }
}
}