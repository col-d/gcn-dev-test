import { Video as VideoInterface } from "../pages/api/videos"

function formatDate(date: string) {
    let dateObj = new Date(date)

    return new Intl.DateTimeFormat(
        'en-GB',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
    ).format(dateObj)
}

export const Video = ({ _id: id, title, publishDate }: VideoInterface) => {
  return (
    <div className="flex m-3 justify-center">
        <div className="flex-col w-96">
            <img className="w-full" src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} />
            <div className="font-bold">{formatDate(publishDate)}</div>
            <div className="">{title}</div>
        </div>
    </div>
  )
}