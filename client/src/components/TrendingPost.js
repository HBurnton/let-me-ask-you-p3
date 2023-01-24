import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import Logo from '../assets/images/lmay-logo.png';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export const TrendingPost = () => {
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
    <section className="skill" id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>
                            TRENDING
                        </h2>
                        <p>LMAY'S TOP QUESTIONS THIS WEEK</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="60"
                                    image="https://img.icons8.com/ios11/600/000000/1-c.png"
                                    alt="number 1"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        User1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        question goes here 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        VoteCount: 
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="60"
                                    image="https://img.icons8.com/material-outlined/384/2.png"
                                    alt="number 2"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        User2
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        question goes here 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        VoteCount: 
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="60"
                                    image="https://img.icons8.com/ios-glyphs/480/3.png"
                                    alt="number 3"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        User3
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        question goes here 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        VoteCount: 
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="60"
                                    image="https://img.icons8.com/ios11/600/000000/1-c.png"
                                    alt="number 1"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        User1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        question goes here 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        VoteCount: 
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="60"
                                    image="https://img.icons8.com/ios11/600/000000/1-c.png"
                                    alt="number 1"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        User1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        question goes here 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        VoteCount: 
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="60"
                                    image="https://img.icons8.com/ios11/600/000000/1-c.png"
                                    alt="number 1"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        User1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        question goes here 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        VoteCount: 
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}