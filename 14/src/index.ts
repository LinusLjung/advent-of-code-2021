import calculatePolymerValue from './calculatePolymerValue';
import getInput from './getInput';
import runPairInsertions from './runPairInsertions';

const input = getInput();

console.log(calculatePolymerValue(runPairInsertions(input, 10)));
