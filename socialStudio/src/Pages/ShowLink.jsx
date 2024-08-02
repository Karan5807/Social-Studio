import React from 'react'

const ShowLink = () => {
    const Data = localStorage.getItem("Data");
    console.log(Data);
    
  return (
    <div className='container'>
        <ul>
            {/* {Data.map((item,idx)=>(
                <li key={idx}>{<a href={item.Link}>{item.Title}</a>}</li>
            ))} */}
        </ul>
    </div>
  )
}

export default ShowLink;