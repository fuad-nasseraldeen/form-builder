import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

interface DropdownProps {
    selectedOption: string;
    dropdownOptions: string[]
    setSelectedOption: (option: string) => void;
}


const Dropdown: React.FC<DropdownProps> = ({ selectedOption, dropdownOptions, setSelectedOption }) => {
    return (
        <Menu as="div" className="relative text-left " dir="rtl">
            <div>
                <Menu.Button className="inline-flex w-full align-middle gap-x-1.5 h-8 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {selectedOption}
                    <ChevronDownIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {dropdownOptions.map((option, index) => (
                            <Menu.Item key={index}>
                                {({ active }) => (
                                    <button
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm text-right'
                                        )}
                                        onClick={() => setSelectedOption(option)}
                                    >
                                        {option}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default Dropdown;
