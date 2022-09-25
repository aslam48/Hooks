import React from 'react'
import { UserContext, ChannelContext } from '../App'

const ComponentF = () => {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return (
                    <ChannelContext.Consumer>
                        {
                            channel => {
                              return ( 
                              <div>
                                user contex value {user} and {channel}
                              </div>
                               )
                            }
                        }
                    </ChannelContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF