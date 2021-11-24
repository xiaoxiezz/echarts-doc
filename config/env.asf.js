const path = require('path');

module.exports = {
    galleryViewPath: '/echarts5/examples/${lang}/view.html?c=',
    galleryEditorPath: '/echarts5/examples/${lang}/editor.html?c=',
    handbookPath: '/echarts5/handbook/${lang}/',
    websitePath: '/echarts5',

    imagePath: 'asset/img/',
    gl: {
        imagePath: 'asset/gl/img/',
    },

    releaseDestDir: path.resolve(__dirname, '../../echarts-website'),
    ecWWWGeneratedDir: path.resolve(__dirname, '../../echarts-www/_generated')
};
