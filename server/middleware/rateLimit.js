import rateLimit from "express-rate-limit";

export const rateLimiterUsingThirdParty = rateLimit({
    windowMs:  60 * 1000, // 1 minute in milliseconds
    max: 10,
    message: 'You have exceeded 10 requests in one minute limit! Please re-load in a minute.',
    standardHeaders: true,
    legacyHeaders: false,
});