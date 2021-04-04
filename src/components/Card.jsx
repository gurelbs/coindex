import React from 'react'

function Card({data}) {
    return (
        <div>
            <p>{data.id}</p>
            <img src={data.image.large}></img>
            <p>{data.symbol}</p>

        </div>
    )
}

export default Card
