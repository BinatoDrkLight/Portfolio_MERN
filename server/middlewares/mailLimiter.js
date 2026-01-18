import rateLimit from 'express-rate-limit';

const mailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  handler: (req, res) => {
    return res.json({
      success: false,
      message: "Too many messages sent."
    });
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export default mailLimiter;
