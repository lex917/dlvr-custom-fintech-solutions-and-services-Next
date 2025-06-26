import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact1 = (props) => {
  return (
    <>
      <div
        className={`contact1-contact20 thq-section-padding ${props.rootClassName} `}
      >
        <div className="contact1-max-width thq-section-max-width">
          <div className="contact1-content1">
            <svg
              viewBox="0 0 1024 1024"
              className="contact1-icon1 thq-icon-medium"
            >
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact1-contact-info1">
              <div className="contact1-content2">
                <p className="contact1-text10 thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="contact1-text22">
                        hello [at] dlvr.global
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <a
                href="https://calendly.com/ar-14fintech"
                target="_blank"
                rel="noreferrer noopener"
                className="contact1-link1"
              >
                <img
                  alt={props.imageAlt}
                  src={props.imageSrc}
                  className="contact1-image"
                />
              </a>
            </div>
          </div>
          <div className="contact1-content3">
            <svg
              viewBox="0 0 1024 1024"
              className="contact1-icon3 thq-icon-medium"
            >
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact1-contact-info2">
              <div className="contact1-content4">
                <a href="tel:+19172591043" className="contact1-link2">
                  <p className="contact1-text11 thq-body-large">
                    {props.content2 ?? (
                      <Fragment>
                        <span className="contact1-text15">+1 917 259 1043</span>
                      </Fragment>
                    )}
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="contact1-content5">
            <svg
              viewBox="0 0 1024 1024"
              className="contact1-icon5 thq-icon-medium"
            >
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact1-contact-info3">
              <div className="contact1-content6">
                <p className="contact1-text12 thq-body-large">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="contact1-text16">
                        <span>14 Wall Street, New York, NY, 10005</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </p>
                <p className="contact1-text13 thq-body-large">
                  {props.content31 ?? (
                    <Fragment>
                      <span className="contact1-text19">
                        <span>
                          1250 Rene-Levesque blvd W, Montreal, QC, H3B 4W8
                        </span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </p>
                <p className="contact1-text14 thq-body-large">
                  {props.content311 ?? (
                    <Fragment>
                      <span className="contact1-text23">
                        <span>Metro Plaza, Tallinn, 10111, Estonia</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact1-contact20 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            margin-left: var(--dl-layout-space-threeunits);
            margin-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            justify-content: center;
            background-color: #000000;
          }
          .contact1-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            max-width: auto;
            min-width: 100%;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .contact1-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact1-icon1 {
            fill: #d9d9d9;
          }
          .contact1-contact-info1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact1-content2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact1-text10 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-size: 26px;
            font-style: normal;
            text-align: center;
            font-family: 'Fira Sans';
            font-weight: 400;
            text-transform: lowercase;
          }
          .contact1-link1 {
            display: contents;
          }
          .contact1-image {
            width: 144px;
            height: 106px;
            object-fit: cover;
            text-decoration: none;
          }
          .contact1-content3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact1-icon3 {
            fill: #d9d9d9;
          }
          .contact1-contact-info2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact1-content4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact1-link2 {
            display: contents;
          }
          .contact1-text11 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-size: 26px;
            font-style: normal;
            text-align: center;
            font-family: 'Fira Sans';
            font-weight: 400;
            text-decoration: none;
          }
          .contact1-content5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact1-icon5 {
            fill: #d9d9d9;
          }
          .contact1-contact-info3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact1-content6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact1-text12 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-size: 26px;
            font-style: normal;
            text-align: center;
            font-family: 'Fira Sans';
            font-weight: 400;
          }
          .contact1-text13 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-size: 26px;
            font-style: normal;
            text-align: center;
            font-family: 'Fira Sans';
            font-weight: 400;
          }
          .contact1-text14 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-size: 26px;
            font-style: normal;
            text-align: center;
            font-family: 'Fira Sans';
            font-weight: 400;
          }
          .contact1-text15 {
            display: inline-block;
          }
          .contact1-text16 {
            display: inline-block;
            font-family: 'Fira Sans';
          }
          .contact1-text19 {
            display: inline-block;
          }
          .contact1-text22 {
            display: inline-block;
          }
          .contact1-text23 {
            display: inline-block;
          }
          .contact1root-class-name {
            width: auto;
            position: static;
            max-width: auto;
            min-width: 90%;
            align-self: center;
            margin-left: var(--dl-layout-space-fiveunits);
            margin-right: var(--dl-layout-space-fiveunits);
          }
          @media (max-width: 1600px) {
            .contact1root-class-name {
              width: auto;
              max-width: auto;
              min-width: 90%;
              margin-left: 0px;
              margin-right: 0px;
            }
          }
          @media (max-width: 1200px) {
            .contact1-text10 {
              font-size: 26px;
              font-style: normal;
              font-weight: 400;
            }
            .contact1root-class-name {
              width: auto;
              max-width: auto;
              min-width: auto;
              margin-left: 0px;
              margin-right: 0px;
            }
          }
          @media (max-width: 991px) {
            .contact1-text10 {
              font-style: normal;
              font-weight: 400;
            }
            .contact1root-class-name {
              width: auto;
              max-width: auto;
              min-width: auto;
              margin-left: var(--dl-layout-space-halfunit);
              margin-right: var(--dl-layout-space-halfunit);
            }
          }
          @media (max-width: 767px) {
            .contact1-max-width {
              flex-direction: column;
            }
            .contact1root-class-name {
              width: auto;
              max-width: auto;
              min-width: auto;
            }
          }
          @media (max-width: 479px) {
            .contact1root-class-name {
              margin-left: var(--dl-layout-space-twounits);
              margin-right: var(--dl-layout-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Contact1.defaultProps = {
  imageAlt: 'image',
  content2: undefined,
  content3: undefined,
  content31: undefined,
  rootClassName: '',
  content1: undefined,
  content311: undefined,
  imageSrc: '/calendly-200h.jpg',
}

Contact1.propTypes = {
  imageAlt: PropTypes.string,
  content2: PropTypes.element,
  content3: PropTypes.element,
  content31: PropTypes.element,
  rootClassName: PropTypes.string,
  content1: PropTypes.element,
  content311: PropTypes.element,
  imageSrc: PropTypes.string,
}

export default Contact1
