"use client";

import { useAuth } from "@/hooks/use-auth";
import { Button } from "@headlessui/react";
import { UserIcon } from "@heroicons/react/24/outline";
import { DateTime } from "luxon";

const UserInfo = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center pt-16">
      <Button className="m-0 mb-5 flex h-28 w-28 cursor-auto items-center justify-center rounded-2xl bg-neutral-700 p-1.5">
        <UserIcon className="flex size-14 items-center justify-center" />
      </Button>

      <h3 className="mb-1 text-3xl">{user.username}</h3>

      <h4 className="mb-2.5 font-bold">{user.email}</h4>

      <p className="text-xs text-neutral-400">
        Miembro desde:{" "}
        {DateTime.fromISO(user.createdAt).toLocaleString(DateTime.DATE_FULL)}
      </p>
    </div>
  );
};

export default UserInfo;
