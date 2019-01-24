const cv = require('opencv');

describe('Checking absDiff method', function () {
  it('Compare maps', function () {
    compareImages('./images/map_1.png', './images/map_2.png', './result_maps.png');
  });

  it('Compare windows', function () {
    compareImages('./images/windows_expected.png', './images/windows_actual.png', './result_windows.jpg');
  });
});

function compareImages (base, actual, diff) {
  cv.readImage(base, function (err, car1) {
    if (err) throw err;

    cv.readImage(actual, function (err, car2) {
      if (err) throw err;

      var mtx = new cv.Matrix();
      mtx.absDiff(car1, car2);
      mtx.save(diff);
    });
  });
}
