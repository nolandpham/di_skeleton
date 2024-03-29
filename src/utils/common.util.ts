export function argsParser(args: Array<string>): Object {
  // let result: Object = new Object();
  let result = [];
  for (let i = 0; i < args.length; i++) {
    let splited = args[i].split(/^--(\S+)=(\S+)$/).filter(e => {
      if (e) return e;
    });
    if (splited.length === 2) {
      result.push(splited);
    }
  }
  return Object.fromEntries(result);
}

export function isNumber(num: string): boolean {
  return Number.isInteger(parseFloat(num));
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function loadJsonFromFile(filePath: string): Object | null {
  let confData = null;
  try {
    confData = require(filePath);
  } catch (err) {
    console.error(`Load file ${filePath} got error!`);
  }
  return confData;
}

export function makeid(length: number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
