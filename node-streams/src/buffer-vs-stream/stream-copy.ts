import { createReadStream, createWriteStream } from 'fs';
import { endProfiler, getPaths, startProfiler } from '../utils';

const copyFile = (src: string, dest: string): void => {
  const timer = startProfiler();
  // create source stream
  const srcStream = createReadStream(src);

  // create destination stream
  const destStream = createWriteStream(dest);

  const stream = srcStream.pipe(destStream);
  stream.on('finish', () => {
    endProfiler(timer);
  });
};

const [src, dest] = getPaths();

copyFile(src, dest);
