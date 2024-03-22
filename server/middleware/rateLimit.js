import rateLimit from "express-rate-limit";

export const rateLimiterUsingThirdParty = rateLimit({
    windowMs:  60 * 1000, // 1 minute in milliseconds
    max: 5,
    message: 'You have exceeded 5 requests in one minute limit!',
    standardHeaders: true,
    legacyHeaders: false,
});