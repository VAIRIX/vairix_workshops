import { wordGenerator } from '../utils';
import { WordsWritableBP } from './back-preasure';

const stream = new WordsWritableBP({ highWaterMark: 4 });

//? WRITE WITH BACKPRESSURE
//#region
sendWords();

function sendWords() {
  let word;
  let canWrite = true;
  while ((word = wordGenerator().next().value) && canWrite) {
    canWrite = stream.write(word);
    console.log(`Sent: ${word}`);
    if (!canWrite) {
      console.log('STOP WRITING!');
      stream.once('drain', () => {
        console.log('START WRITING AGAIN!');
        canWrite = true;
        sendWords();
      });
    }
  }
}
//#endregion
