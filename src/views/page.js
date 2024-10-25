import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - exported project</title>
        <meta property="og:title" content="Page - exported project" />
      </Helmet>
      <div className="page-desktop1">
        <div className="page-frame1">
          <div className="page-frame2">
            <img
              alt="Frame1379"
              src="/external/frame1379-q8dp.svg"
              className="page-frame4"
            />
            <div className="page-frame6">
              <span className="page-text1">Roadmap</span>
              <span className="page-text2">
                <span>Privacy &amp; Terms</span>
              </span>
              <span className="page-text4">Get in touch</span>
            </div>
          </div>
          <div className="page-frame3">
            <span className="page-text5">
              A full range AI financial advisor for helping you make your
              investment choices or any other finance related endeavours.
            </span>
            <div className="page-frame8"></div>
          </div>
          <img
            alt="Line11386"
            src="/external/line11386-qy8n.svg"
            className="page-line1"
          />
          <div className="page-frame5">
            <img
              alt="logoblack11376"
              src="/external/logoblack11376-sryq-200w.png"
              className="page-logoblack1"
            />
            <img
              alt="Frame1378"
              src="/external/frame1378-lof8.svg"
              className="page-frame7"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
