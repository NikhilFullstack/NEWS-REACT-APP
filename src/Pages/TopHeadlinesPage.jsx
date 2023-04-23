import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'

function TopHeadlinesPage() {
  

  return (
    <div>
      <Header/>
      <div>
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  );
}

export default TopHeadlinesPage;
