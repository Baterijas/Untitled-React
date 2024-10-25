import React from 'react'

import { Helmet } from 'react-helmet'

import './desktop1.css'

const Desktop1 = (props) => {
  return (
    <div className="desktop1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="desktop1-desktop1">
        <div className="desktop1-frame1">
          <div className="desktop1-frame2">
            <img
              alt="Frame1379"
              src="/external/frame1379-q8dp.svg"
              className="desktop1-frame4"
            />
            <div className="desktop1-frame6">
              <span className="desktop1-text1">Roadmap</span>
              <span className="desktop1-text2">
                <span>Privacy &amp; Terms</span>
              </span>
              <span className="desktop1-text4">Get in touch</span>
            </div>
          </div>
          <div className="desktop1-frame3">
            <span className="desktop1-text5">
              <span className="desktop1-text6">
                A new look for everything
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="desktop1-text7">Finance</span>
            </span>
            <span className="desktop1-text8">
              A full range AI financial advisor for helping you make your
              investment choices or any other finance related endeavours.
            </span>
            <div className="desktop1-frame8"></div>
            <img
              alt="pastedImage"
              src="/external/pastedimage-sf8g-200h.png"
              className="desktop1-pasted-image"
            />
          </div>
          <img
            alt="Line11386"
            src="/external/line11386-qy8n.svg"
            className="desktop1-line1"
          />
          <div className="desktop1-frame5">
            <img
              alt="logoblack11376"
              src="/external/logoblack11376-sryq-200w.png"
              className="desktop1-logoblack1"
            />
            <img
              alt="Frame1378"
              src="/external/frame1378-lof8.svg"
              className="desktop1-frame7"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Desktop1
