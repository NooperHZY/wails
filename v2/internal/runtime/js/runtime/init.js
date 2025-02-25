/*
 _       __      _ __    
| |     / /___ _(_) /____
| | /| / / __ `/ / / ___/
| |/ |/ / /_/ / / (__  ) 
|__/|__/\__,_/_/_/____/  
The electron alternative for Go
(c) Lea Anthony 2019-present
*/
/* jshint esversion: 6 */

const bridge = require('./bridge');

/**
 * ready will execute the callback when Wails has loaded
 * and initialised.
 *
 * @param {function} callback
 */
function ready(callback) {

	// If window.wails exists, we are ready
	if( window.wails ) {
		return callback();
	}

	// If not we need to setup the bridge
	bridge.InitBridge(callback);
}

module.exports = {
	ready: ready,
};