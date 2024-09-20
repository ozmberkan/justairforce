import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Link } from "react-router-dom";

const MenuComponent = ({ tab }) => {
  return (
    <Menu>
      <MenuButton>{tab.title}</MenuButton>
      <Transition
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems
          anchor="bottom"
          className="bg-white dark:bg-neutral-600 dark:border-neutral-500 rounded-xl border p-3 flex flex-col gap-y-3 [--anchor-gap:2px] sm:[--anchor-gap:12px]"
        >
          {tab.options?.map((tab) => (
            <MenuItem key={tab.label}>
              <Link
                to={tab.href}
                className="block dark:text-white data-[focus]:bg-zinc-100 dark:data-[focus]:bg-neutral-500 p-3 text-sm rounded-md"
              >
                {tab.label}
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default MenuComponent;
