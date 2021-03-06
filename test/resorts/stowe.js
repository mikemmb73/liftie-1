var assert = require('assert');
var fs = require('fs');
var parser = require('../../lib/lifts/parser');
var parse = require('../../lib/resorts/stowe');

/*global describe, it */
describe('parse stowe', function() {

  it('should return lift status', function(done) {
    var stream = fs.createReadStream(__dirname + '/example/stowe.html');
    stream.on('error', done);
    stream.pipe(parser(parse, function(err, status) {
      var expected = {
        'FourRunner Quad': 'open',
         Gondola: 'open',
        'Lookout Double': 'closed',
        'Mountain Triple': 'open',
        'Toll House Double': 'open',
        'Midway Surface': 'closed',
        'Over Easy Transfer Gondola': 'open',
        'Alpine Double': 'open',
        'Sensation Quad': 'open',
        'Easy Street Double': 'open',
        'Sunny Spruce Quad': 'open',
        'Adventure Triple': 'open',
        'Carpet Lift': 'open'
      };
      assert.deepEqual(status, expected);
      done(err);
    }));
  });
});