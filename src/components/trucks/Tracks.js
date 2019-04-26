import React, { Component } from 'react'
import {Consumer} from '../../context'
import Spinner from '../../assets/loading.gif'
import Truck from '../trucks/Truck'
export default class Tracks extends Component {

  render() {
    
    return (
      <Consumer>
          {value => {
              const {track_list,heading} = value
              if(track_list === undefined | track_list.length === 0){
                return <div className="d-flex justify-content-center"> <img  src={Spinner} alt="spining"/> </div>
              }else{
                  return (
                    <React.Fragment>
                        <h3 className="text-center mb-4">{heading}</h3>
                        <div className="row">
                            {track_list.map(item =>(
                                <Truck 
                                key={item.track.track_id}
                                truck={item.track}
                                />
                            )
                            )}
                        </div>
                        
                    </React.Fragment>
                  )
              }
          }}
      </Consumer>
    )
  }
}
