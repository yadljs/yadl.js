const Snowflake = require('./lib/util/Snowflake.js');

console.log(new Snowflake({id: "9999999999999999999999999"}).id);