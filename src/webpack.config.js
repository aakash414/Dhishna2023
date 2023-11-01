const path = require('path');

module.exports = {

  module: {
    rules: [
      {
        test: /\.(glb|gltf)$/,
        use: {
            loader: 'raw-loader',
            options: {
              esModule: false,
            },
          },
      },
      // Add other loaders and rules as needed for your project
    ],
  },
};
