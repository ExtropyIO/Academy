const IPFS = require('ipfs');
const all = require('it-all');

(async () => {
  const node = await IPFS.create();

  const cid = 'QmPChd2hVbrJ6bfo3WBcTW4iZnpHm8TEzWkLHmLpXhF68A';

  const data = Buffer.concat(await all(node.cat(cid)));

  console.log(data.toString());
})();
