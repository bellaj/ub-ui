# Project Ubin Phase 2 - Common UI

This repository contains the source code for the common UI deployed in Project Ubin Phase 2. 

The UI is a consolidated UI that allows single page access to all banks and MAS view. Only one instance is required per platform.

## Prerequisites

Node.js and NPM is required to build the UI. After those are installed, run the following commands:

```sh
npm -g install bower
npm -g install grunt
npm install
bower install
```

## Configuration

1. Go to [app/scripts/services/Constants.js](app/scripts/services/Constants.js)
2. The endpoints for each platform are stored in its own variable map.
    - Corda configuration key: `cordaConstants`
    - Hyperledger Fabric configuration key: `fabricConstants`
    - Quorum configuration key: `quorumConstants`
3. **Hyperledger Fabric (single-VM):** The UI is preconfigured for the 3-org network (MAS, BOFA, CHASSGSG). Edit `fabricApiHost` and `fabricApiPort` in `fabricConstants` to match your deployed Fabric API (default: `192.168.11.117:8080`). Pledge and redeem go directly to the Fabric API (`/api/fund/pledge`, `/api/fund/redeem`); `ubin-ext-service` is not required.
4. **Corda / Quorum:** Under the platform key (e.g. `cordaConstants`), edit `mepsEndpoint` to point to the URL where [`ubin-ext-service`](https://github.com/project-ubin/ubin-ext-service) has been deployed.
5. Under `bankNodes`, each key (e.g. `MASGSGSG`) represents the BIC of a participating node. Edit `host` and `port` to match the environment (for multi-VM Fabric, each bank has its own API host).

```js
	var cordaConstants = {
		"mepsEndpoint": "<ubin-ext-service URL>",
		"bankNodes": {
			"MASGSGSG": {
				"host": "<host for MASGSGSG node>",
				"port": "<API port for MASGSGSG node>",
				"bankName": "Monetary Authority of Singapore Central Bank",
				"centralBank": true,
				"regulator": false
			},
			"BOFASG2X": {
				"host": "<host for BOFASG2X node>",
				"port": "<API port for BOFASG2X node>",
				"bankName": "Bank of America Merrill Lynch",
				"centralBank": false,
				"regulator": false
			},
			...
		}
	};
	
	var fabricConstants = {
	    ...
	};
	
	var quorumConstants = {
	    ...
	};
```

## Development mode
To run a live server, execute `grunt serve:ubin --env=<platform>` where platform can be `corda`, `fabric` and `quorum`.

## Deployment
1. To run in the background, execute the following (platform can be `corda`, `fabric` and `quorum`)

```sh
grunt build:ubin --env=<platform>
```

2. Go to the `dist` folder

```sh
cd dist
```

3. Start the http-server in the background (example port is 7001 below)

```sh
nohup http-server -p 7001 &
```

# License

Copyright 2017 The Association of Banks in Singapore

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.