// karma.conf.js
module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],
    reporters: ["dots"],
    client: {
      jasmine: {
        random: false,
      },
    },
    browsers: ["ChromeHeadless"],
    singleRun: !!process.env.CI,
    proxies: {
      "/spec/": "/base/",
    },
    files: [
      "../js/*.js",
      "**/*.spec.js",
      { pattern: "images/*.png", included: false, served: true },
    ],
  });
};
