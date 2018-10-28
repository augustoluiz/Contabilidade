let listabanner = 0;

carrossel();

function carrossel(){
	let banner = document.getElementsByClassName("imgBanner");
	for(let i = 0; i < banner.length; i++){
		banner[i].style.display="none";
	}
	
	if(listabanner >= banner.length){
		listabanner = 0;
	}
	banner[listabanner].style.display="block";
	setTimeout(carrossel, 4000);
	
	listabanner++;
}