import React from 'react'
import WebCamera from './WebCamera';

// import WebcamVideo from './WebcamVideo'

function Chat() {
  return (

      <div className='containar'>
          <div className='row'>
              <div className='col-6'>
                  <WebCamera/>
              </div>
              <div className='col-6'>
                  {/* <WebcamVideo/> */}
              </div>
          </div>

      </div>

  )
}

export default Chat;