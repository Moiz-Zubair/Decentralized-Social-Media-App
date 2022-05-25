require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby:{
      url: 'https://eth-rinkeby.alchemyapi.io/v2/-T_GER8ajh_ELOj2sQIP_yjNYnJW_axt',
      accounts: [
        'a879ac8156cb2b87bd798c755acaaabe8ed85e98147bf583dad1436b8eafc62a'
      ]
    }
  }
};

//npx hardhat run scripts/deploy.js --network rinkeby 
//run karnay kay liya minimum 0.04 eth required hai so skiping on to the next task