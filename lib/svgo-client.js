// SVGO
export const SVG2JS = require('./svgo/svg2js');
export const JS2SVG = require('./svgo/js2svg');

export { fn as collapseGroups } from '../plugins/collapseGroups';
export { fn as convertShapeToPath } from '../plugins/convertShapeToPath';
export { fn as removeAttrs } from '../plugins/removeAttrs';

// SVGO Plugins (copied into Terra)
export { fn as convertTransform } from '../plugins/convertTransform';
