const gulp = require('gulp');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const gulpWebpack = require('gulp-webpack');

// Config file
const webpackConfig = require('./webpack.config');

gulp.task('webpack-dev-server', () =>
  new WebpackDevServer(webpack(webpackConfig.dev), {
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  }).listen(webpackConfig.dev.port, '0.0.0.0')
);

gulp.task('webpack:build', () =>
  gulpWebpack(webpackConfig.prod)
    .pipe(gulp.dest('./dist'))
);

// Development server
gulp.task('default', ['webpack-dev-server']);

// Production build
gulp.task('build', ['webpack:build']);
