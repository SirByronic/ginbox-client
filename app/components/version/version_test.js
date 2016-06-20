'use strict';

describe('InboxApp.version module', function() {
  beforeEach(module('InboxApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
