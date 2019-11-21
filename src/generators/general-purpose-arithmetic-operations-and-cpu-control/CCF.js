import { instructionTypes } from "../constants";
import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_CCF = () => {
  const instruction = {};

  instruction.mnemonic = 'CCF';
  instruction.type = instructionTypes.GENERAL_PURPOSE_ARITHMETIC_OPERATIONS_AND_CPU_CONTROL;
  instruction.flags = {
    CY: '!CY',
    H: '0',
    N: '0',
    Z: '-',
  };
  instruction.cycles = 1;

  const opCodeInBinary = '00111111';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}