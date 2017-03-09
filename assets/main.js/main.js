
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

var sprint1 = document.getElementById('sprint1');
var sprint2 = document.getElementById('sprint2');
var sprint3 = document.getElementById('sprint3');
var enviar = document.getElementById('enviar');


sprint1.addEventListener('click', function(){
enviar1.innerHTML = "<h3>"+"Sprint1: Introducción a Javascript"+"</h3>"+
                    "<ol>"+
                        "<li>"+"Fundamentos de Programación"+"</li>"+
                        "<li>"+"Funciones"+"</li>"+
                        "<li>"+"Arreglos"+"</li>"+
                        "<li>"+"Objetos"+"</li>"+
                      "</ol>"
});

sprint2.addEventListener('click', function(){
datos.innerHTML = "<h3>"+"Sprint2: Introducción al desarrollo web y construcción de páginas web"+"</h3>"+
                    "<ol>"+
                        "<li>"+"Ciclo de vida del desarrollo web"+"</li>"+
                        "<li>"+"HTML y Javascript en el navegador"+"</li>"+
                        "<li>"+"Manejo de comandos básicos de git en la terminal"+"</li>"+
                        "<li>"+"Pruebas unitarias"+"</li>"+
                        "<li>"+"Git/Rosolución de conflictos/Branching model"+"</li>"+
                        "<li>"+"DOM"+"</li>"+
                    "</ol>"
                });

sprint3.addEventListener('click', function(){
datos.innerHTML = "<h3>"+"Sprint3"+"</h3>"+"</br>"+"</br>"+"No hay lecciones todavía"+
});
