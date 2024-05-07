/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["UI"]);
module.exports = {
  transpilePackages: ["@repo/ui"],
};
