import React, { useState } from "react";
import { uuidV4 } from "../../utils";

const extractVideoCode = (videoUrl: string) => {
  const pattern = /embed\/(\w+)/;
  const match = pattern.exec(videoUrl);

  if (match) {
    const videoCode = match[1];
    return videoCode;
  }

  return null;
}

export const Iframe = React.memo(function Iframe({ url, title }: { url: string, title: string }) {
  const [isVisible, setIframeVisibility] = useState(false);

  const videoCode = extractVideoCode(url);

  const handleVideoClick = () => {
    setIframeVisibility(true);
  };

  return (
    isVisible
      ?
      <iframe
        className="w-full tw--h-80 tw--py-4"
        title={title || 'Missing title'}
        src={url + '?enablejsapi=1&rel=0'}
        allow="fullscreen"
      />
      :
      <div className="w-full tw--h-80 tw--py-4 tw--justify-center tw--flex tw--items-center tw--pointer-events-auto"
        onClick={handleVideoClick}
        style={{ backgroundImage: `url(https://img.youtube.com/vi/${videoCode}/hqdefault.jpg)` }}>
        <button className="tw--items-center tw--justify-center tw--w-16 tw--h-16 tw--rounded-full tw--cursor-pointer tw--pointer-events-auto tw--flex tw--bg-gradient-to-b tw--from-[#FF0000] tw--to-[#F25640]">
          <svg className="tw--pointer-events-none" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.6665 9.09335V22.9067C10.6665 23.96 11.8265 24.6 12.7198 24.0267L23.5732 17.12C23.7632 16.9998 23.9197 16.8334 24.0282 16.6364C24.1366 16.4394 24.1935 16.2182 24.1935 15.9933C24.1935 15.7685 24.1366 15.5473 24.0282 15.3503C23.9197 15.1533 23.7632 14.9869 23.5732 14.8667L12.7198 7.97335C12.5187 7.84327 12.2862 7.76989 12.0469 7.76094C11.8076 7.75199 11.5702 7.8078 11.36 7.92249C11.1497 8.03718 10.9743 8.20649 10.8523 8.41257C10.7302 8.61864 10.666 8.85384 10.6665 9.09335V9.09335Z"
              fill="white" />
          </svg>
        </button>
      </div>
  )
});
