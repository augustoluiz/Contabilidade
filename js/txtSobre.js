let btnSobre = document.getElementById("btnSobre");
let txtSobre = document.getElementById("sobreConteudo");
let btnSobre1 = document.getElementById("btnSobre1");

btnSobre1.style.display="none";
document.querySelector(".btnSobre").onclick = function(){
    if(txtSobre.style.display="none"){
        txtSobre.style.display="block";
        btnSobre.style.display="none";
        btnSobre1.style.display="block";
    }
    
}

document.querySelector(".btnSobre1").onclick = function(){

    if(txtSobre.style.display="block"){
        txtSobre.style.display="none";
        btnSobre.style.display="block";
        btnSobre1.style.display="none";
    }

}