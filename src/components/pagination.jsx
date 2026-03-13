import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Pagination = ({ pagination, searchText }) => (
  <div className="flex self-center">
    <nav aria-label="Pagination" className="inline-flex text-sm">
      <Link
        href={`?page=${pagination.page > 1 ? pagination.page - 1 : 1}&searchText=${searchText}`}
        className="rounded-l-md px-2 py-2 text-neutral-400 inset-ring inset-ring-neutral-400"
      >
        <ChevronLeftIcon className="size-5" />
      </Link>

      {[...Array(pagination.pageCount)].map((_, i) => (
        <Link
          key={i}
          href={`?page=${i + 1}&searchText=${searchText}`}
          className={`px-4 py-2 text-neutral-400 inset-ring inset-ring-neutral-400 ${pagination.page === i + 1 ? "bg-orange-600" : ""}`}
        >
          <span
            className={`${pagination.page === i + 1 ? "text-foreground" : ""}`}
          >
            {i + 1}
          </span>
        </Link>
      ))}

      <Link
        href={`?page=${pagination.pageCount > pagination.page ? pagination.page + 1 : pagination.pageCount}&searchText=${searchText}`}
        className="rounded-r-md px-2 py-2 text-neutral-400 inset-ring inset-ring-neutral-400"
      >
        <ChevronRightIcon className="size-5" />
      </Link>
    </nav>
  </div>
);

export default Pagination;
