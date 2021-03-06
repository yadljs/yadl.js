/**
 * The version of the library.
 */
module.exports.version = require('../../package.json').version;

/**
 * The status of the client. Statuses:
 * * READY: 0
 * * CONNECTING: 1
 * * RECONNECTING: 2
 * * DISCONNECTED: 3
 * @typedef {number} ClientStatus
 */
module.exports.Status = {
	READY: 0,
	CONNECTING: 1,
	RECONNECTING: 2,
	DISCONNECTED: 3
};

/**
 * The status of a voice connection. Statuses:
 * * CONNECTED: 0
 * * CONNECTING: 1
 * * AUTHENTICATING: 2
 * * RECONNECTING: 3
 * * DISCONNECTED: 4
 * @typedef {number} VoiceStatus
 */
module.exports.VoiceStatus = {
	CONNECTED: 0,
	CONNECTING: 1,
	AUTHENTICATING: 2,
	RECONNECTING: 3,
	DISCONNECTED: 4
};

/**
 * The type of a channel. Types:
 * * TEXT
 * * DM
 * * VOICE
 * * GROUP
 * * CATEGORY
 * @typedef {number} ChannelType
 */
module.exports.ChannelTypes = {
	TEXT: 0,
	DM: 1,
	VOICE: 2,
	GROUP: 3,
	CATEGORY: 4,
};

/**
 * An error encountered while performing an API request. Potential errors:
 * * UNKNOWN_ACCOUNT
 * * UNKNOWN_APPLICATION
 * * UNKNOWN_CHANNEL
 * * UNKNOWN_GUILD
 * * UNKNOWN_INTEGRATION
 * * UNKNOWN_INVITE
 * * UNKNOWN_MEMBER
 * * UNKNOWN_MESSAGE
 * * UNKNOWN_OVERWRITE
 * * UNKNOWN_PROVIDER
 * * UNKNOWN_ROLE
 * * UNKNOWN_TOKEN
 * * UNKNOWN_USER
 * * UNKNOWN_EMOJI
 * * BOT_PROHIBITED_ENDPOINT
 * * BOT_ONLY_ENDPOINT
 * * MAXIMUM_GUILDS
 * * MAXIMUM_FRIENDS
 * * MAXIMUM_PINS
 * * MAXIMUM_ROLES
 * * MAXIMUM_REACTIONS
 * * UNAUTHORIZED
 * * MISSING_ACCESS
 * * INVALID_ACCOUNT_TYPE
 * * CANNOT_EXECUTE_ON_DM
 * * EMBED_DISABLED
 * * CANNOT_EDIT_MESSAGE_BY_OTHER
 * * CANNOT_SEND_EMPTY_MESSAGE
 * * CANNOT_MESSAGE_USER
 * * CANNOT_SEND_MESSAGES_IN_VOICE_CHANNEL
 * * CHANNEL_VERIFICATION_LEVEL_TOO_HIGH
 * * OAUTH2_APPLICATION_BOT_ABSENT
 * * MAXIMUM_OAUTH2_APPLICATIONS
 * * INVALID_OAUTH_STATE
 * * MISSING_PERMISSIONS
 * * INVALID_AUTHENTICATION_TOKEN
 * * NOTE_TOO_LONG
 * * INVALID_BULK_DELETE_QUANTITY
 * * CANNOT_PIN_MESSAGE_IN_OTHER_CHANNEL
 * * CANNOT_EXECUTE_ON_SYSTEM_MESSAGE
 * * BULK_DELETE_MESSAGE_TOO_OLD
 * * INVITE_ACCEPTED_TO_GUILD_NOT_CONTANING_BOT
 * * REACTION_BLOCKED
 * @typedef {string} APIError
 */
module.exports.APIErrors = {
	UNKNOWN_ACCOUNT: 10001,
	UNKNOWN_APPLICATION: 10002,
	UNKNOWN_CHANNEL: 10003,
	UNKNOWN_GUILD: 10004,
	UNKNOWN_INTEGRATION: 10005,
	UNKNOWN_INVITE: 10006,
	UNKNOWN_MEMBER: 10007,
	UNKNOWN_MESSAGE: 10008,
	UNKNOWN_OVERWRITE: 10009,
	UNKNOWN_PROVIDER: 10010,
	UNKNOWN_ROLE: 10011,
	UNKNOWN_TOKEN: 10012,
	UNKNOWN_USER: 10013,
	UNKNOWN_EMOJI: 10014,
	BOT_PROHIBITED_ENDPOINT: 20001,
	BOT_ONLY_ENDPOINT: 20002,
	MAXIMUM_GUILDS: 30001,
	MAXIMUM_FRIENDS: 30002,
	MAXIMUM_PINS: 30003,
	MAXIMUM_ROLES: 30005,
	MAXIMUM_REACTIONS: 30010,
	UNAUTHORIZED: 40001,
	MISSING_ACCESS: 50001,
	INVALID_ACCOUNT_TYPE: 50002,
	CANNOT_EXECUTE_ON_DM: 50003,
	EMBED_DISABLED: 50004,
	CANNOT_EDIT_MESSAGE_BY_OTHER: 50005,
	CANNOT_SEND_EMPTY_MESSAGE: 50006,
	CANNOT_MESSAGE_USER: 50007,
	CANNOT_SEND_MESSAGES_IN_VOICE_CHANNEL: 50008,
	CHANNEL_VERIFICATION_LEVEL_TOO_HIGH: 50009,
	OAUTH2_APPLICATION_BOT_ABSENT: 50010,
	MAXIMUM_OAUTH2_APPLICATIONS: 50011,
	INVALID_OAUTH_STATE: 50012,
	MISSING_PERMISSIONS: 50013,
	INVALID_AUTHENTICATION_TOKEN: 50014,
	NOTE_TOO_LONG: 50015,
	INVALID_BULK_DELETE_QUANTITY: 50016,
	CANNOT_PIN_MESSAGE_IN_OTHER_CHANNEL: 50019,
	CANNOT_EXECUTE_ON_SYSTEM_MESSAGE: 50021,
	BULK_DELETE_MESSAGE_TOO_OLD: 50034,
	INVITE_ACCEPTED_TO_GUILD_NOT_CONTANING_BOT: 50036,
	REACTION_BLOCKED: 90001,
};

/**
 * Events that are fired. Events:
 * * RATE_LIMIT
 * * READY
 * * RESUMED
 * * GUILD_CREATE
 * * GUILD_DELETE
 * * GUILD_UPDATE
 * * GUILD_UNAVAILABLE
 * * GUILD_AVAILABLE
 * * GUILD_MEMBER_ADD
 * * GUILD_MEMBER_REMOVE
 * * GUILD_MEMBER_UPDATE
 * * GUILD_MEMBER_AVAILABLE
 * * GUILD_MEMBER_SPEAKING
 * * GUILD_MEMBERS_CHUNK
 * * GUILD_ROLE_CREATE
 * * GUILD_ROLE_DELETE
 * * GUILD_ROLE_UPDATE
 * * GUILD_EMOJI_CREATE
 * * GUILD_EMOJI_DELETE
 * * GUILD_EMOJI_UPDATE
 * * GUILD_BAN_ADD
 * * GUILD_BAN_REMOVE
 * * CHANNEL_CREATE
 * * CHANNEL_DELETE
 * * CHANNEL_UPDATE
 * * CHANNEL_PINS_UPDATE
 * * MESSAGE_CREATE
 * * MESSAGE_DELETE
 * * MESSAGE_UPDATE
 * * MESSAGE_BULK_DELETE
 * * MESSAGE_REACTION_ADD
 * * MESSAGE_REACTION_REMOVE
 * * MESSAGE_REACTION_REMOVE_ALL
 * * USER_UPDATE
 * * USER_NOTE_UPDATE
 * * USER_SETTINGS_UPDATE
 * * USER_GUILD_SETTINGS_UPDATE
 * * PRESENCE_UPDATE
 * * VOICE_STATE_UPDATE
 * * TYPING_START
 * * TYPING_STOP
 * * DISCONNECT
 * * RECONNECTING
 * * ERROR
 * * WARN
 * * DEBUG
 * @typedef {string} Event
 */
module.exports.Events = {
	RATE_LIMIT: 'rateLimit',
	READY: 'ready',
	RESUMED: 'resumed',
	GUILD_CREATE: 'guildCreate',
	GUILD_DELETE: 'guildDelete',
	GUILD_UPDATE: 'guildUpdate',
	GUILD_UNAVAILABLE: 'guildUnavailable',
	GUILD_AVAILABLE: 'guildAvailable',
	GUILD_MEMBER_ADD: 'guildMemberAdd',
	GUILD_MEMBER_REMOVE: 'guildMemberRemove',
	GUILD_MEMBER_UPDATE: 'guildMemberUpdate',
	GUILD_MEMBER_AVAILABLE: 'guildMemberAvailable',
	GUILD_MEMBER_SPEAKING: 'guildMemberSpeaking',
	GUILD_MEMBERS_CHUNK: 'guildMembersChunk',
	GUILD_ROLE_CREATE: 'roleCreate',
	GUILD_ROLE_DELETE: 'roleDelete',
	GUILD_ROLE_UPDATE: 'roleUpdate',
	GUILD_EMOJI_CREATE: 'emojiCreate',
	GUILD_EMOJI_DELETE: 'emojiDelete',
	GUILD_EMOJI_UPDATE: 'emojiUpdate',
	GUILD_BAN_ADD: 'guildBanAdd',
	GUILD_BAN_REMOVE: 'guildBanRemove',
	CHANNEL_CREATE: 'channelCreate',
	CHANNEL_DELETE: 'channelDelete',
	CHANNEL_UPDATE: 'channelUpdate',
	CHANNEL_PINS_UPDATE: 'channelPinsUpdate',
	MESSAGE_CREATE: 'message',
	MESSAGE_DELETE: 'messageDelete',
	MESSAGE_UPDATE: 'messageUpdate',
	MESSAGE_BULK_DELETE: 'messageDeleteBulk',
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
	MESSAGE_REACTION_REMOVE_ALL: 'messageReactionRemoveAll',
	USER_UPDATE: 'userUpdate',
	USER_NOTE_UPDATE: 'userNoteUpdate',
	USER_SETTINGS_UPDATE: 'clientUserSettingsUpdate',
	USER_GUILD_SETTINGS_UPDATE: 'clientUserGuildSettingsUpdate',
	PRESENCE_UPDATE: 'presenceUpdate',
	VOICE_STATE_UPDATE: 'voiceStateUpdate',
	TYPING_START: 'typingStart',
	TYPING_STOP: 'typingStop',
	DISCONNECT: 'disconnect',
	RECONNECTING: 'reconnecting',
	ERROR: 'error',
	WARN: 'warn',
	DEBUG: 'debug',
};



/**
 * The endpoints that the bot will use to access the API. Types:
 * * API
 * @typedef {string} Endpoint
 */
module.exports.Endpoints = {
	API: 'https://discordapp.com/api',
	CDN: 'https://cdn.discordapp.com/',
	get GATEWAY() {
		return this.API + '/gateway';
	}
};

/**
 * The activity type of a user's presence. Types:
 * * PLAYING
 * * STREAMING
 * * LISTENING
 * * WATCHING
 * @typedef {string} ActivityType                                                                                                                                                                                           
 */
module.exports.ActivityTypes = mirror([
	'PLAYING',
	'STREAMING',
	'LISTENING',
	'WATCHING',
]);

/**
 * The type of mention included in a message. Types:
 * * EVERYTHING
 * * HERE
 * * ROLE
 * * USER
 * * NONE
 * @typedef {string} MentionType
 */
module.exports.MessageMentionType = mirror([
	'EVERYONE',
	'HERE',
	'ROLE',
	'USER',
	'NONE'
]);

/**
 * The user agent for the library.
 */
module.exports.UserAgent = `DiscordBot (https://yadl.js.org, ${module.exports.Version}) YADL.JS Discord Library`;

function mirror(arr) {
	let tmp = {};
	for (let a of arr) tmp[a] = a;
	return tmp;
}