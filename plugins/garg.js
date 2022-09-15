'use strict';
let init = function(sigma, window) {
  import("./sigma.exporters.svg/sigma.exporters.svg.js").then((module) => { module.init(sigma) });
  import("./sigma.layout.forceAtlas2/supervisor.js").then((module) => { module.init(window) });
  import("./sigma.layout.forceAtlas2/worker.js").then((module) => { module.init(window) });
  import("./sigma.layout.noverlap/sigma.layout.noverlap.js").then((module) => { module.init(sigma) });
  import("./sigma.neo4j.cypher/sigma.neo4j.cypher.js").then((module) => { module.init(sigma) });

  let gexf;
  import("./sigma.parsers.gexf/gexf-parser.js").then((module) => { gexf = module.gexf });

  import("./sigma.parsers.gexf/sigma.parsers.gexf.js").then((module) => { module.init(sigma, gexf) });
  import("./sigma.parsers.json/sigma.parsers.json.js").then((module) => { module.init(sigma) });
  import("./sigma.pathfinding.astar/sigma.pathfinding.astar.js").then((module) => { module.init(sigma) });
  import("./sigma.plugins.animate/sigma.plugins.animate.js").then((module) => { module.init(sigma) });
  import("./sigma.plugins.dragNodes/sigma.plugins.dragNodes.js").then((module) => { module.init(sigma) });
  import("./sigma.plugins.filter/sigma.plugins.filter.js").then((module) => { module.init(sigma) });
  import("./sigma.plugins.neighborhoods/sigma.plugins.neighborhoods.js").then((module) => { module.init(sigma) });
  import("./sigma.plugins.relativeSize/sigma.plugins.relativeSize.js").then((module) => { module.init(sigma) });
  import("./sigma.renderers.customEdgeShapes/sigma.canvas.edgehovers.dashed.js").then((module) => { module.init(sigma) });
  import("./sigma.renderers.customEdgeShapes/sigma.canvas.edgehovers.dotted.js").then((module) => { module.init(sigma) });
  import("./sigma.renderers.customEdgeShapes/sigma.canvas.edgehovers.parallel.js").then((module) => { module.init(sigma) });
  import("./sigma.renderers.customEdgeShapes/sigma.canvas.edgehovers.tapered.js").then((module) => { module.init(sigma) });
  import("./sigma.renderers.customEdgeShapes/sigma.canvas.edges.dashed.js").then((module) => { module.init(sigma) });
  import("./sigma.renderers.customEdgeShapes/sigma.canvas.edges.dotted.js").then((module) => { module.init(sigma) });
  import("./sigma.renderers.customEdgeShapes/sigma.canvas.edges.parallel.js").then((module) => { module.init(sigma) });
  import("./sigma.renderers.customEdgeShapes/sigma.canvas.edges.tapered.js").then((module) => { module.init(sigma) });
  let shapeLibrary;
  import("./sigma.renderers.customShapes/shape-library.js").then((module) => { shapeLibrary = module });
  let customShapes;
  import("./sigma.renderers.customShapes/sigma.renderers.customShapes.js").then((module) => { customShapes = module.init(sigma, shapeLibrary) });
  import("./sigma.renderers.edgeDots/sigma.canvas.edges.dotCurve.js").then((module) => { module.init(sigma) });
  import("./sigma.renderers.edgeDots/sigma.canvas.edges.dotCurvedArrow.js").then((module) => { module.init(sigma) });
  import("./sigma.renderers.edgeLabels/settings.js").then((module) => { module.init(sigma) });
  import("./sigma.renderers.edgeLabels/sigma.canvas.edges.labels.curve.js").then((module) => { module.init(sigma) });
  import("./sigma.renderers.edgeLabels/sigma.canvas.edges.labels.curvedArrow.js").then((module) => { module.init(sigma) });
  import("./sigma.renderers.edgeLabels/sigma.canvas.edges.labels.def.js").then((module) => { module.init(sigma) });
  import("./sigma.renderers.parallelEdges/sigma.canvas.edgehovers.curve.js").then((module) => { module.init(sigma) });
  import("./sigma.renderers.parallelEdges/sigma.canvas.edgehovers.curvedArrow.js").then((module) => { module.init(sigma) });
  import("./sigma.renderers.parallelEdges/sigma.canvas.edges.curve.js").then((module) => { module.init(sigma) });
  import("./sigma.renderers.parallelEdges/sigma.canvas.edges.curvedArrow.js").then((module) => { module.init(sigma) });
  import("./sigma.renderers.parallelEdges/sigma.canvas.edges.labels.curve.js").then((module) => { module.init(sigma) });
  import("./sigma.renderers.parallelEdges/utils.js").then((module) => { module.init(sigma, window) });
  import("./sigma.renderers.snapshot/sigma.renderers.snapshot.js").then((module) => { module.init(sigma) });
  import("./sigma.statistics.HITS/sigma.statistics.HITS.js").then((module) => { module.init(sigma) });

  return { gexf, shapeLibrary, customShapes };

};

export { init };
