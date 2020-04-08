// console.log("ciao");
// DESCRIZIONE:
// Milestone 1:
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse (quindi tutto statico);
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde (quindi solo quello NON aggiungiamo dinamicamente anche quello bianco di risposta)

 // var scriviMessaggio = prompt("scrivere un messaggio");
 $(document).ready(function() {

var window = $(".scrollodx");

var digita = $(".finestra #perscrivere");

var invia = $(".invia #genera");
var perfect = "ok";




//nascondiamo il tasto
    $(".invia").hide();
    // al click   mostriamo l'altro
    $("#perscrivere").click(function(){

        $(".invia").show();
        $(".micdx").hide()

        });
        //inviamo i messaggio nel div

        invia.click(
            function inviati(){
            var msg = digita.val();
            window.append('<div class="inviati"><span id="txtgreen"> ' + msg + '</span><span class="orario"> 14:24</span></div> ') ;


            // Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta,

            function rispostaFinale() {
                window.append('<div class="ricevuti"><span id="txtwhite">' + perfect + '</span> <span class="orario"> 14:25</span></div>' )

            }
            setTimeout(rispostaFinale, 1000);

            }
    );



 //facciamo modo per scrivere il nome da cercare

     var nomeRicercato = $(".primaricerca #ilprimo");
     var trova = $(".primaricerca #vai");
     var stampareSu = $(".scrollo");
      var trovato = nomeRicercato.val();


// facciamo il ciclo
$("#ilprimo").keypress(function() {

    var aggiungi = $("#ilprimo").val();

    $(".contatti").each(function() {

        var nomeElemento = "fabio";
        var nomeElemento1 = "michele";

        // var nomiLista =["Michele","fabio","Samuele","Alessandro b","Alessandro l","Claudia","Davide","Federico"];
        // console.log(nomiLista);

        if (aggiungi == nomeElemento) {
            console.log("ok");

            $(".contatti ").hide();
            // $(".contatti .elemento 2").show();

        } else if (aggiungi == nomeElemento1) {
            $(".contatti ").fadeOut();
            $(".contatti elemento1").fadeIn();
            // console.log("non e ok");
            console.log("ok");
    }else {
        console.log("non e' stato trovato");
    }

});
});

//
function myFunction() {
  var str = "Hello world, welcome to the universe.";
  var n = str.includes("world");
 $("#") = n;
}





// non questo
}
);
