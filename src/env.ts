import { argsParser, loadJsonFromFile } from "./utils/common.util";

// setup dotenv
let args: any = argsParser(process.argv);
export const ENV = ('env' in args ? args.env : undefined) ?? process.env.ENV ?? 'local';
let configPath: string;
switch (ENV) {
  case 'development':
    configPath = '/../deployment/.env.development';
    break;

  case 'production':
    configPath = '/../deployment/.env.production';
    break;

  default:
  case 'local':
    configPath = '/../deployment/.env';
    break;
}
require('dotenv').config({ path: __dirname + configPath });
console.log(`***************************************************************************`);
console.log(`* PROJECT : Platform Publishing                                           *`);
console.log(`* ENV path: ${configPath.toString().padEnd(40, " ")}                      *`);
console.log(`***************************************************************************`);

// PlayFab and Xsolla defines
export const PLAYFAB_TITLE_ID = process.env.PLAYFAB_TITLE_ID ?? 'CDD4E';
export const XSOLLA_PROJECT_ID = process.env.XSOLLA_PROJECT_ID ?? '229521';
export const XSOLLA_MERCHANT_ID = process.env.XSOLLA_MERCHANT_ID ?? '422212';
export const XSOLLA_API_KEY = process.env.XSOLLA_API_KEY ?? '8324ee3e780920998465e19ac53d5962222f5840';

export const SERVICE_TYPE = process.env.SERVICE_TYPE ?? 'API';// API or BATCHJOB or BOTH
export const HOST = process.env.HOST ?? 'localhost';
export const PORT = parseInt(process.env.PORT ?? '8080');

export const MONGO_DB_METHOD = process.env.MONGO_DB_METHOD ?? 'mongodb';
export const MONGO_DB_NAME = process.env.MONGO_DB_NAME ?? 'publishing_event';
export const MONGO_HOST = process.env.MONGO_HOST ?? 'localhost';
export const MONGO_PORT = parseInt(process.env.MONGO_PORT ?? '27017');
export const MONGO_USERNAME = process.env.MONGO_USERNAME ?? 'publisher';
export const MONGO_PASS = process.env.MONGO_PASS ?? 'ppwd123';
export const MONGO_URI = `${MONGO_DB_METHOD}://${MONGO_USERNAME}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_DB_NAME}`;

// game server url define
export const GAME_SERVER_HOST = process.env.GAME_SERVER_HOST ?? 'https://api-warfare.saola.app';
export const GAME_SERVER_API_KEY = process.env.GAME_SERVER_API_KEY ?? 'o41QSAVKLGbKynEFu6kqqypZmT2jQzJLB24ov2dSHjL7JC0HQ8vtMx69MVJACSFB'; // 64 chars
export const GAME_SERVER_PAYMENT_PATH = process.env.GAME_SERVER_PAYMENT_PATH ?? '/payment';
export const GAME_SERVER_ORDER_PAID_PATH = process.env.GAME_SERVER_ORDER_PAID_PATH ?? '/paycenter/notify/xsollaNotify';
export const GAME_SERVER_REFUND_PATH = process.env.GAME_SERVER_REFUND_PATH ?? '/refund';
export const MAX_RETRY_PUSH_EVENT = parseInt(process.env.MAX_RETRY_PUSH_EVENT ?? '5');
export const REQUEST_TIMEOUT = parseInt(process.env.REQUEST_TIMEOUT ?? '3000');

// publishing sdk service host
export const PUBLISHING_SDK_SERVICE_HOST = process.env.PUBLISHING_SDK_SERVICE_HOST ?? 'http://localhost:3000';

// the GCP project id
export const PROJECT_ID = process.env.PROJECT_ID ?? 'adp-staging';

// pubsub config
export const ORDERED_EVENT_TOPIC = process.env.ORDERED_EVENT_TOPIC ?? 'projects/adp-staging/topics/xsolla-valid-events';
export const ORDERED_EVENT_SUB = process.env.ORDERED_EVENT_SUB ?? 'projects/adp-staging/subscriptions/xsolla-test-valid-event';
export const PUSHER_TOPIC = process.env.PUSHER_TOPIC ?? 'projects/adp-staging/topics/publishing-third-party-pusher';
export const PUSHER_SUB = process.env.PUSHER_SUB ?? 'projects/adp-staging/subscriptions/publishing-third-party-pusher-dev';
export const PUSH_SLEEP_TIME = parseInt(process.env.PUSH_SLEEP_TIME ?? '200');

// other config
export const CACHE_KEY_PREFIX = process.env.CACHE_KEY_PREFIX ?? 'publishing';
export const CACHE_EXPIRE_TIME = parseInt(process.env.CACHE_EXPIRE_TIME ?? '3600');
export const CACHE_KEY_FAKE_CLIENT_TOKEN = process.env.CACHE_KEY_FAKE_CLIENT_TOKEN ?? 'fake_client_token:fc9qr0iysow3a0l779m48r38';

export const REG_UPPER_AND_SPECIAL_LETTER = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+-]).+$/;

export type PLAYFAB_CONF_TYPE = {
    [prop: string]: {
        titleId: string,
        secretKey: string
    } | any,
};

let confData = loadJsonFromFile(__dirname + '/../deployment/playfab-game-configs.json');
if (!confData) confData = {
    'F7E64': {
        titleId: 'F7E64',
        secretKey: '5PUXA9ESNWW7HCT7B1A7D1YIOEEGS64QMPS4S9MJF4QKES6AKR',
    },
    '4FBB5': {
        titleId: '4FBB5',
        secretKey: 'ZRZR54CKPT9DKYP6E48KC38Y3PO3F9CKO64F5D915TDNHJIDSP',
    },
    '5FBD8': {
        titleId: '5FBD8',
        secretKey: 'X8IXATX7X69A1TU6Y9S518TPFOT4I9HPJJGPF8APY4IUFIMF1B',
    },
};
export const PLAYFAB_GAME_CONFIGS: PLAYFAB_CONF_TYPE = confData;
export const TITLE_IDS: string[] = Object.keys(PLAYFAB_GAME_CONFIGS);
