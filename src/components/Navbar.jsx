import React from "react"
import { Link } from "gatsby"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Cursos", href: "/cursos" },
]
// Si haces de nuevo el dropdown recuerda que tiene que llevar un input en hidden y un label antes
// con el tabIndex en 0 para que que pueda ver el cuadro.
const Navbar = () => {
  return (
    <nav className="sm:fixed w-full z-50 bg-gray-800">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="fixed bottom-0 right-0 h-16 w-16 z-50 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <div className="dropdown dropdown-top dropdown-end">
              <label tabIndex="0" className="btn btn-circle swap swap-rotate">
                <input type="checkbox" className="hidden" />
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                <div className="swap-on">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" fill-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <ul className="dropdown-content menu p-0 shadow bg-base-100 rounded-box w-30 ">
                    {navigation.map((a, i) => (
                      <li key={i} className=" text-black">
                        <Link to={a.href} activeClassName={"text-yellow-500"}>
                          {a.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </label>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center sm:justify-between">
            <div className="flex-shrink-0 flex items-center">
              <Link
                className="p-1 block lg:hidden h-15 w-auto font-['Exo'] bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-400 text-5xl font-semibold"
                alt="J99"
                to={navigation[0].href}
              >
                J99
              </Link>
              <Link
                to={navigation[0].href}
                className="p-1 hidden lg:block h-15 w-auto font-['Exo'] bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-400  text-3xl font-bold"
                alt="Javicode99"
              >
                Javicode99
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex justify-center space-x-10 ">
                {navigation.map((a, i) => (
                  <Link
                    key={i}
                    to={a.href}
                    className={
                      "text-white text-1xl font-bold hover:text-yellow-300 "
                    }
                    activeClassName={"text-yellow-500"}
                  >
                    {a.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
