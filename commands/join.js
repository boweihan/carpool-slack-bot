var slackTerminal 	= require('slack-terminalize'),
  	commands 		= slackTerminal.getCommands(),
  	util			= require('../util');

var _addTrip = function (name) {
    if (!people.includes(name)) {
        return name+" is not in the carpool at the moment, but probably should be";
    }
    else {
        switch(name) {
            case "mike":
                mike += 0;
                break;
            case "bowei":
                bowei += 3.30;
                break;
            case "ishan":
                ishan += 3.30;
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
		response = _addTrip(param.args[0]);
  	util.postMessage(channel, response);
};