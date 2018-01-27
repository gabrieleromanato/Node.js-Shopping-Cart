'use strict';

module.exports = {
  paypal: {
      businessEmail: 'dev@gabrieleromanato.com',
      url: 'https://www.sandbox.paypal.com/cgi-bin/webscr',
      currency: 'USD'
  },
  secret: 'HkvRV5bZE0kZRh2YqwKawete',
  name: 'nodeStore',
  db: {
      url: 'mongodb://localhost:27017/amazon',
      sessions: 'sessions'
  },
  locale: {
      lang: 'en-US',
      currency: 'USD'
  }
};