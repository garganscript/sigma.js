'use strict';
const init = function(sigma) {

  if (typeof sigma === 'undefined')
    throw 'sigma is not declared';

  // Initialize packages:
  sigma.renderers = sigma.renderers || {};

  let canvas = document.createElement('canvas');
  var webgl = typeof WebGLRenderingContext !== 'undefined';
  if (webgl) {
    try {
      webgl = !!(
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl')
      );
    } catch (e) {
      webgl = false;
    }
  }
  // Copy the good renderer:
  sigma.renderers.def = webgl ?
    sigma.renderers.webgl :
    sigma.renderers.canvas;
};

export { init };
