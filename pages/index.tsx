import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { Video as VideoInterface } from '../pages/api/videos'
import { Video } from '../components/video'

const Home: NextPage = () => {
  const [data, setData] = useState<VideoInterface[]>([])

  useEffect(() => {
    fetch('api/videos')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  return (
    <div className="lg:flex lg:flex-wrap lg:justify-center lg:gap-2">

      <div className="p-3 pb-2 lg:hidden">
       <span className="text-4xl">Latest videos</span>
      </div>

      <hr className="lg:hidden"/>

      {data.slice(0, 3).map((video) => (
        <Video { ...video } small={false} />
      ))}

      <hr className="lg:hidden"/>

      {data.slice(4).map((video, ind) => (
        <Video { ...video } small={true} />
      ))}

      <hr className="lg:hidden"/>

      <div className="flex justify-center w-full">
        <button className="bg-primary rounded px-3 py-2 m-2 text-white">Show more</button>
      </div>
    </div>
  )
}

export default Home
