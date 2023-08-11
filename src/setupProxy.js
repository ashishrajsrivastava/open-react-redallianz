const { createProxyMiddleware } = require('http-proxy-middleware');
const apiKey = process.env.REACT_APP_MAILCHIMP_API_KEY; // use this for production
const listId = process.env.REACT_APP_MAILCHIMP_LIST_ID; // use this for production

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://us21.api.mailchimp.com', // Base URL of the Mailchimp API
      changeOrigin: true,
      pathRewrite: {
        '^/api': `/3.0/lists/${listId}/members`, // Rewrite requests from /api to the specific Mailchimp API endpoint
      },
      onProxyReq: function (proxyReq, req, res) {
        proxyReq.setHeader('Authorization', `Basic ${Buffer.from(`anystring:${apiKey}`).toString('base64')}`);
      },
      onProxyRes: function (proxyRes, req, res) {
        const allowedOrigins = ['http://localhost:3000', 'https://redallianz.com', 'https://ra-web-t.azurewebsites.net/']; // Replace with your frontend domains
        const requestOrigin = req.headers.origin;

        if (allowedOrigins.includes(requestOrigin)) {
          proxyRes.headers['Access-Control-Allow-Origin'] = requestOrigin;
        }
      },
    })
  );
};
