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


describe('A successful Result', () => {
  
  it('should have an Id', () => {
    
    const result = new Result('This is a test');
    result.addPassResult('This test passed');
    expect(result.resultId).toExist();
    
  });
  
  it('should have a status of SUCCESS', () => {
  
    const result = new Result('This is a test');
    result.addPassResult('This test passed');
    expect(result.testResult).toEqual(testResults.passed)
    
  });
  
  it('should have a datestamp', () => {
  
    const result = new Result('This is a test');
    result.addPassResult('This test passed');
    expect(result.testDatestamp).toExist();
    
  });
  
  it('should have an output', () => {
  
    const result = new Result('This is a test');
    result.addPassResult('This test passed');
    expect(result.testOutput).toExist();
    
  });
  
  it('should have no exceptions', () => {
  
    const result = new Result('This is a test');
    result.addPassResult('This test passed');
    expect(result.testExceptions.length).toBeFalsy();
    
  });
  
});


describe('A failed Result', () => {
  
  it('should have an Id', () => {
    
    const result = new Result('This is a test');
    result.addFailResult('This test failed');
    expect(result.resultId).toExist();
    
  });
  
  it('should have a status of FAILED', () => {
    
    const result = new Result('This is a test');
    result.addFailResult('This test failed');
    expect(result.testResult).toEqual(testResults.failed)
    
  });
  
  it('should have a datestamp', () => {
    
    const result = new Result('This is a test');
    result.addFailResult('This test failed');
    expect(result.testDatestamp).toExist();
    
  });
  
  it('should have an output', () => {
    
    const result = new Result('This is a test');
    result.addFailResult('This test failed');
    expect(result.testOutput).toExist();
    
  });
  
});


describe('An error Result', () => {
  
  it('should have an Id', () => {
    
    const result = new Result('This is a test');
    const testRunError = new Error('An error occured while running the test');
    result.addExceptionResult(testRunError);
    expect(result.resultId).toExist();
    
  });
  
  it('should have a status of ERROR', () => {
    
    const result = new Result('This is a test');
    const testRunError = new Error('An error occured while running the test');
    result.addExceptionResult(testRunError);
    expect(result.testResult).toEqual(testResults.error)
    
  });
  
  it('should have a datestamp', () => {
    
    const result = new Result('This is a test');
    const testRunError = new Error('An error occured while running the test');
    result.addExceptionResult(testRunError);
    expect(result.testDatestamp).toExist();
    
  });
  
  it('should have an exception', () => {
    
    const result = new Result('This is a test');
    const testRunError = new Error('An error occured while running the test');
    result.addExceptionResult(testRunError);
    expect(result.testExceptions.length).toBe(1);
    
  });
  
  it('can have multiple exception', () => {
    
    const result = new Result('This is a test');
    const testRunError = new Error('An error occured while running the test');
    const testRunError2 = new Error('An error occured while running the test');
    const testRunError3 = new Error('An error occured while running the test');
    const errors = [ testRunError, testRunError2, testRunError3 ];
    result.addExceptionResult(errors);
    expect(result.testExceptions.length).toBe(3);
    
  });
  
});