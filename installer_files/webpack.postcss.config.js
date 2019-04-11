module.exports = ({ env }) => ({
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      browsers: [
        'last 2 versions', '> 5%'
      ]
    },
    cssnano: env === 'production' ? { preset: ['default', { 'discardComments': { 'removeAll': true } }] } : false
  }
})
