window.onscroll = function(){
  let top = window.pageXOffset || document.documentElement.scrollTop;
    
  let btnTopo = document.getElementById("btnTopo"); 
  
  let face = document.getElementById("facebook");
  let link = document.getElementById("linkedin");
  
  let grupoBtn = document.getElementById("grupoBtn")

    
  let img = document.getElementsByClassName("imgTopo");
    
    
    if(top < 100){
        btnTopo.style.display="none";
        grupoBtn.style.bottom="15%";

    }

    else if(top >= 100 && top < 1000){  
        btnTopo.style.display="block";
        grupoBtn.style.bottom="25%";
        /*preto*/
        img[2].style.display="inline";
        /*branco*/
        img[3].style.display="none";  
    }
    
    else if(top >= 1000){
        btnTopo.style.display="block";
        grupoBtn.style.bottom="25%";
        /*preto*/
        img[2].style.display="none";
        /*branco*/
        img[3].style.display="inline";
    }

};

