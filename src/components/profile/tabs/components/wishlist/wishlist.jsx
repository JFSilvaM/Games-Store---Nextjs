import NoResult from "@/components/no-result";
import GridGames from "@/components/profile/tabs/components/wishlist/components/grid-games";
import { useAuth } from "@/hooks/use-auth";
import { getWishlist } from "@/lib/wishlist";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const Wishlist = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  const onReload = () => setReload(!reload);

  useEffect(() => {
    (async () => {
      try {
        const response = await getWishlist(user.id);
        setWishlist(response.data);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    })();
  }, [reload]);

  return loading ? (
    <div className="flex justify-center py-4">
      <ArrowPathIcon className="size-6 animate-spin" />
    </div>
  ) : wishlist.length ? (
    <GridGames wishlist={wishlist} onReload={onReload} />
  ) : (
    <NoResult text="No tienes ningún juego en la lista de deseos" />
  );
};

export default Wishlist;
