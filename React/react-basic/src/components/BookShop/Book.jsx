import React from 'react'

function Book({item}) {
    const {title, description} = item;
  return (
   <>
    <h3>{title}</h3>
    <p>{description}</p>
   </>
  )
}

export default Book