"use client";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowsRightLeftIcon,
  Bars3Icon,
  ChevronDoubleDownIcon,
  ChevronDownIcon,
  CircleStackIcon,
  ClipboardDocumentIcon,
  CodeBracketIcon,
  CodeBracketSquareIcon,
  CubeIcon,
  Square3Stack3DIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const modules = [
  {
    name: "Algorithms",
    description: "Learn Efficency through algorithms!",
    href: "/Dashboard/Algorithms",
    icon: CodeBracketIcon,
  },
  {
    name: "Data Structures",
    description: "Learn how to structure your data!",
    href: "/Dashboard/DataStructures",
    icon: CodeBracketSquareIcon,
  },
  {
    name: "Data Types",
    description: "Learn the many types of data!",
    href: "/Dashboard/DataTypes",
    icon: CircleStackIcon,
  },
  {
    name: "Functional Programming",
    description: "Learn recursion through functional programming!",
    href: "/Dashboard/FP",
    icon: Square3Stack3DIcon,
  },
  {
    name: "Functions",
    description: "Learn what it means to create a function!",
    href: "/Dashboard/Functions",
    icon: SquaresPlusIcon,
  },
  {
    name: "InNOut",
    description: "Learn how to utilize Inputs and Outputs!",
    href: "/Dashboard/InNOut",
    icon: ArrowsRightLeftIcon,
  },
  {
    name: "Object Oriented Programming",
    description:
      "Learn all the properties that make up Object Oriented Programing!",
    href: "/Dashboard/OOP",
    icon: CubeIcon,
  },
  {
    name: "Variables",
    description: "Work with variable and the different variable types!",
    href: "/Dashboard/Variables",
    icon: ClipboardDocumentIcon,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-left justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Edu Coding</span>
            <img
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex intems-center justify-center rounded-md p-2.5 text-grey-700"
          >
            <span className="sr-only">Open Module List</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-grey-900">
              <ChevronDoubleDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none test-grey-400"
              />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-grey-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {modules.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-grey-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href="item.href"
                        className="block font-semibold text-grey-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-grey-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <a
            href="/Dashboard"
            className="text-sm font-semibold leading-6 text-grey-900"
          >
            Dashboard
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/Login"
            className="text-sm font-semibold leading-2 text-grey-900 px-4"
          >
            Login
          </a>
          <a
            href="/Signup"
            className="text-sm font-semibold leading-2 text-grey-900 px-4"
          >
            Signup
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10">
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-grey-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Edu Coding</span>
                <img alt="" src="" className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-grey-700"
              >
                <span>
                  <XMarkIcon aria-hidden="true" />
                </span>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-grey-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Modules
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {modules.map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <a
                    href="/Dashboard"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Dashboard
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="/Login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Login
                  </a>
                  <a
                    href="/Signup"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Signup
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  );
}
