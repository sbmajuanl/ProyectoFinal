	var coders = [ { nombre : "Meche", apellido : "Zubieta",  promocion : "1era. promoción", estado : "Trabajando" },
			 { nombre : "Arabela", apellido : "Rojas", promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Maria", apellido : "Rosán",  promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Guadalupe", apellido : "Racio",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Sara", apellido : "Casa",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Daniella", apellido : "Durán",  promocion : "4ta. promoción", estado : "Trabajando" },
			 { nombre : "Michelle", apellido : "Seguil",  promocion : "5ta. promoción", estado : "Trabajando" },
			 { nombre : "Diana", apellido : "Navarro",  promocion : "5ta. promoción", estado : "Trabajando" } ];

	var resultado="<ul>"
	coders.forEach(function(c){
		resultado+="<div class = 'div-coder'>"+
					 "<li> Nombre: "+c.nombre+"</li>"+
				   "<li>Apellido: "+c.apellido+"</li>"+
				   "<li>Promoción: "+c.promocion+"</li>"+
				   "<li>Estado: "+c.estado+"</li></div>";
	});
	resultado+="</ul>"
	document.write(resultado);
