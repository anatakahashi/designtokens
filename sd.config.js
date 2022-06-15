module.exports = {
  source: ["new_tokens.json"],

  platforms: {

    //SCSS

    scss: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/rem",
        "color/css",
        "shadow/css",
      ],
      buildPath: "tokens/css/",
      files: [
        //Sizes
        {
          destination: "sizes.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.attributes.category === `size`;
          },
        },
        //Colors
        {
          destination: "_colors.scss",
          format: "scss/variables",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.attributes.category === `color`;
          },
        },
        //Spacings
        {
          destination: "_spacings.scss",
          format: "scss/variables",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.attributes.category === `spacing`;
          },
        },
      ],
    }
  }
}