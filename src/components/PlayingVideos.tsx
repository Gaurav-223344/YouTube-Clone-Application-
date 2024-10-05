import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchData } from "../utils/rapidapi"
import ReactPlayer from "react-player"
import { BsFillCheckCircleFill } from "react-icons/bs"
import { abbreviateNumber } from "js-abbreviation-number"


function PlayingVideos() {
  const [video, setVideo] = useState()
  const [relatedVideo, setRelatedVideo] = useState()

  const { id } = useParams()

  useEffect(() => {
    fetchVideoDetails()
    fetchRelatedVideoDetails()
  }, [id])


  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`)
      .then((res) => {
        console.log(res)
        setVideo(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }


  // const fetchRelatedVideoDetails = () => {
  //   fetchData(`video/related-contents/?id=${id}`)
  //     .then((res) => {
  //       console.log(res)
  //       setRelatedVideo(res.contents)
  //     })
  //     .catch((err) => {
  //       console.error(err)
  //     })
  // }

  console.log(video)



  return (
    <div className='flex justify-center flex-row h-[calc(100%-56px)] mt-16'>
      <div className="w-full max-w-[1580px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-400px)] xl:w-[100%-450px] px-4 py-3 lg:py-6">
          <div className="h-[200px] md:h-[500px] w-100% ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width={"100%"}
              style={{ backgroundColor: "#000000" }}
              playing={true} />
          </div>
          <div className='overflow-hidden'>
            <span className='text-sm font-bold line-clamp-2'>
              {video?.title}
            </span>
            <span className='flex items-center font-semibold mt-2 text-[12px] text-gray-500'>
              {video?.author?.title}
              {
                video?.author?.badges[0]?.type === "VERIFIED_CHANNEL"
                && <BsFillCheckCircleFill className='text-gray-600 ml-1 text-[12px]' />
              }
            </span>
            <div className='flex items-center text-gray-500 text-[12px]'>
              <span>
                {video?.stats?.views && `${abbreviateNumber(
                  video?.stats?.views, 2
                )} views`}
              </span>
              <span className='flex text-[24px] loading-none font-bold relative top-[-10px] mx-1'>
                {video?.stats?.views && "."}
              </span>
              <span>
                {video?.publishedTimeText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayingVideos