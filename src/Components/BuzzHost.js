import React from 'react';
import { useSelector } from 'react-redux';

function BuzzHost({ appHost }) {
  const buzzAppHost = useSelector((state) => state.options.buzz_application);
  
  /** DC: Future scope: Replace with json/form data once we add provision to user
   * Need to add this in constants? and make this as a switch-case? 
   */
  const buzzerAppHost = buzzAppHost === 'Server'
    ? "http://10.190.72.59:8090/host"   // our server
    : "http://localhost:8090/host";     // local env

  // return buzzAppHost && 
  return <iframe src={buzzerAppHost} title='Buzz' className='iframe-dc-buzz-app' />;
}
export default BuzzHost;