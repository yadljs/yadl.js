const User = require('./User');

/**
 * Represents a member of a guild.
 * @extends User
 * @typedef {Member} Member
 * @property {Guild} guild The guild that this Member belongs to.
 */
class Member extends User {
	constructor(options) {
		super(options);
		this.guild = options.guild;
	}
};

module.exports = Member;