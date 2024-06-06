import React from 'react'
import Video from './Video'
import Lead from './Lead'

function Ends({ toggleDrawer, state }) {
    return (
        <div>
            <Video toggleDrawer={toggleDrawer} state={state} />
            <Lead />
        </div>
    )
}

export default Ends;