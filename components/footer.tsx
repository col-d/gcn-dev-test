import Image from 'next/image'

export const Footer = () => {
  return (
    <div className="bg-black w-full bottom-0 text-white p-2">
      <div className="flex justify-between">
        <div className="w-28">
          <Image src="/GCNLogo.svg" layout="responsive" width={96} height={48} />
        </div>
        <div className="px-2 flex items-center gap-2">
          <Image src="/IconCrc_Facebook.png" width={24} height={24} />
          <Image src="/IconCrc_Twitter.png" width={24} height={24} />
          <Image src="/IconCrc_Instagram.png" width={24} height={24} />
        </div>
      </div>
    </div>
  )
}