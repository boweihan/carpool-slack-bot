var slackTerminal = require('slack-terminalize');
fs = require('fs');
mike = null;
bowei = null;
ishan = null;
people = ["mike", "bowei", "ishan"];

sync = function () {
	var file = fs.readFileSync('database.txt', 'utf8');
	var lines = file.split("\n");
	mike = parseInt(lines[0]); //NOTE: globals are bad
	bowei = parseInt(lines[1]);
	ishan = parseInt(lines[2]);
}

sync();

slackTerminal.init('xoxb-111739522368-AOBWeIry4KwHTbC8BLlNBxqJ', {
    // slack rtm client options here
    // more info at: https://github.com/slackhq/node-slack-client/blob/master/lib/clients/rtm/client.js
}, {
    // app configurations to suit your project structure
    // to see the list of all possible config,
    // check this out: https://github.com/ggauravr/slack-terminalize/blob/master/util/config.js
	CONFIG_DIR: __dirname + '/config',
	COMMAND_DIR: __dirname + '/commands'
});
