
import React from 'react'
import "./Card.css"

function Card({ title, deploymentLink }) {
  
  const handleImageClick = () => {
    window.open(deploymentLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="hovercard" onClick={handleImageClick} style={{ cursor: 'pointer' }}>
      </div>
    </div>
  )
}

export default Card