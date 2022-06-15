const StyleDictionary = require('style-dictionary').extend('sd.config.js');
const Color = require('tinycolor2');

StyleDictionary.registerTransform({
  name: 'color/css',
  type: 'value',
  matcher: function(prop) {
    return prop.attributes.category === 'color';
  },
  transformer: function(prop) {
      var color = Color(prop.value);
      if (color.getAlpha() === 1) {
        return color.toHexString();
      } else {
        return color.toRgbString();
      }
  }
});

StyleDictionary.registerTransform({
    name: 'size/em',
    type: 'value',
    matcher: function(prop) {
      // You can be more specific here if you only want 'em' units for font sizes    
      return prop.attributes.category === 'size';
    },
    transformer: function(prop) {
      // You can also modify the value here if you want to convert pixels to ems
      return parseFloat(prop.original.value) + 'em';
    }
});


StyleDictionary.registerTransform({
  name: 'shadow/css',
  type: 'value',
  matcher: function(token) {
    return token.type === 'boxShadow';
  },
  transformer: (token) => {
    const shadows = Object.values(token.value);
    const result = shadows.map(shadow => `${shadow.x} ${shadow.y} ${shadow.blur} ${shadow.spread} ${shadow.color}`);
    return result.join(',');

  }
});




StyleDictionary.buildAllPlatforms();