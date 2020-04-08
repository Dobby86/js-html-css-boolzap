console.log("ciao");
// DESCRIZIONE:
// Milestone 1:
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse (quindi tutto statico);
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde (quindi solo quello NON aggiungiamo dinamicamente anche quello bianco di risposta)

 // var scriviMessaggio = prompt("scrivere un messaggio");
 $(document).ready(function() {

var window = $(".scrollodx");

var digita = $(".finestra #perscrivere");

var invia = $(".invia #genera");


    $(".invia").hide();
    // click
    $("#perscrivere").click(function(){

        $(".invia").show();
        $(".micdx").hide()

        });

        invia.click(
            function (){
            var msg = digita.val();
            window.append('<div class="inviati"><span id="txtgreen"> ' + msg + '</span><span class="orario"> 14:24</span></div> ') ;

            }
        );



}
 );
