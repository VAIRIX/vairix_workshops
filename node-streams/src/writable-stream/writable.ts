import { WritableOptions, Writable } from 'stream';
import { wordGenerator } from '../utils';

class WordsWritable extends Writable {
  constructor(options?: WritableOptions) {
    super(options);
  }

  _write(chunk: Buffer, encoding: string, callback: (error?: Error | null) => void) {
    if (chunk) {
      console.log(chunk.toString());
    }
    callback();
  }
}
