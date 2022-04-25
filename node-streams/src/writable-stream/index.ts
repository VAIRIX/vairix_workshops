import { wordGenerator } from '../utils';
import { WordsWritableBP } from '../backpreasure/back-preasure';

const stream = new WordsWritableBP();

//? WRITE
//#region
let word;
while ((word = wordGenerator().next().value)) {
  stream.write(word);
}
//#endregion
