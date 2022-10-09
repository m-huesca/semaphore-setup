require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
};
require("@nomiclabs/hardhat-waffle")
require("@semaphore-protocol/hardhat")
require("./tasks/deploy") // Your deploy task.

module.exports = {
    solidity: "0.8.4"
}