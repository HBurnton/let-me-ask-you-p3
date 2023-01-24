import {PostWidget} from "../components/utils/PostWidget";

export const Posts = () => {
  

    const posts = [
        {
            id: 1,
            description: "are we living in a simulation?",
            username: "matrixBro1122",
            dateposted: "1/6/2023",
            // views: 1.2,
            votes: 115,
            userPicturePath: "https://cdna.artstation.com/p/assets/images/images/044/330/162/large/henry-rblx-qsfqsfqsf.jpg?1639683320"
        },
        {
            id: 2,
            description: "is tiktok ruining the music industry?",
            username: "THEbedroomproducer",
            dateposted: "1/11/2023",
            // views: 3.5,
            votes: 321,
            userPicturePath: "https://wallpapers.com/images/hd/emo-cartoon-hello-kitty-pfp-pen3utvx8q44uftn.jpg"
        },
        {
            id: 3,
            description: "fried corndogs or fried oreos?",
            username: "itakefoodpics",
            dateposted: "1/9/2023",
            // views: 2.5,
            votes: 223,
            userPicturePath: "https://i.pinimg.com/736x/78/c5/ca/78c5caf0ef25f1ae672c7895495ddd4d.jpg"
        },
        {
            id: 4,
            description: "how to impress a girl?",
            username: "schuyGuy11",
            dateposted: "1/3/2023",
            // views: 9.2,
            votes: 912,
            userPicturePath: "https://www.pngitem.com/pimgs/m/514-5145831_webarebears-panda-cn-cartoonnetwork-pfp-cute-panda.png"
        },
        {
            id: 5,
            description: "tomato or tomato?",
            username: "trolLOLlord",
            dateposted: "12/26/2022",
            // views: 4.9,
            votes: 542,
            userPicturePath: "https://i.pinimg.com/736x/c8/1a/c5/c81ac51c21863b1c9251159b1ee59342.jpg"
        },
        {
            id: 6,
            description: "are all sports rigged?",
            username: "fansportsFanatic44",
            dateposted: "1/15/2023",
            views: 1.7,
            votes: 212,
            userPicturePath: "https://avatarfiles.alphacoders.com/329/329007.png"
        }
    ];
    
      
  
  



  return (
    <>
      {posts.map(
        ({
          id,
          username,
          description,
          userPicturePath,
          votes,
          comments,
        }) => (
          <PostWidget
            key={id}
            name={username}
            description={description}
            userPicturePath={userPicturePath}
            likes={votes}
            comments={comments}
            className= 'margin-posts'
          />
        )
      )}
    </>
  );
};

