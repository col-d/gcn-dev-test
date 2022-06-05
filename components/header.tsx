import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon, SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'

const navigationLinks = [
  { name: 'Home', href: '#', current: true },
  { name: 'GCN Show', href: '#', current: false },
  { name: 'GCN Tech', href: '#', current: false },
  { name: 'GCN Racing', href: '#', current: false },

  { name: 'How To', href: '#', current: false },
  { name: 'Maintenance', href: '#', current: false },
  { name: 'Ask GCN', href: '#', current: false },

  { name: 'Training', href: '#', current: false },
  { name: 'Features', href: '#', current: false },
  { name: 'Top 10s', href: '#', current: false },

  { name: 'Presenters', href: '#', current: false },
  { name: 'Conor Dunne', href: '#', current: false },
  { name: 'Daniel Lloyd', href: '#', current: false },
  { name: 'James Lowsley-Williams', href: '#', current: false },
  { name: 'Jon Cannings', href: '#', current: false },
  { name: 'Manon Lloyd', href: '#', current: false },
  { name: 'Oliver Bridgewood', href: '#', current: false },
  { name: 'Simon Richardson', href: '#', current: false },
  { name: 'Tom Last', href: '#', current: false },
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

export const Header = () => {
    return (
      <header>
        {/* Top bar */}
        <div className="bg-primary h-12 flex items-center pl-2">
          <div className="w-24">
            <Image src="/GCNLogoTxt.svg" layout="responsive" width={96} height={48} className="" />
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
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
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
                    {navigationLinks.slice(0, 4).map(item => (
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
                <div className="px-2 pt-2 pb-3 space-y-1 relative bg-black">
                  {navigationLinks.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 text-base font-medium bg-black'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Bottom/search bar */}
        <div className="bg-gray-300 h-12 flex justify-between pl-2">
          <input className="border rounded px-2 my-1 focus:outline-none" type="text" placeholder='Search for videos' />
          <button className='mr-2 my-1 text-white bg-primary p-2 rounded'>
            <SearchIcon width={24} height={24}/>
          </button>
        </div>

      </header>
    );
}