const IPFS = require('ipfs');
const all = require('it-all');

let node;
async function init() {
  node = await IPFS.create();
  console.log('IPFS node initialised.');
}

const ipfsApi = {
  async ipfsInit() {
    try {
      const node = await IPFS.create();
      return node;
    } catch (e) {
      console.log(e);
    }
  },
  async ipfsAdd(data) {
    try {
      return await node.add(data);
    } catch (e) {
      console.log(e);
    }
  },
  async ipfsGet(cid) {
    try {
      const data = Buffer.concat(await all(node.cat(cid)));
      return { 0: data.toString() };
    } catch (e) {
      console.log(e);
    }
  },
};
init();

module.exports = ipfsApi;
