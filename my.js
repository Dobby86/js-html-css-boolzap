console.log("ciao");
// DESCRIZIONE:
// Milestone 1:
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse (quindi tutto statico);
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde (quindi solo quello NON aggiungiamo dinamicamente anche quello bianco di risposta)

 // var scriviMessaggio = prompt("scrivere un messaggio");
 $(document).ready(function() {

var digita = $("#perscrivere");

var Generator = $("#genera");

var putDigita = digita.value;

var digitaPrimo = $("#txtgreen");

    digitaPrimo.innerHTML = putDigita;
    $("#genera").hide();
    // click
    $("#generator").click(function(){

        $("#genera").show();
        // $("#mic").hide()

        });










}
 );
