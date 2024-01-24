import { Disclosure, Transition } from "@headlessui/react";
import { RiArrowRightLine, RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-secondary-100 p-8 rounded-lg">
        {/*  Title card */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-white text-xl md:text-2xl"> Polular tickets</h1>
          <Link to="" className="flex items-center gap-2 text-primary">
            Support <RiArrowRightLine />
          </Link>
        </div>
        {/* Content card */}
        <div>
          <Disclosure>
            <Disclosure.Button className="py-2 text-sm lg:text-lg flex flex-wrap md:items-center gap-4">
              {" "}
              <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />
              What admin theme does?
              <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                React
              </span>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                By Keenthemes to save tons and more to time money projects are
                listed and outstanding{" "}
                <Link to="/" className="text-primary">
                  Check Out
                </Link>
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="py-2 text-sm lg:text-lg flex flex-wrap md:items-center gap-4">
              <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />
              How Extended Licese works?
              <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                Laravel
              </span>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                By Keenthemes to save tons and more to time money projects are
                listed and outstanding{" "}
                <Link to="/" className="text-primary">
                  Check Out
                </Link>
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="py-2 text-sm lg:text-lg flex flex-wrap md:items-center gap-4">
              <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />
              How to install on a local machine?
              <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                VueJS
              </span>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                By Keenthemes to save tons and more to time money projects are
                listed and outstanding{" "}
                <Link to="/" className="text-primary">
                  Check Out
                </Link>
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="py-2 text-sm lg:text-lg flex flex-wrap md:items-center gap-4">
              <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />
              How can I import Google fonts?
              <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                Angular
              </span>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                By Keenthemes to save tons and more to time money projects are
                listed and outstanding{" "}
                <Link to="/" className="text-primary">
                  Check Out
                </Link>
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
        </div>
      </div>
      <div className="bg-secondary-100 p-8 rounded-lg">
        {/*  Title card */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-white text-2xl">FAQ</h1>
          <Link to="" className="flex items-center gap-2 text-primary">
            All FAQ <RiArrowRightLine />
          </Link>
        </div>
        {/* Content card */}
        <div>
          <Disclosure>
            <Disclosure.Button className="py-2 text-sm lg:text-lg flex flex-wrap md:items-center gap-4">
              <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />
              What admin theme does?
              <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                React
              </span>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                By Keenthemes to save tons and more to time money projects are
                listed and outstanding{" "}
                <Link to="/" className="text-primary">
                  Check Out
                </Link>
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="py-2 text-sm lg:text-lg flex flex-wrap md:items-center gap-4">
              <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />
              How Extended Licese works?
              <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                Laravel
              </span>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                By Keenthemes to save tons and more to time money projects are
                listed and outstanding{" "}
                <Link to="/" className="text-primary">
                  Check Out
                </Link>
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="py-2 text-sm lg:text-lg flex flex-wrap md:items-center gap-4">
              <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />
              How to install on a local machine?
              <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                VueJS
              </span>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                By Keenthemes to save tons and more to time money projects are
                listed and outstanding{" "}
                <Link to="/" className="text-primary">
                  Check Out
                </Link>
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="py-2 text-sm lg:text-lg flex flex-wrap md:items-center gap-4">
              <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />
              How can I import Google fonts?
              <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                Angular
              </span>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                By Keenthemes to save tons and more to time money projects are
                listed and outstanding{" "}
                <Link to="/" className="text-primary">
                  Check Out
                </Link>
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default Overview;
