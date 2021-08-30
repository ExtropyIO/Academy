const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

/**
 * We're creating a new web3 instance and setting the provider
 * to local host.
 *
 * It's standard to use port 8545 when connecting to an Ethereum network.
 */

const { assert, expect } = require('chai');
const volcanoCoinContract = require('../build/contracts/VolcanoCoin.json');
const volcanoCoinAddress = '';

const {
  expectedHash,
  getAlicesBalance,
  getBobBalance,
  getBalanceInEther,
  getBlockNumber,
} = require('./answers');

let volcanoCoin;
let accounts;
let ownerAccount;
let aliceAccount;
let bobAccount;

describe('VolcanoCoin', async () => {
  before(async () => {
    /**
     * Create a new instance of the contract by inputting
     * the abi and contract address.
     *
     * We can then access the contract methods, use web3js utils etc
     */
    volcanoCoin = await new web3.eth.Contract(
      volcanoCoinContract.abi,
      volcanoCoinAddress
    );
  });

  describe('Deploying the contract', () => {
    it('creates a new instance of the contract', async () => {
      assert.ok(await volcanoCoin._address);
    });

    // ************ START HERE ************

    it('Explore web3 to get a list of available accounts', async () => {
      // accounts =
      // Hint: explore web3 eth methods to get a list of all accounts
      expect(accounts.length).to.equal(10);
    });

    it("Set the accounts addresses for the owner, alice and bob. Hint: the owner's account is always accounts[0]", async () => {
      // ownerAccount =
      // aliceAccount =
      // bobAccount =
      expect(ownerAccount).to.equal(accounts[0]);
      expect(aliceAccount).to.equal(accounts[1]);
      expect(bobAccount).to.equal(accounts[2]);
    });
    it('Deploy your contract in Remix to view the publicly available functions. Return the name for the Volcano coin contract', async () => {
      // const actual =
      const expected = 'Volcano';
      expect(actual).to.equal(expected);
    });

    it('Get the symbol for the contract', async () => {
      // const actual =
      const expected = 'VLC';
      expect(actual).to.equal(expected);
    });
  });

  describe('Exploring more contract functions', async () => {
    it('Call the appropriate function to return the current token supply', async () => {
      // const actual =
      const expected = '10000';
      expect(actual).to.equal(expected);
    });
    it('Call the appropriate function to get the address for the contract owner. Hint: Deploy your contract in Remix to view publicly available functions', async () => {
      // const actual =
      expect(actual).to.equal(accounts[0]);
    });
  });

  describe('Transferring Volcano coins', () => {
    it("Explore the contract's methods and return Alice's balance", async () => {
      // const actual =
      const expected = await getAlicesBalance(volcanoCoin, accounts[1]);
      expect(actual).to.equal(expected);
    });
    it("Call 'makeTransfer' and send 10 Volcano coins from the owner's account to Alice's account.", async () => {
      const balanceBefore = await volcanoCoin.methods
        .balanceOf(aliceAccount)
        .call();
      const newTransfer = 10;
      // const actual = please don't move the position of the variable
      const balanceAfter = await volcanoCoin.methods
        .balanceOf(aliceAccount)
        .call();
      expect(parseInt(balanceAfter)).to.equal(
        parseInt(balanceBefore) + newTransfer
      );
    });
  });
  describe('Events', () => {
    it("Subscribe to the contract's tokenSupplyChange event", async () => {
      // const actual =
      expect(actual).to.have.property('_events');
      expect(actual).to.have.property('_eventsCount');
    });
  });
  describe('web3.eth and web3.utils', () => {
    it("Using web3.eth, return Bob's Ethereum balance", async () => {
      // const actual =
      const expected = await getBobBalance(bobAccount);
      expect(parseInt(actual)).to.equal(expected);
    });
    it("Using web3 to get an Ethereum balance returns the amount in wei. Using web3.utils, convert Bob's balance from wei to Ether", async () => {
      // const actual =
      const expected = await getBalanceInEther(bobAccount);
      expect(actual).to.equal(expected);
    });
    it('Web3 can also estimate the gas for a transaction. Explore the library to see how much gas it would cost Bob to send Alice 1 ETH', async () => {
      // const actual =
      const expected = 21000;
      expect(actual).to.equal(expected);
    });
    it("Web3js can calculate the keccack256 an input. Try using utils to calculate the keccak256 for the string 'Ethereum'", async () => {
      const string = 'Ethereum';
      // const actual =
      const expected = expectedHash;
      expect(actual).to.equal(expected);
    });
    it("There's also a method to calculate the sha3 of a string input, calculate the sha3 of the same string", async () => {
      const string = 'Ethereum';
      // const actual =
      const expected = expectedHash;
      expect(actual).to.equal(expected);
    });
    it('web3.eth can return the latest block number. Get the latest block number', async () => {
      // const actual =
      const expected = await getBlockNumber();
      expect(actual).to.equal(expected);
    });
  });
});
