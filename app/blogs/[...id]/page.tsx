import React from 'react'

const IDPage = ({ params }: { params: { id: string } }) => {
    return (
        <div>IDPage {params.id}</div>
    )
}

export default IDPage