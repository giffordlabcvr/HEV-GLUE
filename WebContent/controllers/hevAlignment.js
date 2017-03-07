hevApp.controller('hevAlignmentCtrl', 
		[ '$scope', '$routeParams', '$controller', 'glueWS', 'dialogs',
		  function($scope, $routeParams, $controller, glueWS, dialogs) {
			addUtilsToScope($scope);

			$controller('alignmentCtrl', { $scope: $scope, 
				glueWebToolConfig: glueWebToolConfig, 
				glueWS: glueWS, 
				dialogs: dialogs});

			$scope.init($routeParams.alignmentName, 
					"hevAlignmentRenderer", "sequence.source.name = 'ncbi-hev' and referenceMember = false",
					[
					 "sequence.sequenceID",
                     "alignment.name",
                     "alignment.displayName",
                     "sequence.gb_country_iso",
                     "sequence.gb_country_short",
					 "sequence.gb_collection_year",
					 "sequence.gb_length",
					 "sequence.gb_create_date",
                     "sequence.gb_update_date",
					 "sequence.gb_pubmed_id",
					 "sequence.gb_host",
					 "sequence.gb_isolate"
					 ]);

			$scope.pagingContext.setDefaultSortOrder([
			    { property: "sequence.sequenceID", displayName: "NCBI Nucleotide ID", order: "+" }
			]);
	
			
			$scope.pagingContext.setSortableProperties([
	            { property:"sequence.sequenceID", displayName: "NCBI Nucleotide ID" },
	            { property:"sequence.gb_create_date", displayName: "NCBI Entry Creation Date" },
	            { property:"sequence.gb_update_date", displayName: "NCBI Last Update Date" },
                { property:"alignment.name", displayName: "Genotype / Subtype" },
  	            { property:"sequence.gb_country_iso", displayName: "Country of Origin" },
	            { property:"sequence.gb_collection_year", displayName: "Collection Year" },
	            { property:"sequence.gb_isolate", displayName: "Isolate ID" },
	            { property:"sequence.gb_pubmed_id", displayName: "PubMed ID" },
	            { property:"sequence.gb_host", displayName: "Host Species" },
	            { property:"sequence.gb_length", displayName: "Sequence Length" }
	        ]);

			$scope.pagingContext.setFilterProperties([
           		{ property:"sequence.sequenceID", displayName: "NCBI Nucleotide ID", filterHints: {type: "String"} },
          		{ property:"sequence.gb_length", displayName: "Sequence Length", filterHints: {type: "Integer"} },
                { property:"alignment.displayName", displayName: "Genotype / Subtype", filterHints: {type: "String"}  },
          		{ property:"sequence.full_genome", displayName: "Full Genome (>= 6500nt)", filterHints: {type: "Boolean"} },
          		{ property:"sequence.gb_create_date", displayName: "NCBI Entry Creation Date", filterHints: {type: "Date"} },
          		{ property:"sequence.gb_update_date", displayName: "NCBI Last Update Date", filterHints: {type: "Date"} },
  	            { property:"sequence.gb_country_short", altProperties:["sequence.gb_country_iso"], displayName: "Country of Origin", filterHints: {type: "String"} },
  	            { property:"sequence.gb_host", displayName: "Host Species", filterHints: {type: "String"} },
  	            { property:"sequence.gb_collection_year", displayName: "Collection Year", filterHints: {type: "Integer"} },
  	            { property:"sequence.gb_isolate", displayName: "Isolate ID", filterHints: {type: "String"} },
  	            { property:"sequence.gb_pubmed_id", displayName: "PubMed ID", filterHints: {type: "String"} }
  			]);

			$scope.pagingContext.setDefaultFilterElems([]);

			
		}]);