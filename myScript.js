	var bg = document.getElementById("particles-js");

	var btA = document.getElementById('a');
	var btS = document.getElementById('s');
	var btD = document.getElementById('d');
	var btF = document.getElementById('f');
	var btG = document.getElementById('g');
	var btH = document.getElementById('h');
	var btJ = document.getElementById('j');
	var btK = document.getElementById('k');
	var btL = document.getElementById('l');

	document.addEventListener('keydown', function(event){
		// alert("Vous avez Taper au clavier");

		bg.style.backgroundColor = getRandomColor();
	});

	function getRandomColor(){
		var letters ="0123456789ABCDEF";
		var colors = "#";
		for(var i = 0; i < 6; i++){
			colors = colors + letters[Math.floor(Math.random() * letters.length)];
		}
		console.log(colors);
		return colors;
	}

     function playSound(e) {
     	 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
         const key = document.querySelector(`strong[data-key="${e.keyCode}"]`);

  if(!audio) return;

     audio.currentTime = 0;

         

        audio.play();
     }



  window.addEventListener('keydown', playSound);

	// bg.style.backgroundColor = "black";