import expect from 'expect';
import { Result } from '../src';
import testResults from '../src/constants/testResults';
import submittedResults from '../src/constants/submitResults';

describe('A new Result', () => {
  
  
  it('should have an Id', () => {
    
    const result = new Result();
    expect(result.resultId).toExist();
    
  });
  
  it('should have a randomly generated Id', () => {
    
    const result1 = new Result();
    const result2 = new Result();
    expect(result1.resultId).toNotEqual(result2.resultId);
    
  });
  
  it('should have a status of NOTRUN', () => {
    
    const result = new Result();
    expect(result.testResult).toBe(testResults.notRun);
    
  });
  
  it('should have no datestamp', () => {
    
    const result = new Result();
    expect(result.testDatestamp).toBe(null);
    
  });
  
  it('should have an valid description', () => {
    
    const testDescription = 'This is a single test';
    const result = new Result(testDescription);
    expect(result.testDescription).toBe(testDescription);
    
  });
  
  it('should have no exceptions', () => {
    
    const result = new Result();
    expect(result.testExceptions.length).toBeFalsy();
    
  });
  
  it('should have an empty output', () => {
    
    const result = new Result();
    expect(result.testOutput).toNotExist();
    
  });
  
  it('should have a submitted status of NOTSUBMITTED', () => {
    
    const result = new Result();
    expect(result.testSubmitted).toBe(submittedResults.notSubmitted);
    
    result.addPassResult('this passed!')
    
  });
  
});
