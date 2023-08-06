const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://us21.api.mailchimp.com', // Replace with the base URL of the Mailchimp API
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/3.0', // Rewrite requests from /api to /3.0
      },
      onProxyRes: function (proxyRes, req, res) {
        const allowedOrigins = ['http://localhost:3000', 'https://redallianz.com']; // Replace with your frontend domains
        const requestOrigin = req.headers.origin;
        
        if (allowedOrigins.includes(requestOrigin)) {
          proxyRes.headers['Access-Control-Allow-Origin'] = requestOrigin;
        }
      },
    })
  );
};
