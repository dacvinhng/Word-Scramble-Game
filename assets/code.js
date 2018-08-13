	var chosenWord;
	var shuffleWord;

	createGame()

	view = document.getElementById('view')
    var tmp =""
	document.onkeydown = function(e) {
		e = e || event 
		if(e.altKey || e.ctrlKey ||e.shiftKey) return false
		if (e.keyCode == 13) { 
			submit()
			return false
		}
		if(e.keyCode == 8){ 
			tmp = tmp.substring(0,tmp.length-1)
			
		}
		else if(e.keyCode >= 65 && e.keyCode <= 90){ 
			tmp+= String.fromCharCode(e.keyCode)
		}
        view.innerHTML = tmp
		return false
	}
	

	

	function createGame() {
		var firstWords = [
        "HAPPY", "ADVANTAGE", "THUNDERSTORM", "BOOKING", "PENCIL","SHOUTER","GURGLE",
        "LEATHER", "INPUT", "SUNNY", "FAMILY", "FOOTBALL", "WONDERFUL", "INTERESTING",
        "CHILDREN", "LOVELY", "CLOTHES", "MOUSE", "COMPUTER", "ORANGE"];

  		var chooseRandomWord = function(array) {
      	return array[Math.floor(Math.random() * array.length)];
  		}

  		chosenWord = chooseRandomWord(firstWords);
  		console.log(chosenWord)
 

 		 String.prototype.shuffle = function () {
   	 		var a = this.split(""),
        	n = a.length;

    		for(var i = n - 1; i > 0; i--) {
        	var j = Math.floor(Math.random() * (i + 1));
        	var tmp = a[i];
        	a[i] = a[j];
        	a[j] = tmp;
    		}
    		return a.join("");
		}

	 	shuffleWord = chosenWord.shuffle();
		$("#scbw").html(shuffleWord)
	}


	

	function submit() {
		if (tmp==chosenWord){
			var rightWord = "Your answer (" +chosenWord+ ") is correct. Play next word!"
			$("#mss").html(rightWord)
			createGame()
		}
		else {  
			var wrongWord = "Your answer is wrong. Try again!"
			$("#mss").html(wrongWord)
			return false
		}
	}

	$('#res').click(function() {

		var result = "The answer(s) of " + shuffleWord + "  is/are ( " + chosenWord + " ). Try next word!";
		$("#mss").html(result)
		createGame()
	 
	});