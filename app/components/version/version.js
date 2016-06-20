'use strict';

angular.module('InboxApp.version', [
  'InboxApp.version.interpolate-filter',
  'InboxApp.version.version-directive'
])

.value('version', '0.1');
