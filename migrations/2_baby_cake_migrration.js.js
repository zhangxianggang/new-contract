const IterableMapping = artifacts.require("IterableMapping");
const BABYCAKE = artifacts.require("BABYCAKE");

module.exports = async function (deployer) {
  await deployer.deploy(IterableMapping);
  await deployer.link(IterableMapping, BABYCAKE);
  await deployer.deploy(BABYCAKE);
};
