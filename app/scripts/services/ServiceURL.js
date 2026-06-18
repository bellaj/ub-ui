'use strict';

function serviceUrl(sharedDataServices, ENV, constants) {
	var mepsEndpoint = constants[ENV.platform].mepsEndpoint;
	return {
		"loadUrl":function(){
			var api = sharedDataServices.getCurrentApi();
			var urls = {
				"me": api + "/api/bank/info",
				"counterparties": api + "/api/bank/counterparties",
				"outgoing": api + "/api/queue/out",
				"incoming": api + "/api/queue/in",
				"transfer": api + "/api/fund/transfer",
				"transactions": api + "/api/bank/transactions",
				"priority": api + "/api/queue/priority",
				"status": api + "/api/queue/status",
				"cancel": api + "/api/queue/cancel",
				"nettingStatus": api + "/api/netting/status",
				"netting": api + "/api/netting",
				"settleQueue": api + "/api/queue/settle",
				"balanceAll": api + "/api/bank/balance/all",
				"moveFunds": api + "/api/fund/interchannel/transfer"
			};
			if (ENV.platform === 'corda') {
				urls.pledge = mepsEndpoint + "/meps/pledge";
				urls.redeem = api + "/api/fund/redeem";
			} else if (ENV.platform === 'fabric') {
				urls.pledge = mepsEndpoint + "/meps/pledge";
				urls.redeem = mepsEndpoint + "/meps/redeem";
			} else {
				urls.pledge = mepsEndpoint + "/meps/pledge";
				urls.redeem = mepsEndpoint + "/meps/redeem";
			}
			return urls;
		}
	};
}
