var assert = require('assert'),
    vows = require('vows'),
    seriousCalculations = require('../');



vows.describe('serious-calculations').addBatch({
  'When performing serious calculations': {
    topic: seriousCalculations.performSeriousCalculations(4),
    'result should be valid': function (result) {
      assert.isNumber(result);
      assert.equal(result, 8);
    }
  },


  /*'Wng Hello World': {
    topic: seriousCalculations.performWngHelloWorld(4),
    'result should be valid': function (result) {
      assert.isNumber(result);
      assert.equal(result, 4);
    }
  },*/

  'Wng Hello World': {
    topic: seriousCalculations.performWngHelloWorld('foo'),
    'result should be valid': function (result) {
      assert.isString(result);
      assert.equal(result, 'class { foo }');
    }
  }

  
}).export(module);

