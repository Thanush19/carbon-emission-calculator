const path = require('path');

module.exports = {
  webpack: {
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
      },
    },
  },
};
