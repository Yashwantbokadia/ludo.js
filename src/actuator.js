function Actuator() {
  this.debug = false;

}

Actuator.prototype.log = function() {
  if(this.debug) console.log.apply(this, arguments);
};

Actuator.prototype.handlePlayerAdded = function(player) {
  this.log("Player Joined", player);
};

Actuator.prototype.handleNotEnoughReadyPlayers = function() {
  this.log("Not all players are ready to start the game");
};

Actuator.prototype.handleGameStart = function() {
  this.log("Game Started");
};

Actuator.prototype.handlePlayerTurn = function(player, callback) {
  this.log("handlePlayerTurn requires implementation");
};

module.exports = Actuator;