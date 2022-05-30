module.exports = ({ env }) => ({
  ezforms:{
    config:{
      captchaProvider: {
        name: 'none',
      },
      notificationProviders: [
        {
          name: 'email',
          enabled: true,
          config: {
            from: 'me@benleeth.com'
          }
        }
      ]
    }
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        blogPost: {
          field: 'slug',
          references: 'title'
        },
        portfolioItem: {
          field: 'slug',
          references: 'title'
        }
      }
    }
  },
  upload: {
    config: {
      breakpoints: {
        xlarge: 2000,
        large: 1200,
        medium: 850,
        small: 500,
        xsmall: 50
      }
    }
  },
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY')
      },
      settings: {
        defaultFrom: 'me@benleeth.com',
        defaultReplyTo: 'me@benleeth.com',
        testAddress: 'bobquznie@gmail.com'
      }
    }
  }
})
