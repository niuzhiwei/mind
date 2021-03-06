
/**
 * Dependencies.
 */

var Mind = require('../..');

/**
 * Learn the XOR gate.
 */

var mind = Mind()
  .learn([
    { input: [0, 0], output: [ 0 ] },
    { input: [0, 1], output: [ 1 ] },
    { input: [1, 0], output: [ 1 ] },
    { input: [1, 1], output: [ 0 ] }
  ]);

/**
 * Download the mind.
 */

mind.download();
