import expect from 'expect';
import { Result, SuiteResult } from '../src';
import suiteResults from '../src/constants/suiteResults';
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
    expect(result.suiteResult).toBe(suiteResults.notRun);
    
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


describe('A Suite with tests', () => {
  
  it('should have an Id', () => {
    
    const result = new SuiteResult();
    expect(result.resultId).toExist();
    
  });
  
  it('should have more than one test', () => {
    
    const suite = new SuiteResult();
    const test = new Result('This is a test');
    test.addPassResult('This test passed');
    suite.addResult(test);
    expect(suite.suiteTests.length).toBeGreaterThan(0);
    
  });
  
  it('should have a datestamp', () => {
  
    const suite = new SuiteResult();
    const test = new Result('This is a test');
    test.addPassResult('This test passed');
    suite.addResult(test);
    expect(suite.suiteDatestamp).toExist();
    
  });
  
  it('should have a status of RUNNING', () => {
  
    const suite = new SuiteResult();
    const test = new Result('This is a test');
    test.addPassResult('This test passed');
    suite.addResult(test);
    expect(suite.suiteResult).toBe(suiteResults.running);
    
  });
  
});