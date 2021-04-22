import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow'
import TuneIcon from '@material-ui/icons/Tune';
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow
            image="https://lh3.googleusercontent.com/ogw/ADGmqu8GfVj_qAJ-D5BoRYWx72-LXH9Bj2CymcPSh7jgHw=s32-c-mo" 
            channel="SuperJnere"
            varified
            subs="900k"
            noOfVideos={999}
            description="here you can watch daily livestream games like pubg valorent"
            />
            <hr />
            <VideoRow
            views="900k"
            subs="500k"
            description="here you can watch daily livestream games like pubg valorent"
            timestamp="2 Hour ago"
            channel="Superjenre"
            title="How to become gamer"
            image="https://i.ytimg.com/vi/EfcbU5oXrWs/maxresdefault.jpg"
            />

<VideoRow
            views="900k"
            subs="500k"
            description="here you can watch daily livestream games like pubg valorent"
            timestamp="2 Hour ago"
            channel="Superjenre"
            title="How to become gamer"
            image="https://i.ytimg.com/vi/EfcbU5oXrWs/maxresdefault.jpg"
            />  

<VideoRow
            views="900k"
            subs="500k"
            description="here you can watch daily livestream games like pubg valorent"
            timestamp="2 Hour ago"
            channel="Superjenre"
            title="How to become gamer"
            image="https://i.ytimg.com/vi/EfcbU5oXrWs/maxresdefault.jpg"
            />

<VideoRow
            views="900k"
            subs="500k"
            description="here you can watch daily livestream games like pubg valorent"
            timestamp="2 Hour ago"
            channel="Superjenre"
            title="How to become gamer"
            image="https://i.ytimg.com/vi/EfcbU5oXrWs/maxresdefault.jpg"
            />

<VideoRow
            views="900k"
            subs="500k"
            description="here you can watch daily livestream games like pubg valorent"
            timestamp="2 Hour ago"
            channel="Superjenre"
            title="How to become gamer"
            image="https://i.ytimg.com/vi/EfcbU5oXrWs/maxresdefault.jpg"
            />

<VideoRow
            views="900k"
            subs="500k"
            description="here you can watch daily livestream games like pubg valorent"
            timestamp="2 Hour ago"
            channel="Superjenre"
            title="How to become gamer"
            image="https://i.ytimg.com/vi/EfcbU5oXrWs/maxresdefault.jpg"
            />
        </div>
    )
}

export default SearchPage
