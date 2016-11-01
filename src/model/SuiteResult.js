import testResults from '../constants/testResults';
import submitResults from '../constants/submitResults';

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

export default SuiteResult;
