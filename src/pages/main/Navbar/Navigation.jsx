import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
 
export default function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold hover:text-red-600 text-gray-700"
      >
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold hover:text-red-600 text-gray-700"
      >
        <a href="#" className="flex items-center">
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold hover:text-red-600 text-gray-700"
      >
        <a href="#" className="flex items-center">
          Projects
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]">
      <Navbar className="sticky z-10  max-w-full bg-gray-300 bg-opacity-100 border-none rounded-none px-8 pt-10 lg:px-12">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer  font-medium"
          >
            LOGO
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <div className="flex items-center gap-4">
            <div>
              <Button
                size="sm"
                variant="outlined"
                className="hidden lg:inline-block border-2 text-red-600 border-red-600 hover:border-red-700 hover:text-red-700"
              >
                <span><a href="src/assets/RESUME-EldrichJyuriSumabatTorcuator.pdf" target="_blank" rel="noopener noreferrer" download>Download CV</a></span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="">
            <Button fullWidth size="sm" className="">
              <span>Donwload CV</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>

    </div>
  );
}
