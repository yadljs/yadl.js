const Constants = require('../util/Constants');

/**
 * Represents a guild.
 * @property {number} id The ID of the guild.
 * @property {string} name The name of the guild.
 * @property {string} icon The icon of the guild.
 * @property {string} splash The splash of the guild.
 * @property {Snowflake} ownerID The owner of the guild's ID.
 * @property {string} region The region of the guild.
 * @property {Snowflake} afkChannelID The AFK channel ID of the guild.
 * @property {number} afkTimeout The AFK timeout of the guild in seconds.
 * @property {number} verificationLevel The level of verification required for the guild.
 * @property {number} defaultMessageNotifications The default message notification level of the guild.
 * @property {number} explicitContentFilter The default explicit content filter level of the guild.
 * @property {Collection<Role>} roles The roles in the guild.
 * @property {Collection<Emoji>} emojis The emojis in the guild.
 * @property {Collection<Feature>} features The enabled guild features.
 * @property {number} mfaLevel The required MFA level for the guild.
 * @property {number} joinedAt The time the bot joined the guild.
 * @property {boolean} large Whether this is considered a large guild.
 * @property {boolean} unavailable Whether the guild is unavailable.
 * @property {number} memberCount The number of members in the guild.
 * @property {Collection<Member>} members The members in the guild.
 * @property {Collection<Channel>} channels The channels in the guild.
 */
class Guild {
	constructor(options) {
		this.id = options.id;
		this.name = options.name;
		this.icon = options.icon;
		this.splash = options.splash;
		this.ownerID = options.ownerID;
		this.region = options.region;
		this.afkChannelID = options.afkChannelID;
		this.afkTimeout = options.afkTimeout;
		this.verificationLevel = options.verificationLevel;
		this.defaultMessageNotifications = options.defaultMessageNotifications;
		this.explicitContentFilter = options.explicitContentFilter;
		this.roles = options.roles;
		this.emojis = options.emojis;
		this.features = options.features;
		this.mfaLevel = options.mfaLevel;
		this.joinedAt = options.joinedAt;
		this.large = options.large;
		this.unavailable = options.unavailable;
		this.memberCount = options.memberCount;
		this.members = options.members;
		this.channels = options.channels;
	}

	/**
	 * Returns the icon URL for this guild.
	 * @returns {string} The icon URL.
	 */
	get iconURL() {
		if (this.icon) {
			return Constants.Endpoints.CDN + '/icons/' + this.id;
		} else {
			return null;
		}
	}

	/**
	 * Gets the owner of this guild.
	 * @returns {GuildMember} The owner of this guild.
	 */
	get owner() {
		return this.members[this.ownerID];
	}
}

module.exports = Guild;