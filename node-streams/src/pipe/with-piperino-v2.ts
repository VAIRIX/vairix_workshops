import { WordsReadable } from '../readable-stream/redable';
import { WordTransformer } from '../transform-stream/transform-stream';
import { WordsWritableBP } from '../backpreasure/back-preasure';

const readable = new WordsReadable();
const writable = new WordsWritableBP();
const transformer = new WordTransformer();

readable.pipe(transformer).pipe(writable);

readable.on('error', console.error);
writable.on('error', console.error);
transformer.on('error', console.error);
