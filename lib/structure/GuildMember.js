const Member = require('./Member');

/**
 * Represents a member of a guild.
 * @extends Member
 * @typedef {Member} GuildMember
 * @property {Guild} guild The guild that this GuildMember belongs to.
 */
class GuildMember extends Member {
    constructor(options) {
        super(options);
        this.guild = options.guild;
    }
}