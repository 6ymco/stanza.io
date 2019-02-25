import * as jid from './protocol/jid';

import Client from './Client';
import { AgentConfig } from './Definitions';
import * as JXT from './jxt';
import Plugins from './plugins';

export const VERSION = '__STANZAIO_VERSION__';
export const JID = jid.JID;

export { Client, JXT, jid };

export function createClient(opts: AgentConfig) {
    const client = new Client(opts);
    client.use(Plugins);

    return client;
}