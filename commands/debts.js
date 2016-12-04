var slackTerminal 	= require('slack-terminalize'),
  	commands 		= slackTerminal.getCommands(),
  	util			= require('../util');

    var _listDebt = function () {
        return " Bowei owes: $" + bowei + " to Mike,\n Ishan owes: $" + ishan + " to Mike."
    };

module.exports = function (param) {
  	var	channel	= param.channel;
    var response;
		response = _listDebt();
  	util.postMessage(channel, response);
};