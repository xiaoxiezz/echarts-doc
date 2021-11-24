const path = require('path');

module.exports = {
    galleryViewPath: '/echarts4/examples/${lang}/view.html?c=',
    galleryEditorPath: '/echarts4/examples/${lang}/editor.html?c=',
    handbookPath: '/echarts4/handbook/${lang}/',
    websitePath: '/echarts4',

    imagePath: 'asset/img/',
    gl: {
        imagePath: 'asset/gl/img/',
    },

    releaseDestDir: path.resolve(__dirname, '../../echarts-website'),
    ecWWWGeneratedDir: path.resolve(__dirname, '../../echarts-www/_generated')
};
