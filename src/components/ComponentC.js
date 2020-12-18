import React,{useContext} from 'react'
import ComponentE from './ComponentE'
import {userContext,channelContext} from '../App'

function ComponentC() {
    const user = useContext(userContext)
    const channel = useContext(channelContext)
    return (
        <div>
            {/* <ComponentE/> */}
            {user}-{channel}
        </div>
    )
}

export default ComponentC
