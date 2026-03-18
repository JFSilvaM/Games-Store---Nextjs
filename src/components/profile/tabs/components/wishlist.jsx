import { useAuth } from "@/hooks/use-auth";
import { getWishlist } from "@/lib/wishlist";
import { useEffect, useState } from "react";

const Wishlist = () => {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getWishlist(user.id);
        setWishlist(response.data);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return <div>Wishlist</div>;
};

export default Wishlist;
