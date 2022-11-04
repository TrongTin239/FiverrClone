import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

export default function CommentLogin({}: Props) {
    const navigate = useNavigate()
  return (
    <div className='cmt-login'>
      <div className="text"
      onClick={() =>{
        navigate("/login")
      }}
      >
       <p>Login for comment!</p>
      </div>
    </div>
  )
}