"use client";

import { useAuth } from "@/hooks/use-auth";
import {
  addGameToWishlist,
  deleteGameFromWishlist,
  wishlistCheck,
} from "@/lib/wishlist";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const WishlistButton = ({ gameData, removeCallback, className }) => {
  const { user } = useAuth();

  const [hasWishlist, setHasWishlist] = useState([]);

  const addWishlist = async () => {
    const response = await addGameToWishlist(user.id, gameData.documentId);
    setHasWishlist([response.data]);
  };

  const deleteWishlist = async () => {
    try {
      await deleteGameFromWishlist(hasWishlist[0].documentId);
      setHasWishlist([]);

      if (removeCallback) removeCallback();
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const wishlistCheckRes = await wishlistCheck(user.id, gameData.id);
        setHasWishlist(wishlistCheckRes.data);
      } catch (error) {
        throw error;
      }
    })();
  }, [gameData]);

  return hasWishlist.length ? (
    <HeartIcon
      onClick={deleteWishlist}
      className={`cursor-pointer text-orange-600 hover:opacity-60 ${className}`}
    />
  ) : (
    <HeartIconOutline
      onClick={addWishlist}
      className={`cursor-pointer text-orange-600 hover:opacity-60 ${className}`}
    />
  );
};

export default WishlistButton;
