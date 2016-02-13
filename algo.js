$(document).ready(function() {



    setTimeout(function() {
        $(".contenedor").fadeOut(3000);
    },3000);

     setTimeout(function() {
        $(".contimg").fadeIn(6000);
    },6000);
setTimeout(function() {
        $(".contentmach").fadeIn(10000);
    },6000);
     
     setTimeout(function() {
        $(".gift").fadeIn(800);
    },48000);
     setTimeout(function() {
        $(".pregunta").fadeIn(800);
    },48000);

 setTimeout(function() {
        $("#confetti").fadeIn(6000);
    },3000);     
 setTimeout(function() {
        $(".go").fadeIn(2000);
    },800);     


     function maquina(contenedor,texto,intervalo){
   // Calculamos la longitud del texto
   longitud = texto.length;
   // Obtenemos referencia del div donde se va a alojar el texto.
   cnt = document.getElementById(contenedor);
   var i=0;
   // Creamos el timer
   timer = setInterval(function(){
      // Vamos añadiendo letra por letra y la _ al final.
      cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "_";
      // Si hemos llegado al final del texto..
      if(i >= longitud){
         // Salimos del Timer y quitamos la barra baja (_)
         clearInterval(timer);
         cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
         return true;
      } else {
         // En caso contrario.. seguimos
         i++;
      }},intervalo);
};

var texto = "¡Osiris!, la he pasado bien contigo estos dias, creo que eres una estupenda persona, ademas de bonita, amable, graciosa e inteligente, entre muchas otras cosas."+
"\n"+" Me gusta estar contigo, creo que tienes lo que todo hombre busca en una mujer, me siento bien contigo. Soy un poco raro para algunas cosas y tengo muchos defectos, hay muchas cosas que no soy, ser detallsita es una de ellas, pero quiero a mi manera . Me gustas, no te lo he preguntado antes,pero, te lo pregunto ahora...toma tu decicion de manera sabia.";
// 100 es el intervalo de minisegundos en el que se escribirá cada letra.

maquina("maquinas",texto,50);


});




