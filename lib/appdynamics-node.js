/*
 The MIT License (MIT)

 Copyright (c) 2015 Matt Major

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
 */

var request = require('request');

/**
 * AppDynamics Client Constructor
 * @param options (url, port, path, username, password)
 * @constructor
 */
var AppDynamics = function (options) {
  this.connection = 'http://' +
  options.username + ':' +
  options.password + '@' +
  options.url + ':' +
  options.port + '/controller/rest/';
  this.outputType = '?output=' + options.outputType;
};
module.exports = AppDynamics;

/**
 * applicationsGetAll
 * Provides a list of all applications.
 * @param callback
 */
AppDynamics.prototype.applicationsGetAll = function (callback) {
  var url = this.connection + 'applications' + this.outputType;
  request.get(url, function (err, response) {
    callback(err, response && response.body ? response.body : response);
  });
};

/**
 * businessTransactionsGetAll
 * Provides a list of all Business Transactions for a given application.
 * @param applicationName
 * @param callback
 */
AppDynamics.prototype.businessTransactionsGetAll = function (applicationName, callback) {
  var url = this.connection + 'applications/' + applicationName + '/business-transactions' + this.outputType;
  request.get(url, function (err, response) {
    callback(err, response && response.body ? response.body : response);
  });
};

/**
 * tiersGetAll
 * Provides a list of all Tiers for a given application.
 * @param applicationName
 * @param callback
 */
AppDynamics.prototype.tiersGetAll = function (applicationName, callback) {
  var url = this.connection + 'applications/' + applicationName + '/tiers' + this.outputType;
  request.get(url, function (err, response) {
    callback(err, response && response.body ? response.body : response);
  });
};

/**
 * nodesGetAll
 * Provides node information (Machine, Agent and IP) for all application nodes.
 * @param applicationName
 * @param callback
 */
AppDynamics.prototype.nodesGetAll = function (applicationName, callback) {
  var url = this.connection + 'applications/' + applicationName + '/nodes' + this.outputType;
  request.get(url, function (err, response) {
    callback(err, response && response.body ? response.body : response);
  });
};

/**
 * nodesGetByName
 * Provides node information (Machine, Agent and IP) for a give application & node.
 * @param applicationName
 * @param nodeName
 * @param callback
 */
AppDynamics.prototype.nodesGetByName = function (applicationName, nodeName, callback) {
  var url = this.connection + 'applications/' + applicationName + '/nodes/' + nodeName + this.outputType;
  request.get(url, function (err, response) {
    callback(err, response && response.body ? response.body : response);
  });
};

/**
 * nodesGetByTier
 * Provides node information (Machine, Agent and IP) for all nodes in a tier.
 * @param applicationName
 * @param tierName
 * @param callback
 */
AppDynamics.prototype.nodesGetByTier = function (applicationName, tierName, callback) {
  var url = this.connection + 'applications/' + applicationName + '/tiers/' + tierName + '/nodes' + this.outputType;
  request.get(url, function (err, response) {
    callback(err, response && response.body ? response.body : response);
  });
};

/**
 * tiersGetByName
 * Provides tier information for a given tier.
 * @param applicationName
 * @param tierName
 * @param callback
 */
AppDynamics.prototype.tiersGetByName = function (applicationName, tierName, callback) {
  var url = this.connection + 'applications/' + applicationName + '/tiers/' + tierName + this.outputType;
  request.get(url, function (err, response) {
    callback(err, response && response.body ? response.body : response);
  });
};