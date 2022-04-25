import { Readable, ReadableOptions } from 'stream';
import { wordGenerator } from '../utils';

export class WordsReadable extends Readable {
  constructor(options?: ReadableOptions) {
    super(options);
  }

  _read() {
    const word = wordGenerator().next().value;
    if (word) {
      this.push(word);
    } else {
      this.push(null);
    }
  }
}
