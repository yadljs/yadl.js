/**
 * A Discord snowflake.
 * @property {string} id The ID to store in the snowflake.
 */
class Snowflake {
    constructor(options) {
        this.id = options.id;
    }
}

module.exports = Snowflake;