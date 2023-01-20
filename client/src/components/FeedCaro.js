import React from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import RecommendIcon from '@mui/icons-material/Recommend';

import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';




export const FeedCaro = () => {
    const trendingPosts = [
        {
            title: "are we living in a simulation?",
            username: "matrixBro1122",
            dateposted: "1/6/2023",
            views: 1.2,
            avatarurl: "https://cdna.artstation.com/p/assets/images/images/044/330/162/large/henry-rblx-qsfqsfqsf.jpg?1639683320"
        },
        {
            title: "is tiktok ruining the music industry?",
            username: "THEbedroomproducer",
            dateposted: "1/11/2023",
            views: 3.5,
            avatarurl: "https://wallpapers.com/images/hd/emo-cartoon-hello-kitty-pfp-pen3utvx8q44uftn.jpg"
        },
        {
            title: "fried corndogs or fried oreos?",
            username: "itakefoodpics",
            dateposted: "1/9/2023",
            views: 2.5,
            avatarurl: "https://i.pinimg.com/736x/78/c5/ca/78c5caf0ef25f1ae672c7895495ddd4d.jpg"
        },
        {
            title: "how to impress a girl?",
            username: "schuyGuy11",
            dateposted: "1/3/2023",
            views: 9.2,
            avatarurl: "https://www.pngitem.com/pimgs/m/514-5145831_webarebears-panda-cn-cartoonnetwork-pfp-cute-panda.png"
        },
        {
            title: "tomato or tomato?",
            username: "trolLOLlord",
            dateposted: "12/26/2022",
            views: 4.9,
            avatarurl: "https://i.pinimg.com/736x/c8/1a/c5/c81ac51c21863b1c9251159b1ee59342.jpg"
        },
        {
            title: "are all sports rigged?",
            username: "fansportsFanatic44",
            dateposted: "1/15/2023",
            views: 1.7,
            avatarurl: "https://avatarfiles.alphacoders.com/329/329007.png"
        }
    ];
    
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


  return (
    <section className='skill' id='feedcaro'>
    <Container>
      <Row>
          <Col>
              <div className='skill-bx'>
                  <h2>
                      TRENDING POSTS
                  </h2>
                  <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        {trendingPosts.map((post, index) => {
                                return (
                                    <Card key={index} variant="outlined" className='card-box' sx={{ width: 320 }} {...post}>
                                    <CardOverflow>
                                        <AspectRatio ratio="2">
                                            <img
                                                src={trendingPosts.avatarurl}
                                                srcSet={trendingPosts.avatarurl}
                                                loading="lazy"
                                                alt=""
                                            />
                                        </AspectRatio>
                                        <IconButton
                                        aria-label="Like minimal photography"
                                        size="lg"
                                        variant="solid"
                                        color="danger"
                                        sx={{
                                            position: 'absolute',
                                            zIndex: 2,
                                            borderRadius: '50%',
                                            right: '1rem',
                                            bottom: 0,
                                            transform: 'translateY(50%)',
                                        }}
                                        >
                                        <RecommendIcon />
                                        </IconButton>
                                    </CardOverflow>
                                    <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                                        <Link href="#multiple-actions" overlay underline="none">
                                        {trendingPosts.username}
                                        </Link>
                                    </Typography>
                                    <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                                        <Link href="#multiple-actions">{trendingPosts.title}</Link>
                                    </Typography>
                                    <Divider inset="context" />
                                    <CardOverflow
                                        variant="soft"
                                        sx={{
                                        display: 'flex',
                                        gap: 1.5,
                                        py: 1.5,
                                        px: 'var(--Card-padding)',
                                        bgcolor: 'background.level1',
                                        }}
                                    >
                                        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                                        {trendingPosts.views}k views
                                        </Typography>
                                        <Divider orientation="vertical" />
                                        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                                        {trendingPosts.dateposted}
                                        </Typography>
                                    </CardOverflow>
                                    </Card>
                                    
                                )
                            })
                        }
                  </Carousel>
              </div>
          </Col>
      </Row>
    </Container>
      
    </section>
  )
}

