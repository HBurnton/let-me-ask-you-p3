import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_QUESTIONS } from '../utils/queries';

import '../assets/css/Home.css';
import { Banner } from '../components/Banner';
import { AddPost } from '../components/AddPost';
import { Posts } from '../components/Posts';



export const Home = () => {
  const { loading, data } = useQuery(QUERY_QUESTIONS);

  return (
    <div>
      <Banner />
      <AddPost />
      {loading ? <h1>Loading.....</h1> : <Posts postData={data} />}
    </div>
  );
}




