import React from 'react';
import Abc from '@/components/Abc/abc.js'
import {
  Link
} from "react-router-dom";
const Home = () => {
  return (
    <>
      <Link to='/about'>about</Link>
      <Abc />
      <div>9876</div>
    </>
  )
}
export default Home