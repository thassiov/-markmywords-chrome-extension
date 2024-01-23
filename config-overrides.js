const multipleEntry = require("react-app-rewire-multiple-entry")([
  {
    entry: "src/pages/popup/index.tsx",
    template: "public/popup.html",
    outPath: "/popup.html",
  },
  {
    entry: "src/pages/options/index.tsx",
    template: "public/options.html",
    outPath: "/options.html",
  },
]);

module.exports = {
  webpack: function (config, env) {
    multipleEntry.addMultiEntry(config);
    return config;
  },
};
