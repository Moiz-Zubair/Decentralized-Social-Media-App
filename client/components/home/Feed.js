// import { useContext, useEffect } from 'react'
// import { TwitterContext } from '../../context/TwitterContext'
import TweetBox from './TweetBox'
import Post from '../Post'
import { BsStars } from 'react-icons/bs'

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] `,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

// interface Tweet {
//   author: TweetAuthor
//   tweet: string
//   timestamp: string
// }

// interface TweetAuthor {
//   name: string
//   walletAddress: string
//   profileImage: string
//   isProfileImageNft: boolean
// }

function Feed() {
//   const { tweets } = useContext(TwitterContext)
const tweets = [
    {
        displayName:'Moiz Zubair',
        userName:'0x8Cd390snsfe8f9f3f39f3fD',
        text:'Good Morning',
        isProfileImageNft:'false',
        timestamp:'2020-06-01T12:00:00.000Z',
        avatar:'https://pbs.twimg.com/profile_images/1178021444976021504/U5asm5Tb_400x400.jpg'
    },
    {
        displayName:'Afnan',
        userName:'0x8Cd390snsfe8f9f3f39f3fD',
        text:'Good Morning',
        isProfileImageNft:'false',
        timestamp:'2020-06-01T12:00:00.000Z',
        avatar:'https://pbs.twimg.com/profile_images/1132217502635843585/1wbCaSXd_400x400.jpg'
    },
    {
        displayName:'Afnan',
        userName:'0x8Cd390snsfe8f9f3f39f3fD',
        text:'Good Morning',
        isProfileImageNft:'false',
        timestamp:'2020-06-01T12:00:00.000Z',
        avatar:'https://pbs.twimg.com/profile_images/1132217502635843585/1wbCaSXd_400x400.jpg'
    },
    {
        displayName:'Afnan',
        userName:'0x8Cd390snsfe8f9f3f39f3fD',
        text:'Good Morning',
        isProfileImageNft:'false',
        timestamp:'2020-06-01T12:00:00.000Z',
        avatar:'https://pbs.twimg.com/profile_images/1132217502635843585/1wbCaSXd_400x400.jpg'
    }
]

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => (
        <Post
          key={index}
        //   displayName={
        //     tweet.author.name === 'Unnamed'
        //       ? `${tweet.author.walletAddress.slice(
        //           0,
        //           4,
        //         )}...${tweet.author.walletAddress.slice(41)}`
        //       : tweet.author.name
        //   }
        //   userName={`${tweet.author.walletAddress.slice(
        //     0,
        //     4,
        //   )}...${tweet.author.walletAddress.slice(41)}`}
          displayName={tweet.displayName}
          userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`}
          text={tweet.text}
          avatar={tweet.avatar}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default Feed