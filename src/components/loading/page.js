import React from 'react'

import MarioLoading from '../../assets/loading.gif';
import Image from "next/image";

const Loading = () => {
  return (
    <div className="loading">
      <Image src={MarioLoading}/>
    </div>
  )
}

export default Loading