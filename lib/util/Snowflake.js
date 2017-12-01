const epoch = 1420070400000; // discord epoch (2015-01-01T00:00:00.000Z)
let increment = 0;

/**
 * A Discord Snowflake builder. Cannot be instantated.
 */
class SnowflakeUtil {
    constructor() {
        throw new Error(`Cannot instantiate ${this.constructor.name}.`);
    }

    /**
    * A Twitter snowflake, except the epoch is 2015-01-01T00:00:00.000Z
    * @typedef {string} Snowflake
    */

    /**
     * Generates a Discord snowflake.
     * @return {Snowflake} The generated snowflake.
     */
    static generate() {
        if (increment >= 4095) increment = 0;
        // eslint-disable-next-line max-len
        const binary = `${(Date.now() - epoch).toString(2).padStart(42, '0')}0000100000${(increment++).toString(2).padStart(12, '0')}`
        return this.binaryToID(binary);
    }

    /**
     * A deconstructed snowflake.
     * @typedef {Object} DeconstructedSnowflake
     * @property {number} timestamp Timestamp the snowflake was created
     * @property {Date} date Date the snowflake was created
     * @property {number} workerID Worker ID in the snowflake
     * @property {number} processID Process ID in the snowflake
     * @property {number} increment Increment in the snowflake
     * @property {string} binary Binary representation of the snowflake
     */

    /**
     * Deconstructs a Discord snowflake.
     * @param {Snowflake} snowflake Snowflake to deconstruct.
     * @returns {DeconstructedSnowflake} Deconstructed snowflake.
     */
    static deconstruct(snowflake) {
        const binary = Util.idToBinary(snowflake).toString(2).padStart(64, '0');
        const res = {
            timestamp: parseInt(binary.substring(0, 42), 2) + epoch,
            workerID: parseInt(binary.substring(42, 47), 2),
            processID: parseInt(binary.substring(47, 52), 2),
            increment: parseInt(binary.substring(52, 64), 2),
            binary: binary
        }
        Object.defineProperty(res, 'date', {
            get: () => { return new Date(this.timestamp) },
            enumerable: true
        });
        return res;
    }

    idToBinary(num) {
        let bin = '';
        let high = parseInt(num.slice(0, -10)) || 0;
        let low = parseInt(num.slice(-10));
        while (low > 0 || high > 0) {
            bin = String(low & 1) + bin;
            low = Math.floor(low / 2);
            if (high > 0) {
                low += 5000000000 * (high % 2);
                high = Math.floor(high / 2);
            }
        }
        return bin;
    }

    binaryToID(num) {
        let dec = '';
    
        while (num.length > 50) {
            const high = parseInt(num.slice(0, -32), 2);
            const low = parseInt((high % 10).toString(2) + num.slice(-32), 2);
    
            dec = (low % 10).toString() + dec;
            num = Math.floor(high / 10).toString(2) + Math.floor(low / 10).toString(2).padStart(32, '0');
        }
    
        num = parseInt(num, 2);
        while (num > 0) {
            dec = (num % 10).toString() + dec;
            num = Math.floor(num / 10);
        }
    
        return dec;
      }
}

exports = SnowflakeUtil;