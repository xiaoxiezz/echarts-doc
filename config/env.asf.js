const path = require('path');

module.exports = {
    galleryViewPath: '/examples/${lang}/view.html?c=',
    galleryEditorPath: '/examples/${lang}/editor.html?c=',
    handbookPath: '/handbook/${lang}/',
    websitePath: '/',

    imagePath: 'asset/img/',
    gl: {
        imagePath: 'asset/gl/img/',
    },

    releaseDestDir: path.resolve(__dirname, '../../echarts-website'),
    ecWWWGeneratedDir: path.resolve(__dirname, '../../echarts-www/_generated')
};
