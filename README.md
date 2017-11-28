<p>
    <center>
        <img src="https://gitlab.com/PassTheMayo/yadl.js/raw/master/yadl.js.png" alt="YADL.js logo">
    </center>
</p>

YADL.js - Yet Another Discord Library
=====================================

YADL.js is a Discord library. Yet another one.

The library is designed to be a mix of discord.js and Eris while still being its own unique library.

Documentation:
==============

## Classes

<dl>
<dt><a href="#SnowflakeUtil">SnowflakeUtil</a></dt>
<dd><p>A Discord Snowflake builder.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Client">Client</a> : <code>class</code></dt>
<dd><p>Represents the client.</p>
</dd>
<dt><a href="#Guild">Guild</a> : <code>class</code></dt>
<dd><p>Represents a guild.</p>
</dd>
<dt><a href="#clientstatus">clientstatus</a> : <code>number</code></dt>
<dd><p>The status of the client. Statuses:</p>
<ul>
<li>READY: 0</li>
<li>CONNECTING: 1</li>
<li>RECONNECTING: 2</li>
<li>DISCONNECTED: 3</li>
</ul>
</dd>
<dt><a href="#voicestatus">voicestatus</a> : <code>number</code></dt>
<dd><p>The status of a voice connection. Statuses:</p>
<ul>
<li>CONNECTED: 0</li>
<li>CONNECTING: 1</li>
<li>AUTHENTICATING: 2</li>
<li>RECONNECTING: 3</li>
<li>DISCONNECTED: 4</li>
</ul>
</dd>
<dt><a href="#channeltype">channeltype</a> : <code>number</code></dt>
<dd><p>The type of a channel. Types:</p>
<ul>
<li>TEXT</li>
<li>DM</li>
<li>VOICE</li>
<li>GROUP</li>
<li>CATEGORY</li>
</ul>
</dd>
<dt><a href="#apierror">apierror</a> : <code>string</code></dt>
<dd><p>An error encountered while performing an API request. Potential errors:</p>
<ul>
<li>UNKNOWN_ACCOUNT</li>
<li>UNKNOWN_APPLICATION</li>
<li>UNKNOWN_CHANNEL</li>
<li>UNKNOWN_GUILD</li>
<li>UNKNOWN_INTEGRATION</li>
<li>UNKNOWN_INVITE</li>
<li>UNKNOWN_MEMBER</li>
<li>UNKNOWN_MESSAGE</li>
<li>UNKNOWN_OVERWRITE</li>
<li>UNKNOWN_PROVIDER</li>
<li>UNKNOWN_ROLE</li>
<li>UNKNOWN_TOKEN</li>
<li>UNKNOWN_USER</li>
<li>UNKNOWN_EMOJI</li>
<li>BOT_PROHIBITED_ENDPOINT</li>
<li>BOT_ONLY_ENDPOINT</li>
<li>MAXIMUM_GUILDS</li>
<li>MAXIMUM_FRIENDS</li>
<li>MAXIMUM_PINS</li>
<li>MAXIMUM_ROLES</li>
<li>MAXIMUM_REACTIONS</li>
<li>UNAUTHORIZED</li>
<li>MISSING_ACCESS</li>
<li>INVALID_ACCOUNT_TYPE</li>
<li>CANNOT_EXECUTE_ON_DM</li>
<li>EMBED_DISABLED</li>
<li>CANNOT_EDIT_MESSAGE_BY_OTHER</li>
<li>CANNOT_SEND_EMPTY_MESSAGE</li>
<li>CANNOT_MESSAGE_USER</li>
<li>CANNOT_SEND_MESSAGES_IN_VOICE_CHANNEL</li>
<li>CHANNEL_VERIFICATION_LEVEL_TOO_HIGH</li>
<li>OAUTH2_APPLICATION_BOT_ABSENT</li>
<li>MAXIMUM_OAUTH2_APPLICATIONS</li>
<li>INVALID_OAUTH_STATE</li>
<li>MISSING_PERMISSIONS</li>
<li>INVALID_AUTHENTICATION_TOKEN</li>
<li>NOTE_TOO_LONG</li>
<li>INVALID_BULK_DELETE_QUANTITY</li>
<li>CANNOT_PIN_MESSAGE_IN_OTHER_CHANNEL</li>
<li>CANNOT_EXECUTE_ON_SYSTEM_MESSAGE</li>
<li>BULK_DELETE_MESSAGE_TOO_OLD</li>
<li>INVITE_ACCEPTED_TO_GUILD_NOT_CONTANING_BOT</li>
<li>REACTION_BLOCKED</li>
</ul>
</dd>
<dt><a href="#event">event</a> : <code>string</code></dt>
<dd><p>Events that are fired. Events:</p>
<ul>
<li>RATE_LIMIT</li>
<li>READY</li>
<li>RESUMED</li>
<li>GUILD_CREATE</li>
<li>GUILD_DELETE</li>
<li>GUILD_UPDATE</li>
<li>GUILD_UNAVAILABLE</li>
<li>GUILD_AVAILABLE</li>
<li>GUILD_MEMBER_ADD</li>
<li>GUILD_MEMBER_REMOVE</li>
<li>GUILD_MEMBER_UPDATE</li>
<li>GUILD_MEMBER_AVAILABLE</li>
<li>GUILD_MEMBER_SPEAKING</li>
<li>GUILD_MEMBERS_CHUNK</li>
<li>GUILD_ROLE_CREATE</li>
<li>GUILD_ROLE_DELETE</li>
<li>GUILD_ROLE_UPDATE</li>
<li>GUILD_EMOJI_CREATE</li>
<li>GUILD_EMOJI_DELETE</li>
<li>GUILD_EMOJI_UPDATE</li>
<li>GUILD_BAN_ADD</li>
<li>GUILD_BAN_REMOVE</li>
<li>CHANNEL_CREATE</li>
<li>CHANNEL_DELETE</li>
<li>CHANNEL_UPDATE</li>
<li>CHANNEL_PINS_UPDATE</li>
<li>MESSAGE_CREATE</li>
<li>MESSAGE_DELETE</li>
<li>MESSAGE_UPDATE</li>
<li>MESSAGE_BULK_DELETE</li>
<li>MESSAGE_REACTION_ADD</li>
<li>MESSAGE_REACTION_REMOVE</li>
<li>MESSAGE_REACTION_REMOVE_ALL</li>
<li>USER_UPDATE</li>
<li>USER_NOTE_UPDATE</li>
<li>USER_SETTINGS_UPDATE</li>
<li>USER_GUILD_SETTINGS_UPDATE</li>
<li>PRESENCE_UPDATE</li>
<li>VOICE_STATE_UPDATE</li>
<li>TYPING_START</li>
<li>TYPING_STOP</li>
<li>DISCONNECT</li>
<li>RECONNECTING</li>
<li>ERROR</li>
<li>WARN</li>
<li>DEBUG</li>
</ul>
</dd>
<dt><a href="#endpoint">endpoint</a> : <code>string</code></dt>
<dd><p>The endpoints that the bot will use to access the API. Types:</p>
<ul>
<li>API</li>
</ul>
</dd>
<dt><a href="#activitytype">activitytype</a> : <code>string</code></dt>
<dd><p>The activity type of a user&#39;s presence. Types:</p>
<ul>
<li>PLAYING</li>
<li>STREAMING</li>
<li>LISTENING</li>
<li>WATCHING</li>
</ul>
</dd>
<dt><a href="#mentiontype">mentiontype</a> : <code>string</code></dt>
<dd><p>The type of mention included in a message. Types:</p>
<ul>
<li>EVERYTHING</li>
<li>HERE</li>
<li>ROLE</li>
<li>USER</li>
<li>NONE</li>
</ul>
</dd>
<dt><a href="#Snowflake">Snowflake</a> : <code>string</code></dt>
<dd><p>A Twitter snowflake, except the epoch is 2015-01-01T00:00:00.000Z</p>
</dd>
<dt><a href="#DeconstructedSnowflake">DeconstructedSnowflake</a> : <code>Object</code></dt>
<dd><p>A deconstructed snowflake.</p>
</dd>
</dl>

