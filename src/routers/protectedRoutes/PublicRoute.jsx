import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicRoute = () => {

    let {loggedInUser } = useSelector((store)=> store.auth);

    if(loggedInUser) return <Navigate to={'/main'} />

  return <Outlet/>
}

export default PublicRoute
