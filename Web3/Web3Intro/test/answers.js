const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

async function getAlicesBalance(volcanoCoin, aliceAccount) {
  const balance = await volcanoCoin.methods.balanceOf(aliceAccount).call();
  return balance;
}

async function getBobBalance(bobAccount) {
  return parseInt(await web3.eth.getBalance(bobAccount));
}

async function getBalanceInEther(charlieAccount) {
  return await web3.utils.fromWei(
    await web3.eth.getBalance(charlieAccount),
    'ether'
  );
}

async function getBlockNumber() {
  return await web3.eth.getBlockNumber();
}

const expectedHash =
  '0x564ccaf7594d66b1eaaea24fe01f0585bf52ee70852af4eac0cc4b04711cd0e2';

module.exports = {
  expectedHash,
  getAlicesBalance,
  getBobBalance,
  getBalanceInEther,
  getBlockNumber,
};
