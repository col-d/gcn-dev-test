import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon, SearchIcon, HomeIcon, VideoCameraIcon } from '@heroicons/react/outline'
import Image from 'next/image'

interface NavigationLink {
  name: string,
  href: string
  current: boolean,
  icon?: string,
  image?: string,
  classes?: string
}

const navigationLinks: NavigationLink[] = [
  { name: 'Home', href: '#', current: true, icon: "home" },

  { name: 'GCN Show', href: '#', current: false, image: "/GCNLogo.jpeg" },
  { name: 'How To', href: '#', current: false, image: "/GCNLogo.jpeg", classes: "pl-8" },
  { name: 'Ask GCN', href: '#', current: false, image: "/GCNLogo.jpeg", classes: "pl-8" },
  { name: 'Features', href: '#', current: false, image: "/GCNLogo.jpeg", classes: "pl-8" },
  { name: 'Top 10s', href: '#', current: false, image: "/GCNLogo.jpeg", classes: "pl-8" },

  { name: 'GCN Tech', href: '#', current: false, image: "/GCNTech.jpeg" },
  { name: 'Maintenance', href: '#', current: false, image: "/GCNTech.jpeg", classes: "pl-8" },

  { name: 'GCN Racing', href: '#', current: false, image: "/GCNRacing.jpeg" },
  { name: 'Training', href: '#', current: false, image: "/GCNTraining.jpeg" },


  { name: 'Presenters', href: '#', current: false },
  { name: 'Conor Dunne', href: '#', current: false, image: "/presenters/Conor.jpeg" },
  { name: 'Daniel Lloyd', href: '#', current: false, image: "/presenters/Dan.jpeg" },
  { name: 'James Lowsley-Williams', href: '#', current: false, image: "/presenters/James.jpeg" },
  { name: 'Jon Cannings', href: '#', current: false, image: "/presenters/Jon.jpeg" },
  { name: 'Manon Lloyd', href: '#', current: false, image: "/presenters/Manon.jpeg" },
  { name: 'Oliver Bridgewood', href: '#', current: false, image: "/presenters/Oli.jpeg" },
  { name: 'Simon Richardson', href: '#', current: false, image: "/presenters/Si.jpeg" },
  { name: 'Tom Last', href: '#', current: false, image: "/presenters/Lasty.jpeg" },
]

const navButtons = [
  { name: 'Events', href: '#' },
  { name: 'Club', href: '#' },
  { name: 'Shop', href: '#' },
  { name: 'YouTube', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function getIcon(icon: string) {
  const classes = "block h-6 w-6";

  switch (icon) {
    case "home":
      return (
        <HomeIcon className={classes} />
      )
    case "video":
      return (
        <VideoCameraIcon className={classes} />
      )
    case "x":
      return (
        <XIcon className={classes} />
      )
    case "menu":
      return (
        <MenuIcon className={classes} />
      )
    case "search":
      return (
        <SearchIcon className={classes} />
      )
  }
}


function getNavLink(item: NavigationLink) {
  return (
    <Disclosure.Button
      key={item.name}
      as="a"
      href={item.href}
      className={classNames(
        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'px-3 py-2 font-medium bg-black flex gap-2',
        item.classes ? item.classes : ''
      )}
      aria-current={item.current ? 'page' : undefined}
    >
      {item.icon &&
        getIcon(item.icon)
      }
      {item.image &&
        <Image
          className="h-8 w-8 rounded-full mr-2"
          src={item.image}
          width={24}
          height={24}
        />
      }
      <span>{item.name}</span>
    </Disclosure.Button>
  )
}

export const Header = () => {
  return (
    <header>
      {/* Top bar */}
      <div className="bg-primary h-12 flex items-center pl-2">
        <div className="w-24">
          <Image src="/GCNLogoTxt.svg" layout="responsive" width={96} height={48} />
        </div>
        <div className="absolute px-2 right-0 flex items-center gap-2">
          {navButtons.map(button => (
            <a href={button.href} key={button.name} className="p-1 rounded-md text-sm font-medium bg-white">
              {button.name}
            </a>
          ))}
        </div>
      </div>

      {/* Middle navigation bar */}
      <Disclosure as="nav" className="bg-black h-12">
        {({ open }) => (
          <>
            <div className="relative flex items-center h-12">

              <div className="absolute left-0 flex items-center sm:hidden">
                <Disclosure.Button className="p-2 text-white">
                  {open ? (
                    getIcon('x')
                  ) : (
                    getIcon('menu')
                  )}
                </Disclosure.Button>
              </div>

              <div className="absolute px-2 right-0 flex items-center gap-2">
                <Image src="/IconCrc_Facebook.png" width={24} height={24} />
                <Image src="/IconCrc_Twitter.png" width={24} height={24} />
                <Image src="/IconCrc_Instagram.png" width={24} height={24} />
              </div>

              <div className="hidden sm:block sm:ml-2">
                <div className="flex gap-2">
                  {navigationLinks.slice(0, 10).map(item => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="relative bg-black">
                <div className="border-b-2 border-gray-900">
                  {navigationLinks.slice(0, 10).map((item) => (
                    getNavLink(item)
                  ))}
                </div>
                <div className="border-b-4 border-black">
                  {navigationLinks.slice(10).map((item) => (
                    getNavLink(item)
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Bottom/search bar */}
      <div className="bg-gray-300 h-12 flex pl-2">
        <input className="border rounded rounded-r-none px-2 my-1 focus:outline-none" type="text" placeholder="Search for videos" />
        <button className="mr-2 my-1 text-white bg-primary p-2 rounded rounded-l-none">
          {getIcon('search')}
        </button>
      </div>

    </header>
  );
}