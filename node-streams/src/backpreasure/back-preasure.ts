import { WritableOptions, Writable } from 'stream';
import { sleep } from '../utils';

export class WordsWritableBP extends Writable {
  constructor(options?: WritableOptions) {
    super(options);
  }

  _write(chunk: Buffer, encoding: string, callback: (error?: Error | null) => void) {
    sleep(1000).then(() => {
      console.log(`Done with: ${chunk.toString()}`);
      if (chunk.toString().includes('Q')) {
        callback(new Error("I don't like Q"));
      } else {
        callback();
      }
    });
  }
}
