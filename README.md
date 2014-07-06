appdynamics-node
==========
Node.js Wrapper for AppDynamics REST API.

If you spot any mistakes or have any suggestions, please raise an issue here:

https://github.com/matt-major/appdynamics-node/issues

## Usage
To use the wrapper, require it within the module or application you're building.

Create a new instance of the AppDynamics module and pass in the parameters as shown below.

The outputType can be either ```XML``` OR ```JSON```.

```js
var AppDynamics = require('appdynamics-node'),
    client = new AppDynamics({
        url: 'xxxx',
        port: xxxx,
        username: 'xxxx@xxxx',
        password: 'xxxx',
        outputType: 'xxxx'
    });
```

**Example - Return All AppDynamics Applications**
```js
client.applicationsGetAll(function(err, response) {
    console.log(response);
});
```

## Available Methods
#### General
```js
applicationsGetAll(callback)
businessTransactionsGetAll(applicationName, callback)
```
#### Nodes
```js
nodesGetAll(applicationName, callback)
nodesGetByName(applicationName, nodeName, callback)
nodesGetByTier(applicationName, tierName, callback)
```
#### Tiers
```js
tiersGetAll(applicationName, callback)
tiersGetByName(applicationName, tierName, callback)
```

##License
The MIT License (MIT)

Copyright (c) 2014 Matt Major

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.