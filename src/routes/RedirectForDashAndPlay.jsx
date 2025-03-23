import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

export const RedirectForDashAndPlay = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("https://mihajlo252.github.io/dash-and-play");
    }, [])
  return (
    <div>Hold on!</div>
  )
}
