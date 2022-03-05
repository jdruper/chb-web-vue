module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Comunidad Hierba Buena',
      description:
        'Comunidad Hierba Buena es una Asociación Sin Fines de Lucro, una Comunidad Intencional y una Eco Aldea en formación.',
    },
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://hierbabuenacr.org',
        changeOrigin: true
      },
    }
  }
};
