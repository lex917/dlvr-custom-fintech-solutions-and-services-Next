import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Contact1 from '../components/contact1'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>dlvr: custom fintech solutions and services</title>
          <meta
            name="description"
            content="dlvr provides multi-disciplinary teams and fractional product, technology, operations, and project leadership without the full-time costs and overheads."
          />
          <meta
            property="og:title"
            content="dlvr: custom fintech solutions and services"
          />
          <meta
            property="og:description"
            content="dlvr provides multi-disciplinary teams and fractional product, technology, operations, and project leadership without the full-time costs and overheads."
          />
        </Head>
        <header className="home-header1">
          <header data-thq="thq-navbar" className="home-navbar">
            <a href="#Landing" className="home-link1">
              <img
                alt="image"
                src="/Icons/dlvrlogo-200h.png"
                className="home-dlvr"
              />
            </a>
            <div data-thq="thq-burger-menu" className="home-burger-menu"></div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu"></div>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="home-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="home-nav"
              >
                <a href="#About" className="home-link2 button-clean button">
                  About
                </a>
                <a href="#Services" className="home-link3 button-clean button">
                  Services
                </a>
                <a href="#Contact" className="home-link4 button-clean button">
                  Contact
                </a>
              </nav>
            </div>
          </header>
        </header>
        <section id="Landing" className="home-landing">
          <div className="home-heading">
            <h1 className="home-header2">
              <span>Accelerate delivery.</span>
              <br></br>
              <span>Scale proactively.</span>
              <br></br>
              <span>Reduce overruns.</span>
              <br></br>
            </h1>
          </div>
        </section>
        <section id="About" className="home-about1">
          <img alt="image" src="/data-1500w.jpg" className="home-data" />
          <div className="home-container2">
            <span className="home-about2">about</span>
            <div className="home-description1">
              <div className="home-content1">
                <p className="home-paragraph10">
                  <span className="home-text16">
                    dlvr designs, develops, and maintains bespoke and custom
                    fintech solutions, and provides multi-disciplinary teams and
                    fractional product, technology, operations, and project
                    leadership without the full-time costs and overheads.
                  </span>
                  <br></br>
                </p>
                <p className="home-paragraph11">
                  <span>
                    We offer unparalleled leverage for your organization,
                    R&amp;D, product- and value-centricity, and delivery aligned
                    with PMI standards.
                  </span>
                  <br></br>
                </p>
                <p className="home-paragraph12">
                  <span>
                    Together, we challenge the status quo, fuel innovation, and
                    unlock new possibilities. We transform bold ideas into
                    impactful technologies, driving meaningful change.
                  </span>
                  <br></br>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="Services" className="home-services1">
          <img alt="image" src="/charts-1500w.jpg" className="home-charts" />
          <div className="home-container3">
            <span className="home-services2">Services</span>
            <div className="home-description2">
              <div className="home-content2">
                <h2 className="home-header3">
                  Your Strategic Execution Partner
                </h2>
                <p className="home-paragraph13">
                  <span>
                    dlvr provides multi-disciplinary teams and fractional
                    product, technology, operations, and project leadership
                    without the full-time costs and overheads.
                  </span>
                  <br></br>
                </p>
                <p className="home-paragraph14">
                  Our team consists of seasoned engineers with expertise in
                  high-load, high-availability distributed systems, bringing
                  prior experience from top-tier institutions such as Morgan
                  Stanley, National Bank, Euronext, Deutsche Bank, SGX,
                  Broadridge, thinkorswim, and other prominent fintech leaders.
                </p>
                <p className="home-paragraph15">
                  <span>
                    Our experts have, on average, 10+ years of experience in
                    their respective fields, with many holding advanced degrees
                    and professional certifications.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </p>
                <p className="home-paragraph16">
                  <span>Key reasons to choose us:</span>
                  <br></br>
                </p>
                <p className="home-paragraph17">
                  <span>🧭 1. Lean prioritization &amp; focus:</span>
                  <br></br>
                  <span>
                    - Delivering what truly matters - clarifying value, cutting
                    scope and distractions
                  </span>
                  <br></br>
                  <span>
                    - Outcome-driven product thinking, minus shiny-object
                    syndrome
                  </span>
                  <br></br>
                </p>
                <p className="home-paragraph18">
                  <span>🔄 2. Agile leadership:</span>
                  <br></br>
                  <span>
                    - Development sprints outcomes aligned with business
                    priorities
                  </span>
                  <br></br>
                  <span>
                    - The productive team - even when your resources are
                    stretched thin
                  </span>
                  <br></br>
                </p>
                <p className="home-paragraph19">
                  <span>✅ 3. Cost-effective expertise:</span>
                  <br></br>
                  <span>
                    - Senior level thinking and execution without FTE salary and
                    overhead costs
                  </span>
                  <br></br>
                  <span>
                    - Up to 60% lower total cost than an in-house employee (hour
                    equivalent)
                  </span>
                  <br></br>
                </p>
                <p className="home-paragraph20">
                  <span>📣 4. Clear communication:</span>
                  <br></br>
                  <span>
                    - Enabled by PMP-certified Technical Project Managers
                  </span>
                  <br></br>
                  <span>
                    - Bridging leadership and engineering without the bias of
                    internal politics
                  </span>
                  <br></br>
                </p>
                <p className="home-paragraph21">
                  <span>🔍 5. Fresh perspective:</span>
                  <br></br>
                  <span>- External insights and best practices</span>
                  <br></br>
                  <span>
                    - Uncover inefficiencies and opportunities your team may
                    overlook
                  </span>
                  <br></br>
                </p>
                <p className="home-paragraph22">
                  <span>🚀 6. Fast start &amp; low commitment:</span>
                  <br></br>
                  <span>- Start in days, delivering value from day 1</span>
                  <br></br>
                  <span>
                    - Pilots available from 40 human-hours (leveraged with AI)
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="Contact" className="home-contact1">
          <img
            alt="image"
            src="/contactus-200h.jpg"
            className="home-contact2"
          />
          <span className="home-contact3">Contact</span>
          <Contact1
            content1={
              <Fragment>
                <span className="home-text65">hello [at] dlvr.global</span>
              </Fragment>
            }
            content2={
              <Fragment>
                <span className="home-text66">+1 917 259 1043</span>
              </Fragment>
            }
            content3={
              <Fragment>
                <span className="home-text67">
                  <span>14 Wall Street, New York, NY, 10005</span>
                  <br></br>
                </span>
              </Fragment>
            }
            content31={
              <Fragment>
                <span className="home-text70">
                  <span>1250 Rene-Levesque blvd W, Montreal, QC, H3B 4W8</span>
                  <br></br>
                </span>
              </Fragment>
            }
            content311={
              <Fragment>
                <span className="home-text73">
                  <span>Metro Plaza, Tallinn, 10111, Estonia</span>
                  <br></br>
                </span>
              </Fragment>
            }
            rootClassName="contact1root-class-name"
          ></Contact1>
          <span className="home-copyright">
            © 2025. dlvr global. All Rights Reserved.
          </span>
        </section>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .home-header1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            z-index: 1;
            position: fixed;
            max-width: auto;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: space-between;
            background-color: #000000;
          }
          .home-link1 {
            display: contents;
          }
          .home-dlvr {
            width: 108px;
            height: 52px;
            align-self: center;
            object-fit: cover;
            text-decoration: none;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-nav {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            color: #ffffff;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link2 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-family: 'Fira Sans';
            letter-spacing: 1.5px;
            text-decoration: none;
          }
          .home-link3 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-family: 'Fira Sans';
            letter-spacing: 1.2px;
            text-decoration: none;
          }
          .home-link4 {
            color: #ffcf77;
            font-size: 20px;
            font-style: normal;
            font-family: 'Fira Sans';
            font-weight: 800;
            letter-spacing: 1.2px;
            text-decoration: none;
          }
          .home-landing {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-layout-space-fourunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .home-heading {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            margin-top: var(--dl-layout-space-sixunits);
            align-items: center;
            flex-direction: column;
          }
          .home-header2 {
            color: rgb(255, 255, 255);
            font-size: 84px;
            max-width: 900px;
            font-style: normal;
            margin-top: var(--dl-layout-space-sixunits);
            text-align: center;
            font-family: 'Fira Sans';
            font-weight: 400;
            line-height: 96px;
          }
          .home-about1 {
            gap: 120px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: 67px;
          }
          .home-data {
            width: 100%;
            height: 144px;
            object-fit: cover;
          }
          .home-container2 {
            width: auto;
            display: flex;
            max-width: auto;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-about2 {
            color: rgb(255, 207, 119);
            align-self: center;
            font-style: normal;
            font-family: 'Fira Sans';
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-twounits);
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .home-description1 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1296px;
            align-self: center;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .home-content1 {
            gap: var(--dl-layout-space-threeunits);
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-paragraph10 {
            color: rgb(255, 255, 255);
            font-size: 34px;
            text-align: justify;
            font-family: 'Fira Sans';
            line-height: 48px;
          }
          .home-paragraph11 {
            color: rgb(255, 255, 255);
            font-size: 34px;
            text-align: justify;
            font-family: 'Fira Sans';
            line-height: 48px;
          }
          .home-paragraph12 {
            color: rgb(255, 255, 255);
            font-size: 34px;
            text-align: justify;
            font-family: 'Fira Sans';
            line-height: 48px;
          }
          .home-services1 {
            gap: 120px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: 67px;
          }
          .home-charts {
            width: 100%;
            height: 144px;
            object-fit: cover;
          }
          .home-container3 {
            width: auto;
            display: flex;
            max-width: auto;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-services2 {
            color: rgb(255, 207, 119);
            align-self: center;
            font-style: normal;
            font-family: 'Fira Sans';
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-twounits);
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .home-description2 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1296px;
            align-self: center;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .home-content2 {
            gap: var(--dl-layout-space-threeunits);
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header3 {
            color: rgb(255, 255, 255);
            font-size: 68px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Fira Sans';
            font-weight: 400;
          }
          .home-paragraph13 {
            color: rgb(255, 255, 255);
            font-size: 34px;
            text-align: justify;
            font-family: 'Fira Sans';
            line-height: 48px;
          }
          .home-paragraph14 {
            color: rgb(255, 255, 255);
            font-size: 34px;
            text-align: justify;
            font-family: 'Fira Sans';
            line-height: 48px;
          }
          .home-paragraph15 {
            color: rgb(255, 255, 255);
            font-size: 34px;
            text-align: justify;
            font-family: 'Fira Sans';
            line-height: 48px;
          }
          .home-paragraph16 {
            color: rgb(255, 255, 255);
            font-size: 34px;
            text-align: justify;
            font-family: 'Fira Sans';
            line-height: 48px;
          }
          .home-paragraph17 {
            color: rgb(255, 255, 255);
            font-size: 34px;
            align-self: stretch;
            text-align: justify;
            line-height: 48px;
          }
          .home-paragraph18 {
            color: rgb(255, 255, 255);
            font-size: 34px;
            text-align: justify;
            font-family: 'Fira Sans';
            line-height: 48px;
          }
          .home-paragraph19 {
            color: rgb(255, 255, 255);
            font-size: 34px;
            text-align: justify;
            font-family: 'Fira Sans';
            line-height: 48px;
          }
          .home-paragraph20 {
            color: rgb(255, 255, 255);
            font-size: 34px;
            text-align: justify;
            font-family: 'Fira Sans';
            line-height: 48px;
          }
          .home-paragraph21 {
            color: rgb(255, 255, 255);
            font-size: 34px;
            text-align: justify;
            font-family: 'Fira Sans';
            line-height: 48px;
          }
          .home-paragraph22 {
            color: rgb(255, 255, 255);
            font-size: 34px;
            text-align: justify;
            font-family: 'Fira Sans';
            line-height: 48px;
          }
          .home-contact1 {
            gap: 120px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .home-contact2 {
            width: 100%;
            height: 144px;
            object-fit: cover;
          }
          .home-contact3 {
            color: rgb(255, 207, 119);
            align-self: center;
            font-style: normal;
            font-family: 'Fira Sans';
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-twounits);
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .home-text65 {
            display: inline-block;
          }
          .home-text66 {
            display: inline-block;
          }
          .home-text67 {
            display: inline-block;
            font-family: 'Fira Sans';
          }
          .home-text70 {
            display: inline-block;
          }
          .home-text73 {
            display: inline-block;
          }
          .home-copyright {
            color: rgb(255, 255, 255);
            font-size: 14px;
            align-self: center;
            font-family: 'Fira Sans';
          }
          @media (max-width: 1600px) {
            .home-desktop-menu {
              display: flex;
              align-self: center;
              align-items: stretch;
              justify-content: flex-start;
            }
            .home-link4 {
              font-style: normal;
              font-weight: 800;
            }
            .home-about2 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .home-description1 {
              width: auto;
              max-width: auto;
              margin-bottom: var(--dl-layout-space-fiveunits);
            }
            .home-content1 {
              height: auto;
            }
            .home-paragraph10 {
              font-family: Fira Sans;
            }
            .home-services1 {
              margin-top: var(--dl-layout-space-fourunits);
              margin-bottom: var(--dl-layout-space-sixunits);
              padding-bottom: 0px;
            }
            .home-services2 {
              color: rgb(255, 207, 119);
              font-style: normal;
              font-weight: 700;
              margin-bottom: var(--dl-layout-space-twounits);
              letter-spacing: 2px;
              text-transform: uppercase;
            }
            .home-description2 {
              margin-bottom: var(--dl-layout-space-fiveunits);
            }
            .home-content2 {
              height: auto;
            }
            .home-paragraph13 {
              align-self: flex-start;
              text-align: justify;
              font-family: Fira Sans;
            }
            .home-paragraph14 {
              color: rgb(255, 255, 255);
              font-size: 34px;
              line-height: 48px;
            }
            .home-paragraph16 {
              color: rgb(255, 255, 255);
              font-size: 34px;
              line-height: 48px;
            }
            .home-contact1 {
              padding: var(--dl-layout-space-unit);
              position: relative;
            }
            .home-contact3 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 1200px) {
            .home-about1 {
              padding-bottom: 0px;
            }
            .home-about2 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .home-paragraph10 {
              color: rgb(255, 255, 255);
              font-size: 34px;
              line-height: 48px;
            }
            .home-text16 {
              color: rgb(255, 255, 255);
              font-size: 34px;
              line-height: 48px;
            }
            .home-services1 {
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .home-services2 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .home-paragraph13 {
              color: rgb(255, 255, 255);
              font-size: 34px;
              line-height: 48px;
            }
            .home-paragraph15 {
              color: rgb(255, 255, 255);
              font-size: 34px;
              line-height: 48px;
            }
            .home-paragraph22 {
              width: 100%;
              text-align: justify;
            }
            .home-contact1 {
              margin-left: var(--dl-layout-space-unit);
              padding-top: 0px;
              margin-right: var(--dl-layout-space-unit);
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-contact3 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 991px) {
            .home-dlvr {
              width: 90px;
              height: 43px;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-desktop-menu {
              align-self: center;
              align-items: flex-start;
              flex-direction: row;
              justify-content: space-between;
            }
            .home-nav {
              align-items: flex-end;
              justify-content: flex-end;
            }
            .home-header2 {
              font-size: 72px;
              font-style: normal;
              font-family: Fira Sans;
              font-weight: 400;
              line-height: 84px;
            }
            .home-about1 {
              padding-bottom: 0px;
            }
            .home-data {
              height: 116px;
            }
            .home-about2 {
              align-self: center;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .home-services1 {
              padding-bottom: 0px;
            }
            .home-charts {
              height: 116px;
            }
            .home-services2 {
              align-self: center;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .home-header3 {
              font-size: 56px;
            }
            .home-contact1 {
              padding-bottom: var(--dl-layout-space-unit);
            }
            .home-contact2 {
              height: 116px;
            }
            .home-contact3 {
              align-self: center;
              margin-bottom: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 767px) {
            .home-navbar {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .home-dlvr {
              width: 84px;
              height: 39px;
            }
            .home-desktop-menu {
              display: flex;
            }
            .home-nav {
              width: auto;
              height: auto;
              overflow: hidden;
              align-self: flex-start;
              flex-direction: row;
              justify-content: flex-end;
            }
            .home-landing {
              max-width: auto;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .home-heading {
              gap: var(--dl-layout-space-unit);
            }
            .home-header2 {
              font-size: 44px;
              max-width: auto;
              line-height: 52px;
            }
            .home-about1 {
              gap: var(--dl-layout-space-threeunits);
              padding-bottom: 0px;
            }
            .home-data {
              height: 96px;
            }
            .home-about2 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .home-description1 {
              gap: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              margin-bottom: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-content1 {
              gap: var(--dl-layout-space-unit);
            }
            .home-paragraph10 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-text16 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-paragraph11 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-paragraph12 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-services1 {
              gap: var(--dl-layout-space-threeunits);
              margin-bottom: var(--dl-layout-space-twounits);
              padding-bottom: 0px;
            }
            .home-charts {
              height: 96px;
            }
            .home-services2 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .home-description2 {
              gap: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              margin-bottom: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-content2 {
              gap: var(--dl-layout-space-unit);
            }
            .home-header3 {
              font-size: 32px;
              letter-spacing: 0;
            }
            .home-paragraph13 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-paragraph14 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-paragraph15 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-paragraph16 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-paragraph17 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-paragraph18 {
              font-size: 20px;
              align-self: stretch;
              line-height: 30px;
            }
            .home-paragraph19 {
              font-size: 20px;
              align-self: stretch;
              line-height: 30px;
            }
            .home-paragraph20 {
              font-size: 20px;
              align-self: stretch;
              line-height: 30px;
            }
            .home-paragraph21 {
              font-size: 20px;
              align-self: stretch;
              line-height: 30px;
            }
            .home-paragraph22 {
              width: auto;
              font-size: 20px;
              align-self: stretch;
              line-height: 30px;
            }
            .home-contact1 {
              gap: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .home-contact2 {
              height: 96px;
            }
            .home-contact3 {
              margin-top: 0px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 479px) {
            .home-navbar {
              padding: var(--dl-layout-space-unit);
              margin-left: var(--dl-layout-space-threeunits);
              margin-right: var(--dl-layout-space-threeunits);
            }
            .home-dlvr {
              margin-left: var(--dl-layout-space-halfunit);
            }
            .home-burger-menu {
              width: 0px;
              height: 0px;
              max-width: 0px;
              align-self: center;
              max-height: 0px;
            }
            .home-mobile-menu {
              padding: 16px;
              background-color: #000000;
            }
            .home-link2 {
              display: none;
            }
            .home-link3 {
              display: none;
            }
            .home-landing {
              width: 100%;
              max-width: auto;
              padding-top: var(--dl-layout-space-twounits);
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-heading {
              width: 100%;
            }
            .home-header2 {
              width: 100%;
              font-size: 36px;
              max-width: 100%;
              line-height: 43px;
            }
            .home-data {
              height: 80px;
            }
            .home-container2 {
              margin-left: var(--dl-layout-space-unit);
              margin-right: var(--dl-layout-space-unit);
            }
            .home-about2 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .home-description1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-services1 {
              margin-top: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-charts {
              height: 80px;
            }
            .home-container3 {
              margin-left: var(--dl-layout-space-unit);
              margin-right: var(--dl-layout-space-unit);
            }
            .home-services2 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .home-description2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-header3 {
              font-size: 26px;
            }
            .home-contact1 {
              margin-top: var(--dl-layout-space-unit);
            }
            .home-contact2 {
              height: 80px;
            }
            .home-contact3 {
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
