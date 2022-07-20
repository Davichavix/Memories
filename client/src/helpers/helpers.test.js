import { convertStringInput } from "./helpers";

describe('convertStringInput', () => {

  it('input should be type string', () => {
    const stringInput = "hello world";
    expect(typeof stringInput).toBe('string');
  });

  it('output should be type string', () => {
    const stringInput = "hello world";
    const output = convertStringInput(stringInput);
    expect(typeof output).toBe('string');
  })

  it('input string should be strictly equal to uppercase output string', () => {
    const lowerString = "hello world!";
    const upperStringInput = "HELLO WORLD!";
    const output = convertStringInput(lowerString);
    expect(upperStringInput).toEqual(output);
  })

  it('output string should have no whitespace on either end of string', () => {
    const blankSpaceString = "    hello world    ";
    const output = convertStringInput(blankSpaceString);
    expect(output[0]).not.toEqual(" ");
    expect(output[output.length - 1]).not.toEqual(" ");
  })

})