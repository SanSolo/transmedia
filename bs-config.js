var proxy = require('http-proxy-middleware');
var fallbackMiddleware = require('connect-history-api-fallback');

var apiProxy = proxy('/mailchimp', {
    target: 'https://us15.api.mailchimp.com/3.0/lists/eb7b58de02/members',
    changeOrigin: true,  // for vhosted sites
    pathRewrite: {"^/mailchimp": ""}
});

module.exports = {
    server: {
        port: "3015",
        baseDir: "src",
        routes: {
          "/node_modules": "node_modules"
        },
        middleware: {
            0: null,
            1: fallbackMiddleware({
              index: '/index.html', verbose: true
            }),
            2: apiProxy
        }
    }
};
