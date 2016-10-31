import testResults from '../constants/testResults';
import submitResults from '../constants/submitResults';

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
