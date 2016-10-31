const testResults = require('../constants/testResults');
const submitResults = require('../constants/submitResults');

class Result {
  constructor() {
  
    this.resultId = '';
    this.author = '';
    
    this.testResult = testResults.notRun;
    this.testDatestamp = null;
    this.testGroup = '';
    this.testDescription = '';
    this.testExceptions = [];
    this.testSubmitted = submitResults.notSubmitted;
  }
}

exports = module.exports = Result;
