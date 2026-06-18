'use strict';

function constants(ENV) {

	var constants = {};
	
	var cordaConstants = {
		"mepsEndpoint": "http://cordaknqx-node1.southeastasia.cloudapp.azure.com:9001",
		"bankNodes": {
			// "MASREGULATOR ": {
			// 	"host": "cordaknqx-node0.southeastasia.cloudapp.azure.com",
			// 	"port": "10004",
			// 	"bankName": "Monetary Authority of Singapore Regulator",
			// 	"centralBank": false,
			// 	"regulator": true
			// },
			"MASGSGSG": {
				"host": "cordaknqx-node1.southeastasia.cloudapp.azure.com",
				"port": "10004",
				"bankName": "Monetary Authority of Singapore Central Bank",
				"centralBank": true,
				"regulator": false
			},
			"BOFASG2X": {
				"host": "cordaknqx-node2.southeastasia.cloudapp.azure.com",
				"port": "10004",
				"bankName": "Bank of America Merrill Lynch",
				"centralBank": false,
				"regulator": false
			},
			"CHASSGSG": {
				"host": "cordaknqx-node3.southeastasia.cloudapp.azure.com",
				"port": "10004",
				"bankName": "J.P. Morgan Chase",
				"centralBank": false,
				"regulator": false
			},
			"CITISGSG": {
				"host": "cordaknqx-node4.southeastasia.cloudapp.azure.com",
				"port": "10004",
				"bankName": "Citi",
				"centralBank": false,
				"regulator": false
			},
			"CSFBSGSX": {
				"host": "cordaknqx-node5.southeastasia.cloudapp.azure.com",
				"port": "10004",
				"bankName": "Credit Suisse",
				"centralBank": false,
				"regulator": false
			},
			"DBSSSGSG": {
				"host": "cordaknqx-node6.southeastasia.cloudapp.azure.com",
				"port": "10004",
				"bankName": "DBS Bank Ltd",
				"centralBank": false,
				"regulator": false
			},
			"HSBCSGSG": {
				"host": "cordaknqx-node7.southeastasia.cloudapp.azure.com",
				"port": "10004",
				"bankName": "HSBC Limited",
				"centralBank": false,
				"regulator": false
			},
			"MTBCSGSG": {
				"host": "cordaknqx-node8.southeastasia.cloudapp.azure.com",
				"port": "10004",
				"bankName": "Mitsubishi UFJ Financial Group, Inc.",
				"centralBank": false,
				"regulator": false
			},
			"OCBCSGSG": {
				"host": "cordaknqx-node9.southeastasia.cloudapp.azure.com",
				"port": "10004",
				"bankName": "Oversea-Chinese Banking Corporation Ltd",
				"centralBank": false,
				"regulator": false
			},
			"SCBLSGSG": {
				"host": "cordaknqx-node10.southeastasia.cloudapp.azure.com",
				"port": "10004",
				"bankName": "Standard Chartered Bank",
				"centralBank": false,
				"regulator": false
			},
			"UOBVSGSG": {
				"host": "cordaknqx-node11.southeastasia.cloudapp.azure.com",
				"port": "10004",
				"bankName": "United Overseas Bank",
				"centralBank": false,
				"regulator": false
			},
			"XSIMSGSG": {
				"host": "cordaknqx-node12.southeastasia.cloudapp.azure.com",
				"port": "10004",
				"bankName": "Singapore Exchange",
				"centralBank": false,
				"regulator": false
			}
    }
  };

  // Single-VM 3-org network (MAS + BOFA + CHASSGSG). All banks share one API on port 8080.
  // Edit host if the UI runs on a different machine than the Fabric VM.
  var fabricApiHost = "192.168.11.117";
  var fabricApiPort = "8080";
  var fabricMepsEndpoint = "http://" + fabricApiHost + ":9001";

  var fabricConstants = {
  	"mepsEndpoint": fabricMepsEndpoint,
  	"bankNodes": {
    	"MASGSGSG": {
    		"host": fabricApiHost,
    		"port": fabricApiPort,
    		"bankName": "Monetary Authority of Singapore",
    		"shortName": "MAS",
    		"centralBank": true,
    		"regulator": true
			},
			"BOFASG2X": {
	    		"host": fabricApiHost,
	    		"port": fabricApiPort,
	    		"bankName": "Bank of America Merrill Lynch",
	    		"shortName": "BAML",
	    		"centralBank": false,
	    		"regulator": false
			},
			"CHASSGSG": {
	    		"host": fabricApiHost,
	    		"port": fabricApiPort,
	    		"bankName": "J.P. Morgan Chase",
	    		"shortName": "JPM",
	    		"centralBank": false,
	    		"regulator": false
			}
    },
    type: {
    	completedtx: "Transfer",
    	pledgefund: "Pledge",
    	nettingadd: "Netting Add",
    	nettingsubtract: "Netting Subtract",
    	redeemfund: "Redeem",
    	moveinfund: "Move In Fund",
    	moveoutfund: "Move Out Fund"
    }
  };

  var quorumConstants = {
  	"mepsEndpoint": "http://quorumnx02.southeastasia.cloudapp.azure.com:9001",
  	"bankNodes": {
   //  	"MASREGULATOR": {
   //  		"host": "quorumnx01.southeastasia.cloudapp.azure.com",
   //  		"port": "3000",
   //  		"bankName": "Monetary Authority of Singapore Regulator",
   //  		"centralBank": false,
   //  		"regulator": true
			// },
			"MASGSGSG": {
	    		"host": "quorumnx02.southeastasia.cloudapp.azure.com",
	    		"port": "3000",
	    		"bankName": "Monetary Authority of Singapore Central Bank",
	    		"centralBank": true,
	    		"regulator": false
	    	},
      "BOFASG2X": {
      	"host": "quorumnx03.southeastasia.cloudapp.azure.com",
      	"port": "3000",
      	"bankName": "Bank of America Merrill Lynch",
      	"centralBank": false,
      	"regulator": false
      },
      "CHASSGSG": {
      	"host": "quorumnx04.southeastasia.cloudapp.azure.com",
      	"port": "3000",
      	"bankName": "J.P. Morgan Chase",
      	"centralBank": false,
      	"regulator": false
      },
      "CITISGSG": {
      	"host": "quorumnx05.southeastasia.cloudapp.azure.com",
      	"port": "3000",
      	"bankName": "Citi",
      	"centralBank": false,
      	"regulator": false
      },
      "CSFBSGSX": {
      	"host": "quorumnx06.southeastasia.cloudapp.azure.com",
      	"port": "3000",
      	"bankName": "Credit Suisse",
      	"centralBank": false,
      	"regulator": false
      },
      "DBSSSGSG": {
      	"host": "quorumnx07.southeastasia.cloudapp.azure.com",
      	"port": "3000",
      	"bankName": "DBS Bank Ltd",
      	"centralBank": false,
      	"regulator": false
      },
      "HSBCSGSG": {
      	"host": "quorumnx08.southeastasia.cloudapp.azure.com",
      	"port": "3000",
      	"bankName": "HSBC Limited",
      	"centralBank": false,
      	"regulator": false
      },
      "MTBCSGSG": {
      	"host": "quorumnx09.southeastasia.cloudapp.azure.com",
      	"port": "3000",
      	"bankName": "Mitsubishi UFJ Financial Group, Inc.",
      	"centralBank": false,
      	"regulator": false
      },
      "OCBCSGSG": {
      	"host": "quorumnx10.southeastasia.cloudapp.azure.com",
      	"port": "3000",
      	"bankName": "Oversea-Chinese Banking Corporation Ltd",
      	"centralBank": false,
      	"regulator": false
      },
      "SCBLSGSG": {
      	"host": "quorumnx12.southeastasia.cloudapp.azure.com",
      	"port": "3000",
      	"bankName": "Standard Chartered Bank",
      	"centralBank": false,
      	"regulator": false
      },
      "UOBVSGSG": {
      	"host": "quorumnx14.southeastasia.cloudapp.azure.com",
      	"port": "3000",
      	"bankName": "United Overseas Bank",
      	"centralBank": false,
      	"regulator": false
      },
      "XSIMSGSG": {
      	"host": "quorumnx15.southeastasia.cloudapp.azure.com",
      	"port": "3000",
      	"bankName": "Singapore Exchange",
      	"centralBank": false,
      	"regulator": false
      }
    },
    historyStatus: {
    	0: "Pending",
    	1: "Confirmed",
    	2: "Hold",
    	3: "Cancelled"
    }
  };

  switch (ENV.platform) {
    case 'corda':
      constants.corda = cordaConstants;
      break;
    case 'fabric':
      constants.fabric = fabricConstants;
      break;
    case 'quorum':
      constants.quorum = quorumConstants;
      break;
    default:
    	break;
  }
	
	constants.priorities = {
  	0: "Normal",
  	1: "High"
  };

  constants.nettingStatus = [
    "SETTLED",
    "FAILED",
    "deadlock",
    "complete",
    "Deadlock",
    "Complete"
  ];

  constants.status = {
  	pending: "Pending",
  	confirmed: "Confirmed",
  	onhold: "On Hold",
  	canceled: "Canceled",
  	unknown: "Unknown"
  };

  constants.defaultBankLoc = "BOFASG2X";
  constants.regulator = "MASGSGSG";
  constants.currencySymbol = "S$";
  constants.error = "error";
  constants.platform = {
  	fabric: "Hyperledger Fabric",
  	quorum: "Quorum",
  	corda: "Corda"
  };
  
  return constants;
}
