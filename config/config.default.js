'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1546835246049_3308';

  // add your config here
  config.middleware = [];


  exports.view = {
    mapping: {
      '.html': 'ejs',
      '.nj': 'nunjucks',
    },
  };
  return config;
};
