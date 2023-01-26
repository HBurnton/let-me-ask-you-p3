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

import { useQuery } from '@apollo/client';
import { QUERY_QUESTIONSBYVOTECOUNT } from '../utils/queries';


export const TrendingPost = () => {
    const { loading, data } = useQuery(QUERY_QUESTIONSBYVOTECOUNT);
    const questionList = data?.questionsByVoteCount || [];

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
                            {loading ? (
                                    <div>Loading...</div>
                                ) : (
                                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                            {questionList.map((question, id) => {
                                                return (

                                                    <Card key={id} sx={{ maxWidth: 345 }}>

                                                        <CardActionArea>
                                                            {/* <CardMedia
                                                            component="img"
                                                            height="60"
                                                            image="https://img.icons8.com/ios11/600/000000/1-c.png"
                                                            alt="number 1"
                                                            /> */}
                                                            <CardContent sx={{height: 175 }}>
                                                            <Typography gutterBottom variant="h5" component="div">
                                                            {question.questionText} 
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary">
                                                            {question.author.username}
                                                            </Typography>
                                                            </CardContent>
                                                            </CardActionArea>
                                                            <Typography variant="body2" color="text.secondary">
                                                               vote count: {question.voteCount} 
                                                            </Typography>
                                                    </Card>
                                            )})}                                 
                                        </Carousel>
                                    )
                            }
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}