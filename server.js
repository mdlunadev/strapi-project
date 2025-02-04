const strapi = require("@strapi/strapi");
const path = require("path");

strapi({
  appDir: path.resolve(__dirname, "src"),
}).start();