<a name="SnowflakeUtil"></a>

## SnowflakeUtil
A Discord Snowflake builder.

**Kind**: global class  

* [SnowflakeUtil](#SnowflakeUtil)
    * [.generate()](#SnowflakeUtil.generate) ⇒ [<code>Snowflake</code>](#Snowflake)
    * [.deconstruct(snowflake)](#SnowflakeUtil.deconstruct) ⇒ [<code>DeconstructedSnowflake</code>](#DeconstructedSnowflake)

<a name="SnowflakeUtil.generate"></a>

### SnowflakeUtil.generate() ⇒ [<code>Snowflake</code>](#Snowflake)
Generates a Discord snowflake.

**Kind**: static method of [<code>SnowflakeUtil</code>](#SnowflakeUtil)  
**Returns**: [<code>Snowflake</code>](#Snowflake) - The generated snowflake.  
<a name="SnowflakeUtil.deconstruct"></a>

### SnowflakeUtil.deconstruct(snowflake) ⇒ [<code>DeconstructedSnowflake</code>](#DeconstructedSnowflake)
Deconstructs a Discord snowflake.

**Kind**: static method of [<code>SnowflakeUtil</code>](#SnowflakeUtil)  
**Returns**: [<code>DeconstructedSnowflake</code>](#DeconstructedSnowflake) - Deconstructed snowflake.  

| Param | Type | Description |
| --- | --- | --- |
| snowflake | [<code>Snowflake</code>](#Snowflake) | Snowflake to deconstruct. |

<a name="Client"></a>

## Client : <code>class</code>
Represents the client.

**Kind**: global typedef  
**Extends**: <code>EventEmitter</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The token to log in with. |
| object= |  | options The options to add to the bot. |

<a name="Client+login"></a>

### client.login()
Logs in to Discord.

**Kind**: instance method of [<code>Client</code>](#Client)  
<a name="Guild"></a>

## Guild : <code>class</code>
Represents a guild.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The ID of the guild. |
| name | <code>string</code> | The name of the guild. |
| icon | <code>string</code> | The icon of the guild. |
| splash | <code>string</code> | The splash of the guild. |
| ownerID | [<code>Snowflake</code>](#Snowflake) | The owner of the guild's ID. |
| region | <code>string</code> | The region of the guild. |
| afk_channel_id | [<code>Snowflake</code>](#Snowflake) | The AFK channel ID of the guild. |
| afk_timeout | <code>number</code> | The AFK timeout of the guild in seconds. |
| verification_level | <code>number</code> | The level of verification required for the guild. |
| default_message_notifications | <code>number</code> | The default message notification level of the guild. |
| explicit_content_filter | <code>number</code> | The default explicit content filter level of the guild. |
| roles | <code>Collection.&lt;Role&gt;</code> | The roles in the guild. |
| emojis | <code>Collection.&lt;Emoji&gt;</code> | The emojis in the guild. |
| features | <code>Collection.&lt;Feature&gt;</code> | The enabled guild features. |
| mfa_level | <code>number</code> | The required MFA level for the guild. |
| joined_at | <code>number</code> | The time the bot joined the guild. |
| large | <code>boolean</code> | Whether this is considered a large guild. |
| unavailable | <code>boolean</code> | Whether the guild is unavailable. |
| member_count | <code>number</code> | The number of members in the guild. |
| voice_states | <code>Collection.&lt;VoiceState&gt;</code> | The voice states in the guild. |
| members | <code>Collection.&lt;Member&gt;</code> | The members in the guild. |
| channels | <code>Collection.&lt;Channel&gt;</code> | The channels in the guild. |


* [Guild](#Guild) : <code>class</code>
    * [.iconURL](#Guild+iconURL) ⇒ <code>string</code>
    * [.owner](#Guild+owner) ⇒ <code>GuildMember</code>

<a name="Guild+iconURL"></a>

### guild.iconURL ⇒ <code>string</code>
Returns the icon URL for this guild.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: <code>string</code> - The icon URL.  
<a name="Guild+owner"></a>

### guild.owner ⇒ <code>GuildMember</code>
Gets the owner of this guild.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: <code>GuildMember</code> - The owner of this guild.  
<a name="clientstatus"></a>

## clientstatus : <code>number</code>
The status of the client. Statuses:* READY: 0* CONNECTING: 1* RECONNECTING: 2* DISCONNECTED: 3

**Kind**: global typedef  
<a name="voicestatus"></a>

## voicestatus : <code>number</code>
The status of a voice connection. Statuses:* CONNECTED: 0* CONNECTING: 1* AUTHENTICATING: 2* RECONNECTING: 3* DISCONNECTED: 4

**Kind**: global typedef  
<a name="channeltype"></a>

## channeltype : <code>number</code>
The type of a channel. Types:* TEXT* DM* VOICE* GROUP* CATEGORY

**Kind**: global typedef  
<a name="apierror"></a>

## apierror : <code>string</code>
An error encountered while performing an API request. Potential errors:* UNKNOWN_ACCOUNT* UNKNOWN_APPLICATION* UNKNOWN_CHANNEL* UNKNOWN_GUILD* UNKNOWN_INTEGRATION* UNKNOWN_INVITE* UNKNOWN_MEMBER* UNKNOWN_MESSAGE* UNKNOWN_OVERWRITE* UNKNOWN_PROVIDER* UNKNOWN_ROLE* UNKNOWN_TOKEN* UNKNOWN_USER* UNKNOWN_EMOJI* BOT_PROHIBITED_ENDPOINT* BOT_ONLY_ENDPOINT* MAXIMUM_GUILDS* MAXIMUM_FRIENDS* MAXIMUM_PINS* MAXIMUM_ROLES* MAXIMUM_REACTIONS* UNAUTHORIZED* MISSING_ACCESS* INVALID_ACCOUNT_TYPE* CANNOT_EXECUTE_ON_DM* EMBED_DISABLED* CANNOT_EDIT_MESSAGE_BY_OTHER* CANNOT_SEND_EMPTY_MESSAGE* CANNOT_MESSAGE_USER* CANNOT_SEND_MESSAGES_IN_VOICE_CHANNEL* CHANNEL_VERIFICATION_LEVEL_TOO_HIGH* OAUTH2_APPLICATION_BOT_ABSENT* MAXIMUM_OAUTH2_APPLICATIONS* INVALID_OAUTH_STATE* MISSING_PERMISSIONS* INVALID_AUTHENTICATION_TOKEN* NOTE_TOO_LONG* INVALID_BULK_DELETE_QUANTITY* CANNOT_PIN_MESSAGE_IN_OTHER_CHANNEL* CANNOT_EXECUTE_ON_SYSTEM_MESSAGE* BULK_DELETE_MESSAGE_TOO_OLD* INVITE_ACCEPTED_TO_GUILD_NOT_CONTANING_BOT* REACTION_BLOCKED

**Kind**: global typedef  
<a name="event"></a>

## event : <code>string</code>
Events that are fired. Events:* RATE_LIMIT* READY* RESUMED* GUILD_CREATE* GUILD_DELETE* GUILD_UPDATE* GUILD_UNAVAILABLE* GUILD_AVAILABLE* GUILD_MEMBER_ADD* GUILD_MEMBER_REMOVE* GUILD_MEMBER_UPDATE* GUILD_MEMBER_AVAILABLE* GUILD_MEMBER_SPEAKING* GUILD_MEMBERS_CHUNK* GUILD_ROLE_CREATE* GUILD_ROLE_DELETE* GUILD_ROLE_UPDATE* GUILD_EMOJI_CREATE* GUILD_EMOJI_DELETE* GUILD_EMOJI_UPDATE* GUILD_BAN_ADD* GUILD_BAN_REMOVE* CHANNEL_CREATE* CHANNEL_DELETE* CHANNEL_UPDATE* CHANNEL_PINS_UPDATE* MESSAGE_CREATE* MESSAGE_DELETE* MESSAGE_UPDATE* MESSAGE_BULK_DELETE* MESSAGE_REACTION_ADD* MESSAGE_REACTION_REMOVE* MESSAGE_REACTION_REMOVE_ALL* USER_UPDATE* USER_NOTE_UPDATE* USER_SETTINGS_UPDATE* USER_GUILD_SETTINGS_UPDATE* PRESENCE_UPDATE* VOICE_STATE_UPDATE* TYPING_START* TYPING_STOP* DISCONNECT* RECONNECTING* ERROR* WARN* DEBUG

**Kind**: global typedef  
<a name="endpoint"></a>

## endpoint : <code>string</code>
The endpoints that the bot will use to access the API. Types:* API

**Kind**: global typedef  
<a name="activitytype"></a>

## activitytype : <code>string</code>
The activity type of a user's presence. Types:* PLAYING* STREAMING* LISTENING* WATCHING

**Kind**: global typedef  
<a name="mentiontype"></a>

## mentiontype : <code>string</code>
The type of mention included in a message. Types:* EVERYTHING* HERE* ROLE* USER* NONE

**Kind**: global typedef  
<a name="Snowflake"></a>

## Snowflake : <code>string</code>
A Twitter snowflake, except the epoch is 2015-01-01T00:00:00.000Z

**Kind**: global typedef  
<a name="DeconstructedSnowflake"></a>

## DeconstructedSnowflake : <code>Object</code>
A deconstructed snowflake.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| timestamp | <code>number</code> | Timestamp the snowflake was created |
| date | <code>Date</code> | Date the snowflake was created |
| workerID | <code>number</code> | Worker ID in the snowflake |
| processID | <code>number</code> | Process ID in the snowflake |
| increment | <code>number</code> | Increment in the snowflake |
| binary | <code>string</code> | Binary representation of the snowflake |


* * *

YADL.js &copy; LewisTehMinerz and PassTheMayo 2017