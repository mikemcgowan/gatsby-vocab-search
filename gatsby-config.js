module.exports = {
  pathPrefix: '/gatsby-vocab-search',
  plugins: [
    {
      resolve: 'gatsby-plugin-source-csv',
      options: {
        url: 'https://raw.githubusercontent.com/mikemcgowan/memrise-scraper-scala/master/memrise_database.csv',
      },
    },
  ],
}
