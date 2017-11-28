/**
 * Represents a Discord member.
 * @typedef {class} Member 
 * @property {Snowflake} id The user ID of the member.
 * @property {string} username The username of the member.
 * @property {number} discriminator The discriminator of the member.
 */
class Member {
    constructor(options) {
        this.id = options.id;
        this.username = options.username;
        this.discriminator = options.discriminator;
    }
}

exports.Member = Member;