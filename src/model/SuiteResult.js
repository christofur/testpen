import generateGuid from '../util/guid';
import testResults from '../constants/testResults';
import submitResults from '../constants/submitResults';

/**
 * Represents a suite of test results
 */
class SuiteResult {
  
  /**
   * @param description The description of this suite
   */
  constructor(description) {
  
    /**
     * Public properties
     */
    this.resultId = generateGuid();
    this.author = '';
  
    this.suiteResult = testResults.notRun;
    this.suiteDatestamp = null;
    this.suiteDescription = description;
    this.suiteExceptions = [];
    this.suiteTests = [];
    this.suiteSubmitted = submitResults.notSubmitted;
  }
}

export default SuiteResult;
