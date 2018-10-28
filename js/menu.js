window.onscroll = function(){
    var top = window.pageYOffset || document.documentElement.scrollTop;
    
    var menu = document.getElementById("cabecalho");
    
    if(top >= 100){
        menu.style.boxShadow = "0px 2.5px 9px #888888";
    }
};