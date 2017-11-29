/**
 * Represents a Discord member.
 * @typedef {class} User 
 * @property {Snowflake} id The user ID of the user.
 * @property {string} username The username of the member.
 * @property {number} discriminator The user of the user.
 */
class User {
	constructor(options) {
		this.id = options.id;
		this.username = options.username;
		this.discriminator = options.discriminator;
		this.tag = options.username + '#' + options.discriminator;
	}
}

module.exports = User;