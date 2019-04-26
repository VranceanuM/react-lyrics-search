import React from 'react'
import {Link} from 'react-router-dom'
const Truck = (props) => {
    const {truck} = props;
  return (
    <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h5>{truck.artist_name}</h5>
                <p className="card-text">
                    <strong><i className="fas fa-play"></i>Track</strong>: {truck.track_name}
                    <strong><i className="fas fa-compact-disc"></i>Album</strong>: {truck.album_name}

                </p>
                <Link to={`lyrics/track/${truck.track_id}`} className="btn btn-dark btn-block"><i className="fas fa-chevron-right">View Lyrics</i></Link>
            </div>
        </div>
    </div>
  )
}
export default Truck