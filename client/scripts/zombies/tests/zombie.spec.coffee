describe 'test zombieApp', ->
  beforeEach module('zombieApp')

  it 'we can test the values', inject (mode, version)->
    expect(version).to.eql('v1.0.1')
    expect(mode).to.eql('app')

  describe 'we can test the controller', ->
    beforeEach inject ($rootScope, $controller)->
      @scope = $rootScope.$new()
      @ctrl = $controller('ZombieCtrl', {$scope: @scope} )

    it 'has a ctrl', ->
      expect(@scope.alive).to.eql('is alive')

  describe 'we can test the service', ->
    beforeEach inject ($injector)->
      @svc = $injector.get('ZombieSvc')

    it 'has a double method', ->
      expect(@svc.double).to.exist

    it 'returns the right value', ->
      arg = 4
      res = @svc.double arg
      expect(res).to.eql(arg * 2)
