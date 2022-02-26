import Head from "next/head";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

import { nftaddress, nftmarketaddress } from "../config";

import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../artifacts/contracts/NFTMarket.sol/NFTMarket.json";

export default function Home() {
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");

  useEffect(() => {
    loadNFTs();
  }, []);

  async function loadNFTs() {
    const provider = new ethers.providers.JsonRpcProvider();
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      provider
    );

    const data = await marketContract.fetchMarketItems();

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );

    setNfts(items);
    setLoadingState("loaded");
  }

  async function buyNft(nft) {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);

    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    const transaction = await contract.createMarketSale(
      nftaddress,
      nft.tokenId,
      {
        value: price,
      }
    );
    await transaction.wait();
    loadNFTs();
  }

  // if (loadingState === "loaded" && !nfts.length)
  //   return (
  //     <h1 className="w-screen flex items-center justify-center  message">
  //       No items in marketplace
  //     </h1>
  //   );

  const nftList = [
    {
      image: "https://picsum.photos/200/200?random=1",
      name: "Art 1",
      description: "Lorem Ipsum",
      price: "2",
    },
    {
      image: "https://picsum.photos/200/200?random=2",
      name: "Art 2",
      description: "Lorem Ipsum",
      price: "2",
    },
    ,
    {
      image: "https://picsum.photos/200/200?random=3",
      name: "Art 3",
      description: "Lorem Ipsum",
      price: "2",
    },
    ,
    {
      image: "https://picsum.photos/200/200?random=4",
      name: "Art 4",
      description: "Lorem Ipsum",
      price: "2",
    },
    ,
    {
      image: "https://picsum.photos/200/200?random=5",
      name: "Art 5",
      description: "Lorem Ipsum",
      price: "2",
    },
    ,
    {
      image: "https://picsum.photos/200/200?random=6",
      name: "Art 6",
      description: "Lorem Ipsum",
      price: "2",
    },
    ,
    {
      image: "https://picsum.photos/200/200?random=7",
      name: "Art 7",
      description: "Lorem Ipsum",
      price: "2",
    },
    ,
    {
      image: "https://picsum.photos/200/200?random=8",
      name: "Art 7",
      description: "Lorem Ipsum",
      price: "2",
    },
    ,
    {
      image: "https://picsum.photos/200/200?random=9",
      name: "Art 8",
      description: "Lorem Ipsum",
      price: "2",
    },
    ,
    {
      image: "https://picsum.photos/200/200?random=10",
      name: "Art 9",
      description: "Lorem Ipsum",
      price: "2",
    },
  ];

  return (
    <div>
      <Head>
        <title>Arther</title>
        <meta name="description" content="Marketplace of NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center w-full">
        <div className="px-4" style={{ maxWidth: "1600px" }}>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 pt-4">
            {nftList.map((nft, i) => (
              <div
                key={i}
                className="w-60 h-80 border shadow rounded-xl overflow-hidden"
              >
                <img className="w-full h-40 object-cover" src={nft.image} />
                <div className="p-2">
                  <p
                    style={{ fontSize: "22px" }}
                    className="text-2xl font-semibold"
                  >
                    {nft.name}
                  </p>
                  <div style={{ overflow: "hidden" }}>
                    <p
                      className="text-gray-400 mb-2"
                      style={{ color: "#031e2d" }}
                    >
                      {nft.description}
                    </p>
                  </div>
                  <p
                    className="text-sm mb-2 font-bold"
                    style={{ color: "grey" }}
                  >
                    <span style={{ color: "#031e2d" }}>Price :</span>{" "}
                    {nft.price} MATIC
                  </p>{" "}
                  <button
                    className="w-full bg-pink-500 text-white font-bold py-2  rounded-full"
                    onClick={() => buyNft(nft)}
                    style={{ background: "#000" }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
