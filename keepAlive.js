// One cron job to rule them all!!
const axios = require('axios'); // Time for you all to get familiar with axios!!
// Make sure to: npm install axios or add it to your package.json!

// URLs for all of your AA Projects
const reactSoloURL = 'https://miket-auth-me.onrender.com/';
const groupFlaskURL = 'https://spork-group-project.onrender.com/';
const capstoneURL = 'https://edmbrite.onrender.com/';


// Note that we are not using a timer anywhere in this code. Render lets us schedule this to run
// every X minutes. The default is 5 minutes. I run this every 15, however, you can adjust that to your liking.
// Note that 'awaiting' these fetches shouldn't be necessary. Feel free to remove that part of the code.

const keepAlive = async () => {
	let res;

	// We want to wrap our fetches in a try/catch block because, let's be honest...
	// Render has some issues! When it's down, you don't want it to stop execution of this program!!
	try {
		res = await axios.get(reactSoloURL);
	} catch (err) {
		console.log(err);
	}

	try {
		res = await axios.get(groupFlaskURL);
	} catch (err) {
		console.log(err);
	}

	try {
		res = await axios.get(capstoneURL);
	} catch (err) {
		console.log(err);
	}
}

keepAlive();
