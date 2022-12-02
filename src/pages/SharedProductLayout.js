import React from 'react'
import {Outlet} from 'react-router-dom';
import StyledNavbar from '../components/StyledNavbar';

function SharedProductLayout() {
  return (
    <>
    <h2>products</h2>
    <Outlet/>
    </>
  )
}

export default SharedProductLayout