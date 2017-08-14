import angular from 'angular';
import ngRouteModuleName from 'angular-route';
import 'angular-ui-router';
import ocLazyLoadModuleName from 'oclazyload';

export default angular.module('lazyApp', [
	ngRouteModuleName,
	'ui.router',
	ocLazyLoadModuleName,
	/*
	 uncomment to move msg-store to bundle.js only instead
	 of putting it in both: 3.bundle.js and 4.bundle.js
	*/
	//require('commons/msg-store').name,
	require('./pages/home/home.routing').name,
	require('./pages/messages/messages.routing').name
]);
