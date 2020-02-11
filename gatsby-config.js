module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GraphCMS',
        fieldName: 'gcms',
        url:
          'https://api-uswest.graphcms.com/v1/cjsevk67403s101cktotf9fbh/master'
//          'http://cms.make3d.biz:1337'
      }
    },
//-----
{
  resolve: `gatsby-plugin-create-client-paths`,
  options: { prefixes: [`/app/*`] },
},
//-----
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://cms.make3d.biz:1337`,
          queryLimit: 1000, // Default to 100
          contentTypes: [`articles`, `blogs`],
          // Possibility to login with a strapi user, when content types are not publically available (optional).
          loginData: {
            identifier: "",
            password: "",
          },
        },
      },
  ]
};
