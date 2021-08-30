const Migrations = artifacts.require('Migrations');
const VolcanoCoin = artifacts.require('VolcanoCoin');

module.exports = async function (deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(VolcanoCoin);
};
