import { WordsReadable } from '../readable-stream/redable';
import { WordTransformer } from '../transform-stream/transform-stream';
import { WordsWritableBP } from '../backpreasure/back-preasure';

const readable = new WordsReadable();
const writable = new WordsWritableBP();
const transformer = new WordTransformer();

const handleError = (error: Error) => {
  console.log('Pretty error:', error.message);
};

readable
  .on('error', handleError)
  .pipe(transformer)
  .on('error', handleError)
  .pipe(writable)
  .on('error', handleError);
