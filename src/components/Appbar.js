import { Disclosure } from "@headlessui/react";
import { BsXLg } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Properties", href: "#" },
  { name: "Agents", href: "#" },
  { name: "Blog", href: "#" },
];

const Appbar = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="sm:container w-4/5 mx-auto">
            <div className="relative flex items-center h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-3 rounded-full shadow text-cyan-600 bg-white hover:text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <BsXLg className="block h-4 w-4" aria-hidden="true" />
                  ) : (
                    <AiOutlineMenu
                      className="block h-4 w-4"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="w-full flex items-center justify-between">
                <img
                  className="h-8 w-auto"
                  src="https://i.ibb.co/crgHJXC/logo.png"
                  alt="logo"
                />
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-black-300 hover:bg-cyan-600 hover:text-white block px-3 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {item.name}
                      </a>
                    ))}
                    <button class="rounded-full bg-cyan-700 text-white px-8">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-gray-100 px-8">
            <div className="px-2 pt-2 pb-3 space-y-1 text-center">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="text-black-300 hover:bg-cyan-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <button class="rounded-full bg-cyan-700 text-white px-8">
                Login
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Appbar;
