import { PathLike } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import { endProfiler, getPaths, startProfiler } from '../utils';

const copyFile = async (src: PathLike, dest: PathLike): Promise<void> => {
  const timer = startProfiler();

  // read file content
  const content = await readFile(src);
  // write that content somewhere else
  await writeFile(dest, content);

  endProfiler(timer);
};

const [src, dest] = getPaths();
copyFile(src, dest);
