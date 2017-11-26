const Constants = require('../util/Constants');

class Guild {
	constructor(options) {
		this.id = options.id;
		this.name = options.name;
		this.icon = options.icon;
		this.splash = options.splash;
		this.ownerID = options.ownerID;
		this.region = options.region;
		this.afkChannelID = options.afk_channel_id;
		this.afkTimeout = options.afk_timeout;
		this.verificationLevel = options.verification_level;
		this.defaultMessageNotifications = options.default_message_notifications;
		this.explicitContentFilter = options.explicit_content_filter;
		this.roles = options.roles;
		this.emojis = options.emojis;
		this.features = options.features;
		this.mfaLevel = options.mfa_level;
		this.joinedAt = options.joined_at;
		this.large = options.large;
		this.unavailable = options.unavailable;
		this.memberCount = options.member_count;
		this.members = options.members;
		this.channels = options.channels;
	}

	get iconURL() {
		if (this.icon) {
			return Constants.Endpoints.CDN + '/icons/' + this.id;
		} else {
			return null;
		}
	}

	get owner() {
		return this.members[this.ownerID];
	}
}

exports = Guild;