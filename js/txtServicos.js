let txtServico1 = document.getElementById("Servico1");
let txtServico2 = document.getElementById("Servico2");
let txtServico3 = document.getElementById("Servico3");

document.querySelector(".btnS1").onclick = function(){
    txtServico1.style.display="flex";
};

document.querySelector(".fecharS1").onclick = function(){
    txtServico1.style.display="none";
};

/**/

document.querySelector(".btnS2").onclick = function(){
    txtServico2.style.display="flex";
};

document.querySelector(".fecharS2").onclick = function(){
    txtServico2.style.display="none";
};

/**/

document.querySelector(".btnS3").onclick = function(){
    txtServico3.style.display="flex";
};

document.querySelector(".fecharS3").onclick = function(){
    txtServico3.style.display="none";
};