import generateGuid from '../util/guid';
import testResults from '../constants/testResults';
import submitResults from '../constants/submitResults';

/**
 * Represents a single test result
 */
class Result {
  
  /**
   * @param description The description of this test
   */
  constructor(description) {
  
    /**
     * Public properties
     */
    this.resultId = generateGuid();
    this.testResult = testResults.notRun;
    this.testDatestamp = null;
    this.testDescription = description || '';
    this.testExceptions = [];
    this.testOutput = '';
    this.testSubmitted = submitResults.notSubmitted;
  }
  
  /**
   * Record that this test passed. Provide the output from the test run
   * @param testOutput
   */
  addPassResult(testOutput) {
    
    if(!this.resultId)
      throw new Error('Must initialise with constructor call');
    
    this.testResult = testResults.passed;
    this.testDatestamp = new Date();
    this.testOutput = testOutput;
  }
  
  /**
   * Record that this test failed. Provide the output from the test run
   * @param testOutput
   */
  addFailResult(testOutput) {
    
    if(!this.resultId)
      throw new Error('Must initialise with constructor call');
    
    this.testResult = testResults.failed;
    this.testDatestamp = new Date();
    this.testOutput = testOutput;
  }
  
  /**
   * Record that this test failed. Provide the output from the test run
   * @param exceptions
   */
  addExceptionResult(exceptions) {
    
    if(!this.resultId)
      throw new Error('Must initialise with constructor call');
    
    this.testResult = testResults.error;
    this.testDatestamp = new Date();
    
    if(exceptions && exceptions instanceof Array) {
      this.testExceptions = this.testExceptions.concat(exceptions);
    }
    else if (exceptions && exceptions instanceof Error) {
      this.testExceptions.push(exceptions);
    }
    
  }
}

export default Result;
