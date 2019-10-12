module.exports = function(api) {
  api.cache.forever();
  return {
    "presets": [
      [
        "@babel/preset-env",
        {
          "modules": false,
          "targets": {
            "browsers": [
              ">1%",
              "last 4 versions",
              "Firefox ESR",
              "not ie < 11"
            ]
          }
        }
      ],
      "@babel/preset-react"
    ],
    "plugins": []
  }
}