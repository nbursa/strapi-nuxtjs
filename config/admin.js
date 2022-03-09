module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2d2fa60773adf932fe198a1254ba4875'),
  },
});
