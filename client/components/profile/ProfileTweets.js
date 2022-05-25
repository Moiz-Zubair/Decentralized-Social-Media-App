import Post from '../Post'

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }
  

const ProfileTweets = () => {
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


    return ( 
        <div className={style.wrapper}>
      {tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName={tweet.displayName}
          userName={`${tweet.userName.slice(
            0,
            4,
          )}...${tweet.userName.slice(41)}`}
          text={tweet.text}
          avatar={tweet.avatar}
          timestamp={tweet.timestamp}
          isProfileImageNft={tweet.isProfileImageNft}
        />
      ))}
    </div>
     );
}
 
export default ProfileTweets;