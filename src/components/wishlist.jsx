import { HeartIcon } from "@heroicons/react/24/solid";

const Wishlist = ({ gameId, className }) => (
  <HeartIcon
    className={`cursor-pointer text-orange-600 hover:opacity-60 ${className}`}
  />
);

export default Wishlist;
