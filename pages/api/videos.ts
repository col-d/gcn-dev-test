// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const axios = require("axios").default

export interface Video {
  playlists: Array<string>,
  topics: Array<string>,
  public: boolean,
  description: string,
  urlTitle: string,
  _id: string,
  [key: string]: any
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Video[]>
) {
  const { data } = await axios.get("https://globalcyclingnetwork.com/api/devtask")
  res.status(200).json(data)
}
