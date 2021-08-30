# Web3js exercises

## Introduction

In this exercise, we'll be familiarising ourselves with some commonly used methods in the web3js library.

This exercise has been written in the format of js tests. Don't worry if you aren't familiar with tests - an understanding isn't required for this exercise.

Follow the instructions below to start the exercises.

<div style='background-color:#FFF4DC; padding:0.5% 2%'>
<h3>Learning outcomes:</h3>
By the end of the exercise, you would have covered:
<br></br>
<li> Getting web3 accounts,
<li> Call and send methods from the contract,
<li> Making a transaction from one account to another,
<li> Calling functions inherited from ERC20,
<li> Methods for getting public variables,
<li> Using web3.eth and web3.utils,
<li> Subscribing to events.
    <br></br>
</div>

## Instructions

1. `$ cd materials/Week\ 3\ -\ web3_technologies/intro\ to\ web3/`
2. Run `ganache-cli` which will create a local blockchain and get 10 accounts with test ether to play with.

   ![](https://i.imgur.com/7LN2UEn.png)

3. In a separate terminal, `$ cd materials/Week\ 3\ -\ web3_technologies/intro\ to\ web3/`.

   Run `truffle compile`.

4. Run `truffle migrate --reset`.

5. Copy the contract address for **VolcanoCoin** (not Migrations) from the output.

   ![](https://i.imgur.com/K272pSw.png)

6. Paste the address in `test/volcanoCoin.test.js` at line 13.

   ![](https://i.imgur.com/nk3aTWu.png)

7. For each answer, uncomment the code (e.g. uncomment `const actual = `) and write your contract call. Please don't change the name of `actual` as this naming convention is required in order for the tests to work.
8. To run your tests, run `truffle test test/volcanoCoin.test.js` from the root folder.

   The testing framework checks whether your contracts need to be recompiled before running the tests. If your test passes, you will see a green tick. Otherwise you'll see a red cross, together with a statement explaining what the test expected `actual` to contain.

Some of the answers are in `answers.js`. Try exploring web3js without looking at the answers.

## Useful links

https://web3js.readthedocs.io/en/v1.3.4/index.html
