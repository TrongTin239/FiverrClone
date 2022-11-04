import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

type Props = {}

export default function CommentLogin({}: Props) {
    const navigate = useNavigate()
  return (
    <div className='cmt-login'>
      <div className="text"
    
      >
       <NavLink to={"/login"} target={"_parent"}>Login for comment!</NavLink>
      </div>
    </div>
  )
}