'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _testResults = require('../constants/testResults');

var _testResults2 = _interopRequireDefault(_testResults);

var _submitResults = require('../constants/submitResults');

var _submitResults2 = _interopRequireDefault(_submitResults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SuiteResult = function SuiteResult() {
  (0, _classCallCheck3.default)(this, SuiteResult);


  this.resultId = '';
  this.author = '';

  this.suiteResult = _testResults2.default.notRun;
  this.suiteDatestamp = null;
  this.suiteDescription = '';
  this.suiteExceptions = [];
  this.suiteSubmitted = _submitResults2.default.notSubmitted;
};

exports = module.exports = SuiteResult;