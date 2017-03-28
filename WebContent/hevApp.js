	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https:www.google-analytics.com/analytics.js','ga');
	
	  console.log("document.location.hostname", document.location.hostname);
	  var trackingID;
	  if(document.location.hostname.indexOf("hev.glue.cvr.ac.uk") >= 0) {
		  // HEV-GLUE production analytics account
		  trackingID = 'UA-93776838-1';
		  ga('create', trackingID, 'auto');
	  } else {
		  // sandbox analytics account
		  trackingID = 'UA-93752139-1';
		  ga('create', trackingID, 'none');
	  }

var hevApp = angular.module('hevApp', [
    'ngRoute',
    'analysisTool', 
    'projectBrowser', 
    'home',
    'glueWS',
    'glueWebToolConfig',
    'treeControl',
    'angulartics',
    'angulartics.google.analytics',
    'angular-cookie-law'
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
	glueWebToolConfig.setAnalysisToolExampleSequenceURL("exampleSequences/fullGenome1.fasta");
	glueWebToolConfig.setAnalysisModuleName("hevWebAnalysisTool");
	glueWebToolConfig.setProjectBrowserURL("../gluetools-web/www/projectBrowser");
	glueWebToolConfig.setGlueWSURL("../gluetools-web/www/glueWS");
} ]);


