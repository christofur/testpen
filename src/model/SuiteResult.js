import generateGuid from '../util/guid';
import suiteResults from '../constants/suiteResults';
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
  
    this.suiteResult = suiteResults.notRun;
    this.suiteDatestamp = null;
    this.suiteDescription = description;
    this.suiteExceptions = [];
    this.suiteTests = [];
    this.suiteSubmitted = submitResults.notSubmitted;
  }
  
  /**
   * Record that this test passed. Provide the output from the test run
   * @param result
   */
  addResult(result) {
    
    if(!this.resultId)
      throw new Error('Must initialise with constructor call');
    
    this.suiteResult = suiteResults.running;
    this.suiteDatestamp = new Date();
    this.suiteTests.push(result);
    
  }
}

export default SuiteResult;
