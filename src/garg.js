require("./utils/sigma.polyfills.js");

const conrad = require('./conrad.js').conrad;
const sigma = require('./sigma.core.js').sigma;
console.log("conrad:", conrad, "sigma:", sigma);
require("./utils/sigma.utils.js").init(sigma);
require('./sigma.settings.js').init(sigma);
require("./classes/sigma.classes.dispatcher.js").init(sigma);
require("./classes/sigma.classes.configurable.js").init(sigma);
require("./classes/sigma.classes.graph.js").init(sigma);
require("./classes/sigma.classes.camera.js").init(sigma);
require("./classes/sigma.classes.quad.js").init(sigma);
require("./classes/sigma.classes.edgequad.js").init(sigma);
require("./captors/sigma.captors.mouse.js").init(sigma);
require("./captors/sigma.captors.touch.js").init(sigma);
require("./renderers/sigma.renderers.canvas.js").init(sigma, conrad);
// require("./renderers/sigma.renderers.svg.js").init(sigma, conrad);
require("./renderers/sigma.renderers.webgl.js").init(sigma, conrad);
require("./renderers/sigma.renderers.def.js").init(sigma);
require("./renderers/canvas/sigma.canvas.edges.arrow.js").init(sigma);
require("./renderers/canvas/sigma.canvas.edges.curve.js").init(sigma);
require("./renderers/canvas/sigma.canvas.edges.curvedArrow.js").init(sigma);
require("./renderers/canvas/sigma.canvas.edges.def.js").init(sigma);
require("./renderers/canvas/sigma.canvas.edgehovers.arrow.js").init(sigma);
require("./renderers/canvas/sigma.canvas.edgehovers.curve.js").init(sigma);
require("./renderers/canvas/sigma.canvas.edgehovers.curvedArrow.js").init(sigma);
require("./renderers/canvas/sigma.canvas.edgehovers.def.js").init(sigma);
require("./renderers/canvas/sigma.canvas.extremities.def.js").init(sigma);
require("./renderers/canvas/sigma.canvas.hovers.def.js").init(sigma);
require("./renderers/canvas/sigma.canvas.labels.def.js").init(sigma);
require("./renderers/canvas/sigma.canvas.nodes.def.js").init(sigma);
require("./middlewares/sigma.middlewares.copy.js").init(sigma);
require("./middlewares/sigma.middlewares.rescale.js").init(sigma);
require("./misc/sigma.misc.animation.js").init(sigma);
require("./misc/sigma.misc.bindDOMEvents.js").init(sigma);
require("./misc/sigma.misc.bindEvents.js").init(sigma);
require("./misc/sigma.misc.drawHovers.js").init(sigma);


//   [ require("sigma/plugins/sigma.exporters.svg/sigma.exporters.svg.js")
//   , require("sigma/plugins/sigma.layout.forceAtlas2/supervisor.js")
//   // , require("sigma/plugins/sigma.layout.forceAtlas2/tasks/forceAtlas2.js")
//   , require("sigma/plugins/sigma.layout.forceAtlas2/worker.js")
//   , require("sigma/plugins/sigma.layout.noverlap/sigma.layout.noverlap.js")
//   , require("sigma/plugins/sigma.neo4j.cypher/sigma.neo4j.cypher.js")
//   , require("sigma/plugins/sigma.parsers.gexf/gexf-parser.js")
//   , require("sigma/plugins/sigma.parsers.gexf/sigma.parsers.gexf.js")
//   , require("sigma/plugins/sigma.parsers.json/sigma.parsers.json.js")
//   , require("sigma/plugins/sigma.pathfinding.astar/sigma.pathfinding.astar.js")
//   , require("sigma/plugins/sigma.plugins.animate/sigma.plugins.animate.js")
//   , require("sigma/plugins/sigma.plugins.dragNodes/sigma.plugins.dragNodes.js")
//   , require("sigma/plugins/sigma.plugins.filter/sigma.plugins.filter.js")
//   , require("sigma/plugins/sigma.plugins.neighborhoods/sigma.plugins.neighborhoods.js")
//   , require("sigma/plugins/sigma.plugins.relativeSize/sigma.plugins.relativeSize.js")
//   , require("sigma/plugins/sigma.renderers.customEdgeShapes/sigma.canvas.edgehovers.dashed.js")
//   , require("sigma/plugins/sigma.renderers.customEdgeShapes/sigma.canvas.edgehovers.dotted.js")
//   , require("sigma/plugins/sigma.renderers.customEdgeShapes/sigma.canvas.edgehovers.parallel.js")
//   , require("sigma/plugins/sigma.renderers.customEdgeShapes/sigma.canvas.edgehovers.tapered.js")
//   , require("sigma/plugins/sigma.renderers.customEdgeShapes/sigma.canvas.edges.dashed.js")
//   , require("sigma/plugins/sigma.renderers.customEdgeShapes/sigma.canvas.edges.dotted.js")
//   , require("sigma/plugins/sigma.renderers.customEdgeShapes/sigma.canvas.edges.parallel.js")
//   , require("sigma/plugins/sigma.renderers.customEdgeShapes/sigma.canvas.edges.tapered.js")
//   , require("sigma/plugins/sigma.renderers.customShapes/shape-library.js")
//   , require("sigma/plugins/sigma.renderers.customShapes/sigma.renderers.customShapes.js")
//   , require("sigma/plugins/sigma.renderers.edgeDots/sigma.canvas.edges.dotCurve.js")
//   , require("sigma/plugins/sigma.renderers.edgeDots/sigma.canvas.edges.dotCurvedArrow.js")
//   , require("sigma/plugins/sigma.renderers.edgeLabels/settings.js")
//   , require("sigma/plugins/sigma.renderers.edgeLabels/sigma.canvas.edges.labels.curve.js")
//   , require("sigma/plugins/sigma.renderers.edgeLabels/sigma.canvas.edges.labels.curvedArrow.js")
//   , require("sigma/plugins/sigma.renderers.edgeLabels/sigma.canvas.edges.labels.def.js")
//   , require("sigma/plugins/sigma.renderers.parallelEdges/sigma.canvas.edgehovers.curve.js")
//   , require("sigma/plugins/sigma.renderers.parallelEdges/sigma.canvas.edgehovers.curvedArrow.js")
//   , require("sigma/plugins/sigma.renderers.parallelEdges/sigma.canvas.edges.curve.js")
//   , require("sigma/plugins/sigma.renderers.parallelEdges/sigma.canvas.edges.curvedArrow.js")
//   , require("sigma/plugins/sigma.renderers.parallelEdges/sigma.canvas.edges.labels.curve.js")
//   , require("sigma/plugins/sigma.renderers.parallelEdges/utils.js")
//   , require("sigma/plugins/sigma.renderers.snapshot/sigma.renderers.snapshot.js")
//   , require("sigma/plugins/sigma.statistics.HITS/sigma.statistics.HITS.js")
//   ];

module.exports = { sigma: sigma, conrad: conrad };

