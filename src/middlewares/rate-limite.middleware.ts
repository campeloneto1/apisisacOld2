import { rateLimit } from 'express-rate-limit'

const globalLimiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 10 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
});

const authLimiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 minute
	limit: 5, // Limit each IP to 5 requests per `window` (here, per 10 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

export default {
    globalLimiter, 
    authLimiter
};