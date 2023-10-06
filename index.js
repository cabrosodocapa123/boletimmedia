btn.addEventListener("click", function(){

    var nota1 = parseInt (av1.value);
    var nota2 = parseInt (rec1.value); 
    var nota3 = parseInt (av2.value);
    var nota4 = parseInt (rec2.value);
    var nota5 = parseInt (av3.value);
    var nota6 = parseInt (rec3.value);
    var media1 = 0;
    var media2 = 0;
    var media3 = 0;
    var mediaFinal = 0;

    if(nota1>nota2){
        media1 = nota1;
    }if(nota1<nota2){
        media1 = nota2;
    }

    if(nota3>nota4){
        media2 = nota3;
    }if(nota3<nota4){
        media2 = nota4;
    }

    if(nota5>nota6){
        media3 = nota5;
    }if(nota5<nota6){
        media3 = nota6;
    }

    var soma = (media1 + media2 + media3);
    mediaFinal = (soma/3);          

    result.innerHTML ="A sua média é: " + mediaFinal;

    alert(mediaFinal);

});