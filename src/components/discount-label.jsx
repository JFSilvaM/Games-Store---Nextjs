import { TagIcon } from "@heroicons/react/24/solid";

const DiscountLabel = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-l-md rounded-tr-md bg-orange-600 px-2 py-0.5 text-sm font-semibold">
    <TagIcon className="h-3.5 w-3.5" />
    {children}
  </span>
);

export default DiscountLabel;
