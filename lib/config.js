'use strict';

module.exports = {
  paypal: {
      businessEmail: '',
      url: 'https://www.sandbox.paypal.com/cgi-bin/webscr',
      currency: 'USD'
  },
  secret: '',
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