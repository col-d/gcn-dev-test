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

export const Video = ({ _id: id, title, publishDate, small }: VideoInterface) => {
    let url = `https://img.youtube.com/vi/${id}/mqdefault.jpg`
    let content

    if (small) {
        content = <div className="grid grid-cols-2 gap-2 lg:flex-col lg:w-96">
            <img className="" src={url} />
            <div>
                <div className="font-bold text-sm">{formatDate(publishDate)}</div>
                <div className="text-sm">{title}</div>
            </div>
        </div>
    } else {
        content = <div className="flex-col w-96">
            <img className="w-full" src={url} />
            <div className="font-bold">{formatDate(publishDate)}</div>
            <div className="">{title}</div>
        </div>
    }

    return (
        <div className="flex m-3 justify-center">
            {content}
        </div>
      )
  }