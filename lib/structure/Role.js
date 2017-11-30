/**
 * Represents a role on a Discord guild.
 * @property {Guild} guild The guild the role is on.
 * @property {string} name The name of the role.
 * @property {Snowflake} id The ID of the role.
 * @property {number} color The color of the role.
 * @property {Collection<Permission>} permissions The permissions on the role.
 */
class Role {
    constructor(options) {
        this.guild = options.guild;
        this.name = options.name;
        this.id = options.id;
        this.color = options.color;
        this.permissions = options.permissions;
    }
}

module.exports = Role;