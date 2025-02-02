import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = ({ setMobileMenuOpen, navigation }) => {
  return (
    <nav className="flex items-center justify-between p-6 lg:px-8 font-sans">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <h1 className="h-8 w-auto font-semibold text-2xl text-white">
            FloodRelief
          </h1>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-md font-semibold text-white"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
