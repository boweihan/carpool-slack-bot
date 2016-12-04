var slackTerminal 	= require('slack-terminalize'),
  	commands 		= slackTerminal.getCommands(),
  	util			= require('../util');

var _addDebt = function (args) {
    if (!people.includes(args[2])) {
        return args[2]+" is not in the carpool at the moment, but probably should be";
    }
    else if (isNaN(args[0])) {
        return "sorry, the value: " + args[0] + ", is not a valid number"; 
    }
    else {
        switch(args[2]) {
            case "mike":
                mike += 0;
                break;
            case "bowei":
                bowei += parseInt(args[0]);
                break;
            case "ishan":
                ishan += parseInt(args[0]);
                break;
        }
        var newData = mike+"\n"+bowei+"\n"+ishan;
        fs.writeFileSync('database.txt', newData, 'utf8');
        return " Bowei owes: $" + bowei + " to Mike,\n Ishan owes: $" + ishan + " to Mike."
    }
};


module.exports = function (param) {
  	var	channel	= param.channel;
    var response;
		response = _addDebt(param.args);
  	util.postMessage(channel, response);
};