const cv = require('opencv');
const chai = require('chai');

chai.should();

describe('Checking template comparison', function () {
  it('Default example', function () {
    let targetFilename = './examples/images/car_expected.jpg';
    let templateFilename = './examples/images/car1_template.jpg';
    // var templateFilename = './examples/images/car_expected.jpg';

    cv.readImage(targetFilename, function (err, target) {
      cv.readImage(templateFilename, function (err, template) {
        var TM_CCORR_NORMED = 0;
        var res = target.matchTemplateByMatrix(template, TM_CCORR_NORMED);

        var minMax = res.minMaxLoc();
        var topLeft = minMax.maxLoc;

        topLeft.x.should.equal(42);
        topLeft.y.should.equal(263);
        target.canny(5, 300);
        template.canny(5, 300);
        res = target.matchTemplateByMatrix(template, TM_CCORR_NORMED);
        minMax = res.minMaxLoc();
        topLeft = minMax.maxLoc;
        topLeft.x.should.equal(42);
        topLeft.y.should.equal(263);
      });
    });
  });
});
