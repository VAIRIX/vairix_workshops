import { WordsReadable } from '../readable-stream/redable';
import { WordTransformer } from '../transform-stream/transform-stream';
import { WordsWritableBP } from '../backpreasure/back-preasure';

const readable = new WordsReadable();
const writable = new WordsWritableBP();
const transformer = new WordTransformer();

const handleError = (error: Error) => {
  console.log('Pretty error:', error.message);
};

readable.on('data', (data: Buffer) => {
  transformer.write(data);
});

transformer.on('data', (data: Buffer) => {
  writable.write(data);
});

readable.on('error', handleError);
writable.on('error', handleError);
transformer.on('error', handleError);
