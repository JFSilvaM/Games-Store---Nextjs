import { useAuth } from "@/hooks/use-auth";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import {
  ArrowRightStartOnRectangleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const SelectMenu = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const goToProfile = () => {
    if (!user) return router.push("/login");
    router.push("/profile");
  };

  const goToLogin = () => {
    if (!user) router.push("/login");
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <Listbox>
      <div className="relative">
        <ListboxButton
          onClick={goToLogin}
          className={`cursor-pointer p-1.5 outline-none ${user ? "rounded-lg border-2 border-neutral-800 bg-neutral-800 hover:border-orange-600" : "hover:text-orange-600"}`}
        >
          <UserIcon className="size-6" />
        </ListboxButton>

        <ListboxOptions
          hidden={!user}
          transition
          className="bg-foreground absolute right-0 z-10 mt-1 w-60 rounded-md py-1 text-neutral-800 outline-none data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0"
        >
          <ListboxOption
            onClick={goToProfile}
            className="relative flex cursor-pointer items-center gap-2 p-3.5 text-sm hover:bg-neutral-100 hover:text-orange-600"
          >
            <UserIcon className="size-4" />

            <span>Mi perfil</span>
          </ListboxOption>

          <ListboxOption
            onClick={handleLogout}
            className="relative flex cursor-pointer items-center gap-2 p-3.5 text-sm hover:bg-neutral-100 hover:text-orange-600"
          >
            <ArrowRightStartOnRectangleIcon className="size-4" />

            <span>Cerrar sesión</span>
          </ListboxOption>
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default SelectMenu;
