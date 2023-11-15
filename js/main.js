/*************** 
    CODE CAROUSEL
***************/

const imageList = [ //dichiarazione array delle immagini
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp',
];
//console.log('Immagini:', imageList);
let insertImage = ''; //dichiarazione variabile immagine da inserire

/*
* Inserisco ciclo for per andare avanti con le immagini
* all'interno dell'array
*/

for (let i = 0; i < imageList.length; i++){
    const imagePath = imageList[i]; //dichiarazione variabile del percorso immagine
    insertImage += `<img class="img d-none" src="${imagePath}" alt="">`; //percorso dell'immagine da mettere nel HTML
}

document.querySelector('.container').innerHTML = insertImage; //inserisco nel container il percorso immagine
let currentImage = 0; //dichiarazione variabile dell'immagine corrente
const images = document.querySelectorAll('.container img'); //dichiarazione variabile delle immagini presenti nel container
images[currentImage].classList.remove('d-none'); //dichiarazione per rendere visibile l'immagine
const nextBtn = document.querySelector('#arrow-right'); //dichiarazione variabile della freccia destra
//console.log('Freccia destra:', nextBtn);
const prevBtn = document.querySelector('#arrow-left'); //dichiarazione variabile della freccia sinistra
//console.log('Freccia sinistra:', prevBtn);

/*
* Gestisco l'evento della freccia destra per
* mandare avanti le immagini
*/

nextBtn.addEventListener('click', function(){
    
    /*
    * Creo un if per rendere visibile l'immagine cussessiva
    * e rendere non visibile l'immagine precedente
    */
    
    if (currentImage < images.length - 1){
        images[currentImage].classList.add('d-none'); //immagine corrente diventa non visibile
        currentImage++; //vado avanti con le immagini
        images[currentImage].classList.remove('d-none'); //rendo visibile l'immagine successiva
    }
})

prevBtn.addEventListener('click', function(){

    /*
    * Creo un if per rendere visibile l'immagine precedente
    * e rendere non visibile l'immagine successiva
    */

    if (currentImage > 0){
        images[currentImage].classList.add('d-none'); //immagine corrente diventa non visibile
        currentImage--; //vado indietro con le immagini
        images[currentImage].classList.remove('d-none'); //rendo visibile l'immagine precedente
    }
})