import React from 'react'
import Navbar from './Navbar.jsx'

import AlbumItem from './AlbumItem.jsx'

import SongItem from './SongItem.jsx'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext.jsx'

const DisplayHome = () => {

  const {songsData,albumsData} = useContext(PlayerContext)
  return (
    <>
    <Navbar />
    <div className="mb-4">
      <h1 className="my-6 font-bold text-2xl ">
        Featured Charts
      </h1>
    <div className="flex overflow-auto ">
      {albumsData.map((item,index) =>(<AlbumItem id={item._id} name ={item.name}  image ={item.image} desc = {item.desc}/>)

      )}
      </div>
      

    </div>
    <div className="mb-4">
      <h1 className="my-6 font-bold text-2xl ">
        Todays Biggest Hits
      </h1>
    <div className="flex overflow-auto ">
      {songsData.map((item,index) => (<SongItem id={item._id} name={item.name} desc={item.desc} image ={item.image}/>))}

 
    </div>
    </div>
    
    </>
      
    
  )
}

export default DisplayHome
