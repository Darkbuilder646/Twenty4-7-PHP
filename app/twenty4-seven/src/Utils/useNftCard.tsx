import React from "react";
import * as fakeImages from "../Data/fakeNft"

const useNftCard = () => {
  const getImageFromId = (id: number): string => {
    switch (id) {
      case 0:
        return fakeImages.fakeDirtImage;
      case 1:
        return fakeImages.fakeObsidianImage;
      case 2:
        return fakeImages.fakePumkingImage;
      case 3:
        return fakeImages.fakeTinImage;
      case 4:
        return fakeImages.fakeIronImage;
      case 5:
        return fakeImages.fakeGoldImage;
      case 6:
        return fakeImages.fakeRestoneImage;
      case 7:
        return fakeImages.fakeDiamondImage;
      case 8:
        return fakeImages.fakeSeleniteImage;
      case 9:
        return fakeImages.fakeEmeraldImage;
      case 10:
        return fakeImages.fakeRubyImage;
      case 11:
        return fakeImages.fakeAmethystImage;

      default:
        return "https://placehold.co/512?text=Nft";
    }
  };

  return {
    getImageFromId,
  };
};

export default useNftCard;
