'use strict';
let init = function(sigma, window) {
  require("./sigma.exporters.svg/sigma.exporters.svg.js").init(sigma);
  require("./sigma.layout.forceAtlas2/supervisor.js").init(window);
  require("./sigma.layout.forceAtlas2/worker.js").init(window);
  require("./sigma.layout.noverlap/sigma.layout.noverlap.js").init(sigma);
  require("./sigma.neo4j.cypher/sigma.neo4j.cypher.js").init(sigma);

  let gexf = require("./sigma.parsers.gexf/gexf-parser.js").gexf;

  require("./sigma.parsers.gexf/sigma.parsers.gexf.js").init(sigma, gexf);
  require("./sigma.parsers.json/sigma.parsers.json.js").init(sigma);
  require("./sigma.pathfinding.astar/sigma.pathfinding.astar.js").init(sigma);
  require("./sigma.plugins.animate/sigma.plugins.animate.js").init(sigma);
  require("./sigma.plugins.dragNodes/sigma.plugins.dragNodes.js").init(sigma);
  require("./sigma.plugins.filter/sigma.plugins.filter.js").init(sigma);
  require("./sigma.plugins.neighborhoods/sigma.plugins.neighborhoods.js").init(sigma);
  require("./sigma.plugins.relativeSize/sigma.plugins.relativeSize.js").init(sigma);
  require("./sigma.renderers.customEdgeShapes/sigma.canvas.edgehovers.dashed.js").init(sigma);
  require("./sigma.renderers.customEdgeShapes/sigma.canvas.edgehovers.dotted.js").init(sigma);
  require("./sigma.renderers.customEdgeShapes/sigma.canvas.edgehovers.parallel.js").init(sigma);
  require("./sigma.renderers.customEdgeShapes/sigma.canvas.edgehovers.tapered.js").init(sigma);
  require("./sigma.renderers.customEdgeShapes/sigma.canvas.edges.dashed.js").init(sigma);
  require("./sigma.renderers.customEdgeShapes/sigma.canvas.edges.dotted.js").init(sigma);
  require("./sigma.renderers.customEdgeShapes/sigma.canvas.edges.parallel.js").init(sigma);
  require("./sigma.renderers.customEdgeShapes/sigma.canvas.edges.tapered.js").init(sigma);
  let shapeLibrary = require("./sigma.renderers.customShapes/shape-library.js");
  let customShapes = require("./sigma.renderers.customShapes/sigma.renderers.customShapes.js").init(sigma, shapeLibrary);
  require("./sigma.renderers.edgeDots/sigma.canvas.edges.dotCurve.js").init(sigma);
  require("./sigma.renderers.edgeDots/sigma.canvas.edges.dotCurvedArrow.js").init(sigma);
  require("./sigma.renderers.edgeLabels/settings.js").init(sigma);
  require("./sigma.renderers.edgeLabels/sigma.canvas.edges.labels.curve.js").init(sigma);
  require("./sigma.renderers.edgeLabels/sigma.canvas.edges.labels.curvedArrow.js").init(sigma);
  require("./sigma.renderers.edgeLabels/sigma.canvas.edges.labels.def.js").init(sigma);
  require("./sigma.renderers.parallelEdges/sigma.canvas.edgehovers.curve.js").init(sigma);
  require("./sigma.renderers.parallelEdges/sigma.canvas.edgehovers.curvedArrow.js").init(sigma);
  require("./sigma.renderers.parallelEdges/sigma.canvas.edges.curve.js").init(sigma);
  require("./sigma.renderers.parallelEdges/sigma.canvas.edges.curvedArrow.js").init(sigma);
  require("./sigma.renderers.parallelEdges/sigma.canvas.edges.labels.curve.js").init(sigma);
  require("./sigma.renderers.parallelEdges/utils.js").init(sigma, window);
  require("./sigma.renderers.snapshot/sigma.renderers.snapshot.js").init(sigma);
  require("./sigma.statistics.HITS/sigma.statistics.HITS.js").init(sigma);
  return { gexf, shapeLibrary, customShapes };

};
module.exports = { init: init };
