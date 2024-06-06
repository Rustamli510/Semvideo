import React, { useState } from 'react'
import Video from './Video'

function Ends({ toggleDrawer, state }) {
    return (
        <div>
            <Video toggleDrawer={toggleDrawer} state={state} />
        </div>
    )
}

export default Ends;