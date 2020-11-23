const config = {
    port : process.env.PORT,
    SALT : process.env.SALT,
    apiWeatherKey: process.env.API_WEATHER_KEY,
    jwtKey: process.env.JWT_KEY,
    jwtExp: Math.floor(Date.now() / 1000) + (60 * 60),
    dbConnectionString: process.env.DB_CONNECTION_STRING,
    twitter: {
        consumerKey: process.env.CONSUMER_KEY,
        consumerSecret: process.env.CONSUMER_SECRET,
        accessTokenKey: process.env.ACCESS_TOKEN_KEY,
        accessTokenSecret: process.env.ACCESS_TOKEN_SECRET
    }
};

module.exports = config;