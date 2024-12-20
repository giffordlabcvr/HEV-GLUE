projectBrowser.controller('hevSequencesCtrl', 
		[ '$scope', 'glueWebToolConfig', 'glueWS', '$controller', 'dialogs', 
		    function($scope, glueWebToolConfig, glueWS, $controller, dialogs) {

			$controller('sequencesCtrl', { $scope: $scope, 
				glueWebToolConfig: glueWebToolConfig, 
				glueWS: glueWS, 
				dialogs: dialogs});

			console.log("initializing hev sequences");

			$scope.init("source.name = 'ncbi-hev'", 
					["source.name",
                     "sequenceID",
                     "gb_country_iso",
                     "gb_country_short",
                     "gb_collection_year",
                     "earliest_collection_year",
                     "latest_collection_year",
                     "gb_length",
                     "gb_create_date",
                     "gb_update_date",
                     "gb_isolate",
                     "gb_host",
                     "gb_pubmed_id"] );
			
			
			$scope.pagingContext.setDefaultSortOrder([
  			    { property: "sequenceID", displayName: "NCBI Nucleotide ID", order: "+" }
  			]);

  			
  			$scope.pagingContext.setSortableProperties([
  	            { property:"sequenceID", displayName: "NCBI Nucleotide ID" },
  	            { property:"gb_create_date", displayName: "NCBI Entry Creation Date" },
  	            { property:"gb_update_date", displayName: "NCBI Last Update Date" },
  	            { property:"gb_country_iso", displayName: "Country of Origin" },
  	            { property:"earliest_collection_year", displayName: "Earliest Collection Year" },
  	            { property:"latest_collection_year", displayName: "Latest Collection Year" },
  	            { property:"gb_isolate", displayName: "Isolate ID" },
  	            { property:"gb_host", displayName: "Host Species" },
  	            { property:"gb_pubmed_id", displayName: "PubMed ID" },
  	            { property:"gb_length", displayName: "Sequence Length" }
              ]);

			$scope.pagingContext.setFilterProperties([
         		{ property:"sequenceID", displayName: "NCBI Nucleotide ID", filterHints: {type: "String"} },
        		{ property:"gb_length", displayName: "Sequence Length", filterHints: {type: "Integer"} },
          		{ property:"full_genome", displayName: "Full Genome (>= 6500nt)", filterHints: {type: "Boolean"} },
        		{ property:"gb_create_date", displayName: "NCBI Entry Creation Date", filterHints: {type: "Date"} },
        		{ property:"gb_update_date", displayName: "NCBI Last Update Date", filterHints: {type: "Date"} },
  	            { property:"gb_country_short", altProperties:["gb_country_iso"], displayName: "Country of Origin", filterHints: {type: "String"} },
	            { property:"gb_host", displayName: "Host Species", filterHints: {type: "String"} },
	            { property:"earliest_collection_year", displayName: "Earliest Collection Year", filterHints: {type: "Integer"} },
	            { property:"latest_collection_year", displayName: "Latest Collection Year", filterHints: {type: "Integer"} },
	            { property:"gb_isolate", displayName: "Isolate ID", filterHints: {type: "String"} },
	            { property:"gb_pubmed_id", displayName: "PubMed ID", filterHints: {type: "String"} },
	            { property:"gb_lab_construct", displayName: "Lab Construct?", filterHints: {type: "Boolean"} }
			]);

  			$scope.pagingContext.setDefaultFilterElems([]);
			
			
}]);
