MILESTONE 1

Creiamo il markup statico: costruiamo il container, le freccette e un'immagine grande al centro
Aggiungete poi le altre immagini (sono nello zip in allegato)
Fate in modo che solo una delle immagini sia visibile, grazie ad una classe specifica
Risultato: struttura base e stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Rimuoviamo le immagini dall'HTML e le inseriamo dinamicamente. Potete creare un array dei percorsi e scriverle in pagina con un ciclo for che usa .innerHtml o createElement
Quando create le immagini fate in modo che la prima abbia la classe per renderla visibile
Risultato: lo stesso della milestone 1, ma creato dinamicamente in JS

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. In questo caso, solo per il bonus #2, vi consiglio di applicare lo stile alla fine.