// Old configuration with 'onAfterSetupMiddleware' option
module.exports = {
    // ...
    devServer: {
      // ...
      onAfterSetupMiddleware: function () {
        // Custom code to execute after middleware setup
      },
    },
  };
  
  // Updated configuration with 'setupMiddleware' option
  module.exports = {
    // ...
    devServer: {
      // ...
      setupMiddleware: function (devServer) {
        // Custom code to execute after middleware setup
      },
    },
  };
  