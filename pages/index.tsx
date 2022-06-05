import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import { Video as VideoInterface } from '../pages/api/videos'
import { Video } from '../components/video'

const Home: NextPage = () => {
  const [data, setData] = useState<VideoInterface[]>([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetch('api/videos')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="lg:flex lg:flex-wrap lg:justify-center lg:gap-2">
      {data.map(video => (
        <Video { ...video } />
      ))}
    </div>
  )
}

export default Home
