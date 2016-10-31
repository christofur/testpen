const testResults = require('../constants/testResults');
const submitResults = require('../constants/submitResults');

class SuiteResult {
  constructor() {
    
    this.resultId = '';
    this.author = '';
  
    this.suiteResult = testResults.notRun;
    this.suiteDatestamp = null;
    this.suiteDescription = '';
    this.suiteExceptions = [];
    this.suiteSubmitted = submitResults.notSubmitted;
  }
  
}

exports = module.exports = SuiteResult;
