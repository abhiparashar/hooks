import React from 'react'
import {userContext,channelContext} from '../App'

function ComponentF() {
    return (
        <div>
            <userContext.Consumer>
                {
                    user=>{
                        return (
                            <channelContext.Consumer>
                                {
                                    channel=>{
                                        return <div>User Context value {user}, Channel conext value {channel}</div>
                                    }
                                }
                            </channelContext.Consumer>
                        )
                    }
                }
                </userContext.Consumer>
        </div>
    )
}

export default ComponentF
