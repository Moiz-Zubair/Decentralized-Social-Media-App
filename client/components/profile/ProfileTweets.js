import { useEffect, useContext, useState } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import Post from '../Post'

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }


const ProfileTweets = () => {
  const {currentAccount, currentUser} = useContext(TwitterContext)
  return (
    <div className={style.wrapper}>
      {currentUser.tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            currentUser.name === 'Unnamed'
              ? `${currentAccount.slice(
                  0,
                  4,
                )}...${currentAccount.slice(-4)}`
              : currentUser.name
          }
          userName={`${currentAccount.slice(
            0,
            4,
          )}...${currentAccount.slice(-4)}`}
          text={tweet.tweet}
          avatar={currentUser.profileImage}
          timestamp={tweet.timestamp}
          isProfileImageNft={currentUser.isProfileImageNft}
        />
      ))}
    </div>



     );
}
 
export default ProfileTweets;

/*
  
const tweets = [
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
*/