import React from 'react';
import { RTCView as LiveKitRTCView } from '@livekit/react-native-webrtc';

// @ts-ignore
const RTCView = ({ stream, ...props }) => {
  return <LiveKitRTCView streamURL={stream?.toURL() ?? ''} {...props} />;
};

export * from '@livekit/react-native-webrtc';
export { RTCView };
