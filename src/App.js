import { useState } from 'react';
import Video from './Video/Video';
import Menu from './Menu/Menu';

import styles from './App.module.scss';

const videoUrls = {
  deer:
  "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
  "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat:
  "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
  "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
};

//Object gets either keys or values from a object and puts them into a string, just for You.
const videoNames = Object.keys(videoUrls);

function App() {
  const [ selectedVideo, setSelectedVideo ] = useState(videoUrls.deer);
  const [ selectedVideoName, setSelectedVideoName] = useState(videoNames[0]);

  const changeVideoUrl = (videoUrlsKey) => {
    setSelectedVideo(videoUrls[videoUrlsKey]);
    setSelectedVideoName(videoUrlsKey);
  };

  return (
    <main className={styles.wholeAppComponent}>
      <section>
        <Menu onSelectVideo={changeVideoUrl} arrayOfVideoKeys={videoNames} selectedVideoName={selectedVideoName}/>
        <Video urlToVideo={selectedVideo}/>
      </section>
    </main>
  );
}

export default App;
