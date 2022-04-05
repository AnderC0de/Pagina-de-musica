var Pausar = true;
var reproducir = document.getElementsByClassName('Reproducir')


function iniciarReproduccion(cancion){
    let mp3 = document.getElementById(cancion);
    mp3.play();
    

   // document.getElementById('detener').disabled = false;
}

function PausarReproduccion(cancion){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        audios[i].pause();

    }
    //let mp3 = document.getElementById("mp3dos");
    //mp3.pause();
}

function Reproductor(){
    if(Pausar == true){
        iniciarReproduccion();
        window.Pausar = false;
    }else{
        PausarReproduccion();
        window.Pausar = true;
        }
}

function AbrirReproductor(cancion){
    document.getElementById("Reproductor").style.display = "flex";  
    document.getElementById("Blur").style.filter = "blur(2px)";
    document.getElementById("Abrir"+cancion).style.display = "flex";
    iniciarReproduccion(cancion);
    document.getElementById(cancion).style.display = "flex";
}
function CerrarReproductor(){
    document.getElementById("Reproductor").style.display = "none";
    
    document.getElementById("Blur").style.filter = "blur(0px)";
    PausarReproduccion();
    var audi = document.getElementsByClassName("audi");
    for(var i = 0, len = audi.length; i < len;i++){
        audi[i].style.display = "none";

    }
}
document.getElementById('Runo').addEventListener('click', () => {
    AbrirReproductor("mp3uno");})
document.getElementById('Runos').addEventListener('click', () => {
    AbrirReproductor("mp3uno");})

document.getElementById('Rdos').addEventListener('click', () => {
    AbrirReproductor("mp3dos");})
document.getElementById('Rdoss').addEventListener('click', () => {
    AbrirReproductor("mp3dos");})

document.getElementById('Rtres').addEventListener('click', () => {
    AbrirReproductor("mp3tres");})
document.getElementById('Rtress').addEventListener('click', () => {
    AbrirReproductor("mp3tres");})
document.getElementById('Rcuatros').addEventListener('click', () => {
    AbrirReproductor("mp3cuatro");})
document.getElementById('Rcuatro').addEventListener('click', () => {
    AbrirReproductor("mp3cuatro");})

document.getElementById('Rcincos').addEventListener('click', () => {
    AbrirReproductor("mp3cinco");})
document.getElementById('Rcinco').addEventListener('click', () => {
    AbrirReproductor("mp3cinco");})

document.getElementById('Rsietes').addEventListener('click', () => {
    AbrirReproductor("mp3siete");})
document.getElementById('Rsiete').addEventListener('click', () => {
    AbrirReproductor("mp3siete");})

document.getElementById('Rseiss').addEventListener('click', () => {
    AbrirReproductor("mp3seis");})
document.getElementById('Rseis').addEventListener('click', () => {
    AbrirReproductor("mp3seis");})
    

document.getElementById('Click').addEventListener('click', CerrarReproductor);
//window.alert("jajajs")
let song= document.getElementById("Cancion1");
song.addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
     document.getElementById("Cancion1")
})

