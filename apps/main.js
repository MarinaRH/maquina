window.addEventListener("load", function() {
	var boton = document.getElementById("cri");
	var contador = 1;
	boton.addEventListener("click", function() {
		if(contador == 1) {
			document.getElementById("color").value = "rosado";
			document.getElementById("pink").classList.add("border");
			document.getElementById("purple").classList.remove("border");
		}
		if(contador == 2) {
			document.getElementById("color").value = "verde";
			document.getElementById("green").classList.add("border");
			document.getElementById("pink").classList.remove("border");
		}
		if(contador == 3) {
			document.getElementById("color").value = "morado";
			document.getElementById("purple").classList.add("border");
			document.getElementById("green").classList.remove("border");
			contador = 0;
		}
		contador++;
	});
	
});

window.addEventListener("load", function() {
	var boton = document.getElementById("superCri");
	boton.addEventListener("click", function() {
		var color = document.getElementById("color").value;
		if(color == "rosado") {
			document.getElementById("pink").classList.add("border");
			document.getElementById("green").classList.remove("border");
			document.getElementById("purple").classList.remove("border");
		}
		if(color == "verde") {
			document.getElementById("green").classList.add("border");
			document.getElementById("pink").classList.remove("border");
			document.getElementById("purple").classList.remove("border");
		}
		if(color == "morado") {
			document.getElementById("purple").classList.add("border");
			document.getElementById("green").classList.remove("border");
			document.getElementById("pink").classList.remove("border");
		}
	});
	
});