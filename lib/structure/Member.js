/**
 * Represents a Discord member.
 * @property {Snowflake} id The user ID of the member.
 * @property {string} username The username of the member.
 * @property {number} discriminator The user of the member.
 */
class Member {
	constructor(options) {
		this.id = options.id;
		this.username = options.username;
		this.discriminator = options.discriminator;
		this.tag = options.username + '#' + options.discriminator;
	}
}

module.exports = Member;