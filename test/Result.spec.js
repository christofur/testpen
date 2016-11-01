import expect from 'expect';
import { Result } from '../src';
import testResults from '../src/constants/testResults';
import submittedResults from '../src/constants/submitResults';

describe('A new Result', () => {
  
  
  it('should have an empty Id', () => {
    
    const result = new Result();
    expect(result.resultId).toBe('');
    
  });
  
  it('should have a status of NOTRUN', () => {
    
    const result = new Result();
    expect(result.testResult).toBe(testResults.notRun);
    
  });
  
  it('should have no datestamp', () => {
    
    const result = new Result();
    expect(result.testDatestamp).toBe(null);
    
  });
  
  it('should have an empty description', () => {
    
    const result = new Result();
    expect(result.testDescription).toNotExist();
    
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
    
  });
  
});
