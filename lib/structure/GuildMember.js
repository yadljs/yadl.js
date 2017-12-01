const Member = require('./Member');

/**
 * Represents a member of a guild.
 * @extends Member
 * @property {Guild} guild The guild that this Member belongs to.
 */
class GuildMember extends Member {
	constructor(options) {
		super(options);
		this.guild = options.guild;
	}
};

module.exports = GuildMember;