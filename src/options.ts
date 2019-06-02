import chromium from 'chrome-aws-lambda';
const exePath = process.platform === 'linux'
? '/usr/bin/chromium'
: '/usr/bin/chromium';

interface Options {
    args: string[];
    executablePath: string;
    headless: boolean;
}

export async function getOptions(isDev: boolean) {
    let options: Options;
    if (isDev) {
        options = {
            args: [],
            executablePath: exePath,
            headless: true
        };
    } else {
        options = {
            args: chromium.args,
            executablePath: await chromium.executablePath,
            headless: chromium.headless,
        };
    }
    return options;
}
