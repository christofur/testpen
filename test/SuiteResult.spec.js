import expect from 'expect';
import { SuiteResult } from '../src';
import testResults from '../src/constants/testResults';
import submittedResults from '../src/constants/submitResults';

describe('A new Suite', () => {
  
  it('should have an Id', () => {
    
    const result = new SuiteResult();
    expect(result.resultId).toExist();
    
  });
  
  it('should have a randomly generated Id', () => {
    
    const result1 = new SuiteResult();
    const result2 = new SuiteResult();
    expect(result1.resultId).toNotEqual(result2.resultId);
    
  });
  
  it('should have a status of NOTRUN', () => {
    
    const result = new SuiteResult();
    expect(result.suiteResult).toBe(testResults.notRun);
    
  });
  
  it('should have no datestamp', () => {
    
    const result = new SuiteResult();
    expect(result.suiteDatestamp).toBe(null);
    
  });
  
  it('should have an valid description', () => {
    
    const suiteDescription = 'This is a test suite';
    const result = new SuiteResult(suiteDescription);
    expect(result.suiteDescription).toBe(suiteDescription);
    
  });
  
  it('should have no exceptions', () => {
    
    const result = new SuiteResult();
    expect(result.suiteExceptions.length).toBe(0);
    
  });
  
  it('should have no tests', () => {
    
    const result = new SuiteResult();
    expect(result.suiteTests.length).toBe(0);
    
  });
  
  it('should have a submitted status of NOTSUBMITTED', () => {
    
    const result = new SuiteResult();
    expect(result.suiteSubmitted).toBe(submittedResults.notSubmitted);
    
  });
  
});
