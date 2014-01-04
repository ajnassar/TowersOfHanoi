(function(root){
	var Hanoi = root.Hanoi = (root.Hanoi || {});

	var UI = Hanoi.UI = function(game, towers){
		this.game = game;
		this.towers = towers;
		this.storedEvents = [];
		this.constructEvents();
		this.drawDiscs();
	};

	UI.prototype.constructEvents = function() {
		var board = this;
			this.towers.on('click', function(event) {
				var id = parseInt($(event.currentTarget).data('val'));
				console.log(id);
				board.storedEvents.push(id);
				if (board.storedEvents.length === 2){
					board.game.takeTurn(board.storedEvents[0], board.storedEvents[1]);
					board.storedEvents = [];
				}
				board.drawDiscs();
				if (board.game.isWon()){
					board.towers.off("click");
					$('h1').text("Winner!")
				}
			});
	};

	UI.prototype.drawDiscs = function(){
		var board = this;

		for (var i = 0; i < this.game.towers.length; i++){
			$('#tower' + i).html("");

			for (var j = 0; j < board.game.towers[i].length; j++){
					$('#tower' + i).append("<div class='disc" + (board.game.towers[i][j]) + "'></div>");
					console.log((board.game.towers[i][j]) + ": " + (25*j));
					$('.disc' + (board.game.towers[i][j])).css("bottom", 25*j);
			}
		}


	};


})(this);