'use strict';

module.exports = {
  paypal: {
      businessEmail: 'your-paypal-business-email',
      url: 'https://www.sandbox.paypal.com/cgi-bin/webscr',
      currency: 'USD'
  },
  secret: 'secret-session-key',
  name: 'name-of-session-cookie',
  db: {
      url: 'mongodb://localhost:27017/db',
      sessions: 'sessions'
  },
  locale: {
      lang: 'en-US',
      currency: 'USD'
  }
};
