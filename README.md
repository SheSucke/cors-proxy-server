# cors-proxy-server
A proxy server to add CORS header Access-Control-Allow-Origin to http response

### Usage

In src/utils.ts change your target api url, that is a url that your request will be forwarded, and source url, that is a source of request.

To compile and run the TypeScript code, you need to have the TypeScript compiler (tsc) and Node.js (node) installed globally or in your project. If it's not installed, you can install it using npm:
```npm install -g typescript node```

Please make sure to use this responsibly, as it allows requests from all origins. You should adjust the originWhitelist and other options according to your needs.