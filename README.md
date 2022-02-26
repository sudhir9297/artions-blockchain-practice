# Basic Sample Hardhat Project

This is a simple NFT market Place Project to create and buy NFT.

![image](https://user-images.githubusercontent.com/19578447/155855226-0dcf70a3-1067-4edf-9312-62837dd559e4.png)

you need to have an account of Infura and get a projectId from it and Add it in .env as projectId='your project ID'

also use privateKey from of your testing account and paste in
.secret file in Root

Now try it locally you need to run

```shell
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

after running above command you get two ID for nftaddress and nftMarketAddress copy & paste respectively in config.js

and now Run

```shell
npm run dev
```
