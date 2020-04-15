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

   // test frop
   $(".dropdown-content").hide();
   // al click   mostriamo l'altro
   $("#perscrivere").click(function(){

       $(".invia").show();
       $(".micdx").hide()

       });
       //inviamo i messaggio nel div
       invia.click(
           function inviati() {
           var msg = digita.val();
           // handlebars space
           var source = $("#msgIn-template").html();
           var template = Handlebars.compile(source);
           //
           var contextIn = {"msgPh" : msg};
           var html = template(contextIn);
            window.append(html);

           // window.append('<div class="inviati"><span id="txtgreen"> ' + msg + '</span><span class="orario"> 14:24</span></div> ') ;


           // Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta,

           function rispostaFinale() {
               // handlebars space
               var perfect = "ok";
               var source = $("#msgRi-template").html();
               var template = Handlebars.compile(source);
               //
               var contextRi = {"okPh" : "ok perfect"};
               var html = template(contextRi);
                window.append(html);

               // window.append('<div class="ricevuti"><span id="txtwhite">' + perfect + '</span> <span class="orario"> 14:25</span></div>' )
           }
           setTimeout(rispostaFinale, 1000);

           }

   );
   // test-----------------------------------------

   $(".ricevuti i").click(
       function drop(){
           $(this).siblings(".dropdown-content").slideToggle();
           //
           // if  $(".inviati a").click() {
           // $(".inviati")hide();
           //
           // }

       }
   )
   $(".inviati i").click(
       function drop(){
           $(this).siblings(".dropdown-content").slideToggle();

       }
   )


// fine testtttttttttttttttttt-------------------------

-

//facciamo modo per scrivere il nome da cercare

    // var nomeRicercato = $(".primaricerca #ilprimo");
    // var trova = $(".primaricerca #vai");
    // var stampareSu = $(".scrollo");
    //  var trovato = nomeRicercato.val();

// facciamo il ciclo
$("#ilprimo").keypress(function() {

   var aggiungi = $("#ilprimo").val();

   $(".contatti").each(function() {

       var nomeElemento = $(this).find(".nomi").text().toLowerCase();
       // var nomiLista =["Michele","fabio","Samuele","Alessandro b","Alessandro l","Claudia","Davide","Federico"];
       // console.log(nomiLista);
       if (nomeElemento.includes(aggiungi)) {

           $(this).show();

           console.log("ok");

       } else  {

           $(this).hide();

           console.log("ok");
   }

});
});
// mostra conversazione
// contatti.click(
//    function () {
//        contatti.removeClass("active");
//        $(this).addClass("active");
//        var dataAttr = $(this).data("conversazione");
//        window.removeClass("active");
//        $('.right-messages [data-conversazione =" ' + dataAttr + ' " ] ' ).addClass("active");
//
//    }
// )
// fine parte ricerca e attivazione input


// non questo
}
);
