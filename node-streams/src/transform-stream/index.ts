import { WordTransformer } from './transform-stream';

const transformer = new WordTransformer();

//#region
transformer.write('hello');
const word: Buffer = transformer.read();
console.log(word.toString());
//#endregion
