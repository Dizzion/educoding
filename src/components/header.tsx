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
} from '@headlessui/react'
import {
    ArrowsRightLeftIcon,
    Bars3Icon,
    ChevronDoubleDownIcon,
    CircleStackIcon,
    ClipboardDocumentIcon,
    CodeBracketIcon,
    CodeBracketSquareIcon,
    CubeIcon,
    Square3Stack3DIcon,
    SquaresPlusIcon
} from '@heroicons/react/24/outline';

const modules = [
    {name: 'Algorithms', description: 'Learn Efficency through algorithms!', href: '/Dashboard/Algorithms', icon: CodeBracketIcon},
    {name: 'Data Structures', description: 'Learn how to structure your data!', href: '/Dashboard/DataStructures', icon: CodeBracketSquareIcon},
    {name: 'Data Types', description: 'Learn the many types of data!', href: '/Dashboard/DataTypes', icon: CircleStackIcon},
    {name: 'Functional Programming', description: 'Learn recursion through functional programming!', href: '/Dashboard/FP', icon: Square3Stack3DIcon},
    {name: 'Functions', description: 'Learn what it means to create a function!', href: '/Dashboard/Functions', icon: SquaresPlusIcon},
    {name: 'InNOut', description: 'Learn how to utilize Inputs and Outputs!', href: '/Dashboard/InNOut', icon: ArrowsRightLeftIcon},
    {name: 'Object Oriented Programming', description: 'Learn all the properties that make up Object Oriented Programing!', href: '/Dashboard/OOP', icon: CubeIcon},
    {name: 'Variables', description: 'Work with variable and the different variable types!', href: '/Dashboard/Variables', icon: ClipboardDocumentIcon}
]

export default function Header () {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Edu Coding</span>
                        <img src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" className="h-8 w-auto"/>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex intems-center justify-center rounded-md p-2.5 text-grey-700">
                        <span className="sr-only">Open Module List</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-grey-900">
                            <ChevronDoubleDownIcon aria-hidden="true" className="h-5 w-5 flex-none test-grey-400"/>
                        </PopoverButton>
                        <PopoverPanel transition className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-grey-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
                            <div className="p-4">

                            </div>
                        </PopoverPanel>
                    </Popover>
                </PopoverGroup>
            </nav>
        </header>
    );
}