import { instructionTypes } from "../constants";
import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_JR_s8 = () => {
  const instruction = {};

  instruction.mnemonic = 'JR s8'; // jump relative
  instruction.type = instructionTypes.JUMP;
  instruction.flags = {};
  instruction.cycles = 3;

  const opCodeInBinary = '00011000';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}