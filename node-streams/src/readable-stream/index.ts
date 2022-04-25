import { WordsReadable } from './redable';

const stream = new WordsReadable();

//? FLOW MODE
//#region
// stream.on('data', (chunk: Buffer) => {
//   console.log(chunk);
// });
//#endregion

//? PAUSE MODE
//#region
// let chunk: Buffer;
// while ((chunk = stream.read()) !== null) {
//   console.log(chunk);
// }
//#endregion
