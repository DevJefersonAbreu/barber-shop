import React, { useEffect, useRef } from 'react';
import * as S from './styles';

const videoSources = [
  '/assets/homeVideo/video1.mp4',
  '/assets/homeVideo/video2.mp4',
  '/assets/homeVideo/video3.mp4',
  '/assets/homeVideo/video4.mp4',
  '/assets/homeVideo/video5.mp4',
];

const HomeVideo: React.FC = () => {
  const videoRef1 = useRef<HTMLVideoElement | null>(null);
  const videoRef2 = useRef<HTMLVideoElement | null>(null);
  const currentVideoIndex = useRef(0); 
  const isPlayingRef1 = useRef(true);

  useEffect(() => {
    if (videoRef1.current) {
      videoRef1.current.play();
    }
  }, []);

  const handleVideoEnd = () => {
    const nextVideoIndex = (currentVideoIndex.current + 1) % videoSources.length;
    const activeVideo = isPlayingRef1.current ? videoRef1 : videoRef2;
    const inactiveVideo = isPlayingRef1.current ? videoRef2 : videoRef1;

    if (inactiveVideo.current) {
      inactiveVideo.current.src = videoSources[nextVideoIndex];
      inactiveVideo.current.load();
      inactiveVideo.current.play();
      inactiveVideo.current.style.opacity = '1';
    }

    if (activeVideo.current) {
      activeVideo.current.style.opacity = '0';
    }

    currentVideoIndex.current = nextVideoIndex;
    isPlayingRef1.current = !isPlayingRef1.current; 
  };

  return (
    <S.Container>
      <S.Video
        ref={videoRef1}
        autoPlay
        muted
        loop={false} 
        onEnded={handleVideoEnd}
        style={{ opacity: 1, position: 'absolute', transition: 'opacity 0.5s ease' }}
      >
        <source src={videoSources[0]} type="video/mp4" />
      </S.Video>

      <S.Video
        ref={videoRef2}
        autoPlay
        muted
        loop={false}
        onEnded={handleVideoEnd}
        style={{ opacity: 0, position: 'absolute', transition: 'opacity 0.5s ease' }}
      >
        <source src={videoSources[1]} type="video/mp4" />
      </S.Video>
    </S.Container>
  );
};

export default HomeVideo;
