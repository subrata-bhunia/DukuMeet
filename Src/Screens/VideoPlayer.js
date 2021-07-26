import React from 'react';
import {
    View,
    Dimensions
} from 'react-native';
import VideoPlayer from 'react-native-video-player';
const {height,width}=Dimensions.get("window");

const VideoPlayerView=()=>{

    return(
        <View>
            <VideoPlayer
                endWithThumbnail
                thumbnail={{ uri: "https://s29843.pcdn.co/blog/wp-content/uploads/sites/2/2021/02/video-thumbnails-social.png" }}
                video={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}
                videoWidth={width}
                videoHeight={height}
                // duration={/* I'm using a hls stream here, react-native-video can't figure out the length, so I pass it here from the vimeo config */}
                // ref={r => this.player = r}
                fullScreenOnLongPress={true}
                // onShowControls={}
                duration={100}
                />
        </View>
    )
}

export default VideoPlayerView;
