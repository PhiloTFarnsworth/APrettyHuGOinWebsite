module.exports = {
    ci: {
      collect: {
        url: ['http://localhost:1313/APrettyHuGoinWebsite/',
            'http://localhost:1313/APrettyHuGoinWebsite/diatribes/',
            'http://localhost:1313/APrettyHuGoinWebsite/diatribes/index/'],
      startServerCommand: 'hugo server --watch=false --quiet --minify',
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };