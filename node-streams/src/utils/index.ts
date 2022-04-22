export const startProfiler = (): NodeJS.Timer => {
  const timer = setInterval(() => {
    console.error(`${(process.memoryUsage().arrayBuffers / 1024 / 1024).toFixed(4).padStart(10)} Mb`);
  }, 100);
  return timer;
};

export const endProfiler = (timer: NodeJS.Timer): void => {
  clearInterval(timer);
  console.error(`${(process.memoryUsage().arrayBuffers / 1024 / 1024).toFixed(4).padStart(10)} Mb`);
};

export const getPaths = (): [string, string] => {
  const [, , src, dest] = process.argv;
  return [src, dest];
};

// generate 10 words
let index = 0;
export function* wordGenerator() {
  const words = ['foo', 'bar', 'baz', 'qux', 'zax', 'sex', 'jib', 'vex', 'max', 'min'];
  while (index < 10) {
    yield words[index++];
  }
}

export const sleep = (ms: number = 1000): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
