/* eslint-disable import/no-extraneous-dependencies */
const babel = require(`gulp-babel`);
const gulp = require(`gulp`);
// const env = require('gulp-env');
const nodemon = require(`gulp-nodemon`);
const plumber = require(`gulp-plumber`);
const sourcemaps = require(`gulp-sourcemaps`);
/* eslint-enable import/no-extraneous-dependencies */

const babelOptions = {
  presets: [
    [`env`, {
      targets: {
        node: 7.5,
      },
    }],
    `stage-3`,
  ],
};

gulp.task(`js`, done => {
  gulp.src(`src/**/*.js`)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel(babelOptions))
    .pipe(sourcemaps.write(`.`))
    .pipe(gulp.dest(`dist`))
    .on(`end`, done);
});

gulp.task(`default`, [`js`], () => {
  gulp.watch(`src/**/*.js`, [`js`]);
  // env({ file: '.env.json' });
  nodemon({ script: `dist/index.js`, ignore: `src` });
});
