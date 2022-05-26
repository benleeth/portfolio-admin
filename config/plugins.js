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
  }
})
