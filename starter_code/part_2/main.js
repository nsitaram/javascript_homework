console.log('files are connected');

document.querySelector("#calculate").addEventListener("click", result)


function result(){
	var celcius = document.querySelector("#celciusTemp").value;
	var farenheight = (celcius * 1.8) + 32;
	document.querySelector("h1").innerHTML = "The temperature in farenheight is " + farenheight.toString() + " degrees.";
	if(farenheight > 60){
		document.querySelector("body").style.backgroundColor = "red";
	}
	else if(farenheight >= 30 && farenheight <= 60){
		document.querySelector("body").style.backgroundColor = "grey";
	}
	else if(farenheight < 30){
		document.querySelector("body").style.backgroundColor = "blue";
	}
}

