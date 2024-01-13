import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



function LikesButton() {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(0)

  const handleLikeClick = () => {
    const heart = document.querySelector('.fa-heart')
    if (liked) {
      heart.classList.add('accent')
      setLikes(likes - 1) }
      else {
        setLikes(likes + 1)
        
        heart.classList.remove('accent')
      } 
    setLiked(!liked)
  }

  return (
      <span onClick={handleLikeClick} className="btn">
        {/* <i class="fa fa-heart bold" aria-hidden="true"></i>  */}
        <FontAwesomeIcon icon={faHeart} />
        <span className="btn--votes bold">{likes} Likes</span>
      </span>
  )
}

export default LikesButton
