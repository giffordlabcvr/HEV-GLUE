var hevApp = angular.module('hevApp', [
    'ngRoute',
    'analysisTool', 
    'projectBrowser', 
    'home',
    'glueWS',
    'glueWebToolConfig',
    'treeControl'
  ]);

console.log("after hevApp module definition");

hevApp.config(['$routeProvider', 'projectBrowserStandardRoutesProvider',
  function($routeProvider, projectBrowserStandardRoutesProvider) {
	
	var projectBrowserStandardRoutes = projectBrowserStandardRoutesProvider.$get();
	var projectBrowserURL = "../gluetools-web/www/projectBrowser";
	// custom single alignment view
	$routeProvider.
    when('/project/reference/:referenceName', {
	  templateUrl: 'views/hevReference.html',
	  controller: 'hevReferenceCtrl'
    });
    // custom alignments view
	$routeProvider.
    when('/project/alignment', {
  	  templateUrl: 'views/hevAlignments.html',
  	  controller: 'hevAlignmentsCtrl'
      });
	// custom single alignment view
	$routeProvider.
    when('/project/alignment/:alignmentName', {
	  templateUrl: 'views/hevAlignment.html',
	  controller: 'hevAlignmentCtrl'
    });
    // custom sequences view
	$routeProvider.
    when('/project/sequence', {
  	  templateUrl: 'views/hevSequences.html',
  	  controller: 'hevSequencesCtrl'
      });
	// custom single sequence view
	$routeProvider.
    when('/project/sequence/:sourceName/:sequenceID', {
	  templateUrl: 'views/hevSequence.html',
	  controller: 'hevSequenceCtrl'
    });

	
    $routeProvider.
    when('/analysisTool', {
      templateUrl: '../gluetools-web/www/analysisTool/analysisTool.html',
      controller: 'analysisToolCtrl'
    });
	
    $routeProvider.
      when('/home', {
    	  templateUrl: './modules/home/home.html',
    	  controller: 'homeCtrl'
      }).
      otherwise({
    	  redirectTo: '/home'
      });
}]);

hevApp.controller('hevAppCtrl', 
  [ '$scope', 'glueWS', 'glueWebToolConfig',
function ($scope, glueWS, glueWebToolConfig) {
	$scope.brand = "HEV-GLUE";
	$scope.homeMenuTitle = "Home";
	$scope.projectBrowserMenuTitle = "Sequence Database";
	$scope.projectBrowserAlignmentMenuTitle = "Clade Tree";
	$scope.projectBrowserSequenceMenuTitle = "Sequences";
	$scope.analysisMenuTitle = "Analysis";
	$scope.analysisToolMenuTitle = "Genotyping and Interpretation";
	glueWS.setProjectURL("../../../gluetools-ws/project/hev");
	glueWebToolConfig.setAnalysisToolURL("../gluetools-web/www/analysisTool");
	glueWebToolConfig.setAnalysisModuleName("hevWebAnalysisTool");
	glueWebToolConfig.setProjectBrowserURL("../gluetools-web/www/projectBrowser");
	glueWebToolConfig.setGlueWSURL("../gluetools-web/www/glueWS");
} ]);


