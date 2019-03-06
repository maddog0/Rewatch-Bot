/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// Set up Schedule object
var schedule = require('node-schedule');
var EpisodeCount = 7;

//set up embed
const embed = {
    "title": "Made in Abyss",
    "description": "Within the depths of the Abyss, a girl named Riko stumbles upon a robot who looks like a young boy. Riko and her new friend descend into uncharted territory to unlock its mysteries, but what lies in wait for them in the darkness?",
    "url": "https://www.amazon.com/City-Great-Pit/dp/B073S2MKR2/ref=sr_1_1?ie=UTF8&qid=1538522244&sr=8-1&keywords=made+in+abyss",
    "color": 1512687,
    "thumbnail": {
        "url": "https://images-na.ssl-images-amazon.com/images/I/911d5AdE4pL._RI_SX200_.jpg"
    },
    "image": {
        "url": "https://images-na.ssl-images-amazon.com/images/I/911d5AdE4pL._RI_SX200_.jpg"
    }
};

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
	/*
	if (readyCount != 0){
		return;
	}
	*/
  console.log('I am ready!');
});

client.on('error', console.error);

/*
// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('Pong');    
  }  
});
*/

/*
client.on('ready', () => {
	if(readyCount == 0){
		console.log('this is the first ready');
		readyCount++;
		return;
	}
	channel = client.channels.get('504669520611508226');
	console.log('this is a later ready');
	channel.send(readyCount);
	readyCount++;
});
*/
var j = schedule.scheduleJob('0 0 15 * * 2', function(){
    channel = client.channels.get('496809122579218443');
    channel.send("Made in Abyss Episode " + EpisodeCount + " discussion", { embed});
	EpisodeCount++;
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NTA0NjY4MjIyMDU0NzI3Njkz.DrIiZA.VZXUDuu7KViDbW7o3h2a3HxGdFU');