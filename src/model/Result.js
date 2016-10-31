const testResults = require('../constants/testResults');
const submitResults = require('../constants/submitResults');

class Result {
  constructor() {
  
    this.resultId = '';
    
    this.testResult = testResults.notRun;
    this.testDatestamp = null;
    this.testDescription = '';
    this.testExceptions = [];
    this.testSubmitted = submitResults.notSubmitted;
  }
  
}

exports = module.exports = Result;
