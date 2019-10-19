// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Oreoluwa Ojo',
  plugins: [
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'Oreoluwa',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        shortName: 'Oreoluwa',
        themeColor: '#0D2538',
        backgroundColor: '#0D2538',
        icon: 'src/favicon.png'
      }
    }
  ]
}
