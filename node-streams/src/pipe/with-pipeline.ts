import { WordsReadable } from '../readable-stream/redable';
import { WordTransformer } from '../transform-stream/transform-stream';
import { WordsWritableBP } from '../backpreasure/back-preasure';
import { pipeline } from 'stream';

const readable = new WordsReadable();
const writable = new WordsWritableBP();
const transformer = new WordTransformer();

const handleError = (error: NodeJS.ErrnoException | null) => {
  console.log('Pretty error:', error?.message);
};

pipeline(readable, transformer, writable, handleError);
