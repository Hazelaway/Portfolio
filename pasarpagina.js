/* código para ir agregando imágenes al fondo con cada click */
// Definimos las imágenes para cada página
var imagenes = ['cloud1.png', 'cloud2.png', 'cloud3.png', 'cloud4.png', 'cloud5.png', 'cloud6.png', 'cloud7.png', 'cloud8.png', 'cloud9.png'];

// Obtenemos todas las páginas del libro
var pages = document.querySelectorAll('.book');

// Asignamos un evento de clic a cada página
var currentClick = 0; // Añadimos un contador para los clics

pages.forEach(function(page) {
    page.addEventListener('click', function() {
        currentClick++; // Incrementamos el contador de clics en cada clic

        // Determina qué imagen mostrar basado en el contador de clics
		if (currentClick === 1) {
			var imageEl1 = document.querySelector('#image1');
			var imageEl6 = document.querySelector('#image6');
			var imageEl7 = document.querySelector('#image7');
			if (imageEl1 && imageEl6 && imageEl7) {
				imageEl1.style.backgroundImage = 'url("../img/' + imagenes[0] + '")';
				imageEl1.style.display = 'block';
				imageEl6.style.backgroundImage = 'url("../img/' + imagenes[5] + '")';
				imageEl6.style.display = 'block';
				imageEl7.style.backgroundImage = 'url("../img/' + imagenes[6] + '")';
				imageEl7.style.display = 'block';
			}
        } else if (currentClick === 2) {
            // Mostrar la segunda y tercera imagen en el segundo clic
            var imageEl2 = document.querySelector('#image2');
            var imageEl3 = document.querySelector('#image3');
            if (imageEl2 && imageEl3) {
                imageEl2.style.backgroundImage = 'url("../img/' + imagenes[1] + '")';
                imageEl2.style.display = 'block';
                imageEl3.style.backgroundImage = 'url("../img/' + imagenes[2] + '")';
                imageEl3.style.display = 'block';
            }
		} else if (currentClick === 3) {
            // Mostrar la cuarta y la quinta imagen en el tercer clic
            var imageEl2 = document.querySelector('#image4');
            var imageEl3 = document.querySelector('#image5');
            if (imageEl2 && imageEl3) {
                imageEl2.style.backgroundImage = 'url("../img/' + imagenes[3] + '")';
                imageEl2.style.display = 'block';
                imageEl3.style.backgroundImage = 'url("../img/' + imagenes[4] + '")';
                imageEl3.style.display = 'block';
            }
		} else if (currentClick === 4) {
            // Mostrar las ultimas imágenes
            var imageEl2 = document.querySelector('#image8');
            var imageEl3 = document.querySelector('#image9');
            if (imageEl2 && imageEl3) {
                imageEl2.style.backgroundImage = 'url("../img/' + imagenes[7] + '")';
                imageEl2.style.display = 'block';
                imageEl3.style.backgroundImage = 'url("../img/' + imagenes[8] + '")';
                imageEl3.style.display = 'block';
            }
        } // Considera agregar más casos si hay más clics e imágenes
    });
});




/* código para pasar de página con sus efectos, etc */
var front = document.querySelector('.face-front');
var back = document.querySelector('.face-back');
var flip = document.querySelector('.book-content');
var uno = document.querySelectorAll('.book');
var portada = document.querySelectorAll('#portada');

var contZindex = 2;
var customZindex = 1;

for (var i = 0; i < uno.length; i++) {
	uno[i].style.zIndex = customZindex;
	customZindex--;

	uno[i].addEventListener('click', function(e){

		var tgt = e.target;
		var unoThis = this;

		unoThis.style.zIndex = contZindex;
		contZindex++;

		if (tgt.getAttribute('class') == 'face-front') {
			unoThis.style.zIndex = contZindex;
			contZindex +=20;
			setTimeout(function(){
				unoThis.style.transform = 'rotateY(-180deg)';
			}, 500);
		}
		if (tgt.getAttribute("class") == 'face-back') {
			unoThis.style.zIndex = contZindex;
			contZindex +=20;

			setTimeout(function(){
				unoThis.style.transform = 'rotateY(0deg)';
			}, 500);
		}

		if (tgt.getAttribute('id') == 'portada') {
			flip.classList.remove("trnsf-reset");
			flip.classList.add("trnsf");
		}
		if (tgt.getAttribute('id') == 'trsf') {
			flip.classList.remove("trnsf");
			flip.classList.add("trnsf-reset");
		}

	});
}

// CÓDIGO PARA PASAR PÁGINAS AUTOMÁTICAMENTE AL PULSAR CONTACT ME


// Añadir evento de clic al botón "Contact Me"
document.querySelector('.contact-me').addEventListener('click', function() {
    // Simular clic en la primera página para pasar a la segunda
    uno[0].querySelector('.face-front').click();

    // Esperar un breve momento y luego simular clic en la segunda página para pasar a la tercera
    setTimeout(function() {
        uno[1].querySelector('.face-front').click();
    }, 200); // Reduce el tiempo de espera a 600 milisegundos

    // Esperar un breve momento más y luego simular clic en la tercera página para pasar a la cuarta
    setTimeout(function() {
        uno[2].querySelector('.face-front').click();
    }, 500); // Reduce el tiempo de espera a 1200 milisegundos
});



























