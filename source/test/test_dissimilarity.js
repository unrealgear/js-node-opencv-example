const cv = require('opencv');

describe('Checking similarity', function () {
  it('Default example', function () {
    if (cv.ImageSimilarity === undefined) {
      process.exit(0);
    }

    cv.readImage('./images/car_expected.jpg', function (err, car1) {
      if (err) throw err;

      cv.readImage('./images/car_actual.jpg', function (err, car2) {
        if (err) throw err;

        cv.ImageSimilarity(car1, car2, function (err, dissimilarity) {
          if (err) throw err;

          console.log('Dissimilarity: ', dissimilarity);
        });
      });
    });
  });
});
