var cont = 1;
var textos = [
    "Cães aposentados policiais: Os cães mais usados são: Pastor Alemão, Pastor Belga Malinois, Labrador Retriever, Rottweiler, Doberman, Springer Spaniel Inglês e Bloodhound.",
    "Cargos dos ex-cães policiais: Cada um desses cães tem um cargo, como patrulha, detecção, proteção, táticas, busca, farejador de drogas e explosivos, defesa, vigilância e ataque, busca, resgate e rastreamento de pessoas.",
    "Cães-guias: Para essa exigência os cães mais usados são: Golden Retriever, Labrador e Pastor Alemão. Mas temos o Border Collie, Pastor Australiano, Terra Nova e São Bernardo que também servem para esse trabalho.",
    "O cão idoso não tem exigências de raça, pois com o tempo envelhecem. Todo tipo de cão idoso pode ser adotado.",
];
        
var links = [
    "beef-wellington.html",
    "paella.html",
    "pizza-margherita.html"
];
        
document.getElementById('radio1').checked = true;
        
setInterval(() => {
    proximaimg();
}, 5000);
        
function proximaimg(){
    cont++;
    if(cont > 4){
        cont = 1;
}
document.getElementById('radio'+cont).checked = true;
document.getElementById('texto-mudavel').innerText = textos[cont - 1];
document.getElementById('link-texto').href = links[cont - 1];
document.getElementById('link-carrossel').href = links[cont - 1];
}