module.exports = {
    ci: {
      collect: {
        url: ['http://localhost:1313/APrettyHuGOinWebsite/',
            'http://localhost:1313/APrettyHuGOinWebsite/diatribes/',
            'http://localhost:1313/APrettyHuGOinWebsite/diatribes/index/'],
      startServerCommand: 'hugo server --watch=false --quiet --minify',
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };