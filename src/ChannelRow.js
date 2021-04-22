import React from 'react'
import './ChannelRow.css'
import Avatar from '@material-ui/core/Avatar';
import VarifiedIcon from '@material-ui/icons/CheckCircle';

function ChannelRow({image,channel,subs, noOfVideos,description,varified}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" 
            alt={channel} src={image}
            />
            <div className="channelRow__text">
                <h4>{channel}{varified && <VarifiedIcon />}</h4>
                <p>
                    {subs} subscribers : {noOfVideos} Videos
                    <p>{description}</p>
                </p>
                
            </div>
        </div>
    )
}

export default ChannelRow
