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

  it('input string should be strictly equal to lowercase output string', () => {
    const upperStringInput = "HELLO WORLD";
    const lowerString = "hello world";
    const output = convertStringInput(upperStringInput);
    expect(lowerString).toEqual(output);
  })

  it('output string should have no whitespace on either end of string', () => {
    const upperStringInput = "    hello world    ";
    const output = convertStringInput(upperStringInput);
    expect(output[0]).not.toEqual(" ");
    expect(output[output.length - 1]).not.toEqual(" ");
  })

})