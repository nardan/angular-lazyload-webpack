// let appModule = require('../app');
import angular from 'angular';
import appModule from '../app';

angular.bootstrap(document, [appModule.name], { strictDi: true });
