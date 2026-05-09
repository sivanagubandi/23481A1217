const logger = (req, res, next) => {
    const log = {
        method: req.method,
        url: req.url,
        time: new Date().toISOString()
    };

    console.log(log);

    next();
};

module.exports = logger;
