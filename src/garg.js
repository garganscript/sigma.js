import "./utils/sigma.polyfills.js";

import { conrad } from './conrad.js';
import { sigma } from './sigma.core.js';

console.log("conrad:", conrad, "sigma:", sigma);

import("./utils/sigma.utils.js").then((module) => { module.init(sigma) });
import('./sigma.settings.js').then((module) => { module.init(sigma) });
import("./classes/sigma.classes.dispatcher.js").then((module) => { module.init(sigma) });
import("./classes/sigma.classes.configurable.js").then((module) => { module.init(sigma) });
import("./classes/sigma.classes.graph.js").then((module) => { module.init(sigma) });
import("./classes/sigma.classes.camera.js").then((module) => { module.init(sigma) });
import("./classes/sigma.classes.quad.js").then((module) => { module.init(sigma) });
import("./classes/sigma.classes.edgequad.js").then((module) => { module.init(sigma) });
import("./captors/sigma.captors.mouse.js").then((module) => { module.init(sigma) });
import("./captors/sigma.captors.touch.js").then((module) => { module.init(sigma) });
import("./renderers/sigma.renderers.canvas.js").then((module) => { module.init(sigma, conrad) });
// require("./renderers/sigma.renderers.svg.js").init(sigma, conrad);
import("./renderers/sigma.renderers.webgl.js").then((module) => { module.init(sigma, conrad) });
import("./renderers/sigma.renderers.def.js").then((module) => { module.init(sigma) });
import("./renderers/canvas/sigma.canvas.edges.arrow.js").then((module) => { module.init(sigma) });
import("./renderers/canvas/sigma.canvas.edges.curve.js").then((module) => { module.init(sigma) });
import("./renderers/canvas/sigma.canvas.edges.curvedArrow.js").then((module) => { module.init(sigma) });
import("./renderers/canvas/sigma.canvas.edges.def.js").then((module) => { module.init(sigma) });
import("./renderers/canvas/sigma.canvas.edgehovers.arrow.js").then((module) => { module.init(sigma) });
import("./renderers/canvas/sigma.canvas.edgehovers.curve.js").then((module) => { module.init(sigma) });
import("./renderers/canvas/sigma.canvas.edgehovers.curvedArrow.js").then((module) => { module.init(sigma) });
import("./renderers/canvas/sigma.canvas.edgehovers.def.js").then((module) => { module.init(sigma) });
import("./renderers/canvas/sigma.canvas.extremities.def.js").then((module) => { module.init(sigma) });
import("./renderers/canvas/sigma.canvas.hovers.def.js").then((module) => { module.init(sigma) });
import("./renderers/canvas/sigma.canvas.labels.def.js").then((module) => { module.init(sigma) });
import("./renderers/canvas/sigma.canvas.nodes.def.js").then((module) => { module.init(sigma) });
import("./middlewares/sigma.middlewares.copy.js").then((module) => { module.init(sigma) });
import("./middlewares/sigma.middlewares.rescale.js").then((module) => { module.init(sigma) });
import("./misc/sigma.misc.animation.js").then((module) => { module.init(sigma) });
import("./misc/sigma.misc.bindDOMEvents.js").then((module) => { module.init(sigma) });
import("./misc/sigma.misc.bindEvents.js").then((module) => { module.init(sigma) });
import("./misc/sigma.misc.drawHovers.js").then((module) => { module.init(sigma) });


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

export { sigma, conrad };
