import { Transform, TransformCallback, TransformOptions } from 'stream';

export class WordTransformer extends Transform {
  constructor(options?: TransformOptions) {
    super(options);
  }

  _transform(chunk: Buffer, encoding: string, callback: TransformCallback) {
    const word = chunk.toString();
    const transformedWord = word.toUpperCase();
    if (transformedWord.startsWith('Q')) {
      callback(new Error('Catch me if you can!'));
    } else {
      this.push('The transformed word is: ' + transformedWord);
      callback();
    }
  }
}
