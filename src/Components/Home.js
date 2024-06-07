import React from 'react'

import "../css/assests/index-DcQRHv-h.css"
const Home = () => {
  return (
    <div>
  <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GreatStack</title>
  <meta name="robots" content="noindex, nofollow" />
  <link rel="stylesheet" href="../.." />
  <link rel="preconnect" href="https://fonts.googleapis.com/" />
  <link rel="preconnect" href="https://fonts.googleapis.com/" />
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,800;1,100;1,300&display=swap"
    rel="stylesheet"
  />
  <div id="root">
    <div>
      <section className="ptu-title__container">
        <div className="ptu-title__logo-header">
          <a rel="noopener noreferrer" href="/">
            <img
              src="./ptu-logo.png"
              className="ptu-title__logo"
              alt="Puducherry Technological University"
            />
          </a>
          <div className="ptu-title__collage-name-container">
            <h1 className="ptu-title__collage-name">
              <span className="ptu-title__first-letter">P</span>
              <span>UDUCHERRY</span>
              <span className="ptu-title__first-letter">T</span>
              <span>ECHNOLOGICAL</span>
              <span className="ptu-title__first-letter">U</span>
              <span>NIVERSITY</span>
            </h1>
            <h6 className="ptu-title__place">Puducherry, India</h6>
          </div>
        </div>
      </section>
    </div>
    <nav className="desktop-nav" style={{ left: 0, height: 58 }}>
      <div className="desktop-nav__container">
        <div className="desktop-nav__link-section">
          <a className="desktop-nav__link desktop-nav__main-link " href="#">
            Home
          </a>
        </div>
        <div className="desktop-nav__link-section">
          <a
            className="desktop-nav__link desktop-nav__main-link "
            href="#about"
          >
            About us
          </a>
        </div>
        <div className="desktop-nav__link-section">
          <a
            href="#program"
            className="desktop-nav__link desktop-nav__main-link "
          >
            Program
          </a>
        </div>
        <div className="desktop-nav__link-section">
          <a
            href="#campus"
            className="desktop-nav__link desktop-nav__main-link "
          >
            Campus
          </a>
        </div>
        <div className="desktop-nav__link-section">
          <a
            href="#testimonials"
            className="desktop-nav__link desktop-nav__main-link "
          >
            Testimonials
          </a>
        </div>
        <div className="desktop-nav__link-section">
          <a
            href="#contactus"
            className="desktop-nav__link desktop-nav__main-link "
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">
          Explore more <img src="./right-arrow.jpg" />
        </button>
      </div>
    </div>
    <div className="container">
      <div className="about" id="about">
        <div className="about-right">
          <h3>ABOUT US</h3>
          <h2>Nurturing Tomorrow's Leaders Today</h2>
          <p>
            The Department of Computer Science and Engineering was established
            in the year 1987 with the objective of imparting high quality
            education in the field of Computer Science. It provides a
            comprehensive program that emphasizes on Advanced Data Structures
            and Algorithms, Advanced Software Design, Artificial Intelligence,
            Parallel and Distributed Systems, Graphics and Image Processing,
            Machine Learning, Internet of Things, Information Security, Digital
            Forensics, Big Data and Data Mining.
            <br />
            <br />
            The department has competent and committed faculty which encourages
            students' involvement in various academic and co-curricular
            activities. The department has well equipped computer laboratories
            with more than 400 computers and a Research Laboratory to carry out
            research and project activities. The department has the latest
            infrastructure facilities with high speed Internet, advanced
            software labs, hardware labs, seminar halls and class rooms equipped
            with LCD projectors. Students of all programmes can take project
            internship with different organizations.
            <br />
            <br />
            This component has been included in the curriculum to provide
            exposure for the students to work in an organization environment, as
            well as a chance to apply the learning in solving real-world
            business problems. The department has a long tradition of producing
            technically competent engineers since 1987 and it has renowned
            alumni occupying prominent positions in the industry, academia and
            research all over the world. The students of the department have got
            placements in major companies like HP, ZOHO, HCL, NOKIA, INFOSYS,
            RELIANCE, CTS, L&amp;T INFOTECH etc.The Department faculty are
            actively involved in various AICTE- RPS, UGC and SERB Sponsored
            Research Projects, Consultancy projects and Collaborative Projects
            with other government sectors.
          </p>
        </div>
      </div>
      <div className="title" id="program">
        <p>Our PROGRAM</p>
        <h2>What We Offer</h2>
      </div>
      <div className="programs">
        <div className="program">
          <img src="../../src/css/assests/program-2-DRqwF0EM.png" alt="" />
          <div className="caption">
            <img src="./assets/bachelorlogo.png" alt="" />
            <p>Graduation Degree</p>
          </div>
        </div>
        <div className="program">
          <img src="./assets/program-2-DRqwF0EM.png" alt="" />
          <div className="caption">
            <img src="./assets/masterslogo.png" alt="" />
            <p>Post Graduation</p>
          </div>
        </div>
        <div className="program">
          <img src="./assets/program-2-DRqwF0EM.png" alt="" />
          <div className="caption">
            <img src="./assets/phdlogo1.png" alt="" />
            <p>Ph. D. Scholars</p>
          </div>
        </div>
      </div>
      <div className="title" id="campus">
        <p>Gallery</p>
        <h2>Campus Photos</h2>
      </div>
      <div className="campus">
        <div className="gallery">
          <img src="/assets/gallery-1-HP2uKW94.png" alt="" />
          <img src="/assets/gallery-2-DYatBGZh.png" alt="" />
          <img src="/assets/gallery-3-C4KpO1U2.png" alt="" />
          <img src="/assets/gallery-4-LJEJ329C.png" alt="" />
        </div>
        <button className="btn dark-btn">
          See more here{" "}
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAeCAYAAABnuu2GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADPSURBVHgB7dnRDYJAEEXRpxVYAiXQgpVICVqB2IEdaAeUQAlrB9iBdjDOyPqhm2yCX7xhTzIJhITkBgJkAWZIRDY6vYw624cHGtLItzA1bo15+o2odTqwi7dikNQF7LzHVTrD0uKOYFfiWJU4VhpR6zyWFrez46u4cUb6GcOssbBBNyr48rSPYE9X6uMddtC5w5cTWGUeHnuwykS1YJV5QbdgVaJYlCgWmagrWMm4mOMyKriKMpKuBJsw5RwsK8E3nS3YxVuxi1eqlz9+SrwAYrdvIKJt0HIAAAAASUVORK5CYII="
            alt=""
          />
        </button>
      </div>
      <div className="title" id="testimonials">
        <p>TESTIMONIALS</p>
        <h2>What Student Says</h2>
      </div>
      <div className="testimonials">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAYAAAC8jpA0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC6SURBVHgB7dnBDcIwDIXhF8QAHYHRykTtBqQTMAKzsAEbmFggFYRQLrVlq++TcsjtV5TkYoBWIjLoQgYt9NTWTVYTomuRV/l1QVTvK/FPzPBOdOjwOWt4ZbgnhntjuDeGe2O4N4Z720V40R3yqKWU8xG5jO2M79lOWj0OSChj9JLteiztIY6IQr+0zpdXEQmDrTHYGoOtMdgag60x2FrG4Clb8JAqWHWiK6KS72lt/GAlrzHz59R2xsae7fcM7OE7mG8AAAAASUVORK5CYII="
          alt=""
          className="next-btn"
        />
        <img
          src="data:image/png;base64,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"
          alt=""
          className="back-btn"
        />
        <div className="slider">
          <ul>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src="/assets/user-1-dp2DpvM_.png" alt="" />
                  <div>
                    <h3>Emily Williams</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src="/assets/user-2-UK2CIdqi.png" alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src="/assets/user-3-BHRQSl0V.png" alt="" />
                  <div>
                    <h3>Emily Williams</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src="/assets/user-4-njZdDe5j.png" alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="title" id="contactus">
        <p>Contact Us</p>
        <h2>Get in Touch</h2>
      </div>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send us a message <img src="/assets/msg-icon-ClKDHhj8.png" alt="" />
          </h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul>
            <li>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATVSURBVHgB7VpRcts2EN1FPf6ro96Adn86nVpRTlD7BI5OYPEEVk4Q9QR2T0D6BHFOYPcE5iidTL9i3qD8zqRCd0HQlSiABEmQlpO+H4sgDSyWwL59CyIYEPwSnQjEC4kw4Ut43khRQrIC+T79EMblm7h+EfwcTXAPI/o5ga8TqfwsT9O/wrRoEMWPH8fX5zT5W/h6J88IcB8feK5Fg1oBwU+RugHfDjL5hVbCxzBRK4AmfwvfFkZ6qwMGx9EMMb+wQQIkmAfDETwPZJKDX812lit5SisAz+oeSpezVw/L2Q8S5O+w4yAbr6WQh2wzLfNXlQ8LmAtAu5ckU8ef4V1xnS7DObX9BjsKto1snKVJmPE173FqvLM9j4AvBVbwPEp8UW6jARY00BvYMbBNbBs0QyAqbyOcHI2v35abaaAr3hr0M4OnR5Zv0/CqfEPZTnOo+udqB4Dy7MLoBNoatNd4j6XwdEjZhvVtWoBtZtvrOsDDcSzBAZROxqvvaJnp/VUgmFAOsVI0GsCwSGjyU7InXW8MgmgkXuCllDBz6aR2BRQgXTDjiXLStN7OBvBbIAfdwECgyfHqO92aPCd0B3jrOnmG8wpYw1Y+/WjAOFpQZH0LPYKpmNmo3K6z2cYr0XkFrI/FA7FwKt/QDNEbTWqa2548i7h9vIcW27CNA9SYlEre0xvfMkY5QcoQ/CLjPk00p0UcT75VltrWAQq03C+NDEG6W2dhKXRHpva7Qcvz2KTzY+iATg5gKJo8ji/L7ZyFseHQzQk5zSWU0ZVwNI4vXWiuDm2CoLkjYgGiydBCk++geZ3BSnP4PfVXk+C4wpsDNOwMcRzFpDrPXTphQcNCZcuZLSN9FTpvgRJyhijlCgzawzMXhigLmseOe5g8w7cDGGzoPb3x1+UbdTRpEzRcpG1Lc3XowwGMES33dxU0OYVNIcU0N7UImgsU6s33UozxHQO2BwBcfFqeb711Do6wgnyVCLgpBzuGq6DpZF/fDlCDSLj69GHmXENoKmi6YBAHaCTEEFMTQ6xD0dzBcOX5vmKACRObhiiggt2BCnaDnU0MuQL+A8tZlO/pbwoc3JCCpqTirKfkpgn2wCNU1VjAAj4rsWQ/YqOJUnA82TiYw8quE9IWIewTc6xgTv97AZ7gzQE6gVnoy4Si/CmlwH+DB6iU+ONj7JgTvWa+6g4+YoBVqnrERlZoySVaoasDUptUFSvhbZmKf9AkuW98FGW7OCDRdbnepGoBqkfOjZI7r0d2ktytWACRpC8apK9nqWqAMZegeDOiVRKRo1437K+5A3wXJVvAa1G20RbQas1WlBzqbMBrUdbVAdbjp7WiZADDoa4o68wQLg6oPH7qWpTsgoqirDND1DkgMZ3AMI5exlHfUtUF1qKsI0NgMI4fLEfkRUXWVJpqU+TsG1aG0GeXJnszQS5MTL2paG+vy+3il2QTUz2S50AxwfhlC83xD9oCVIE1Y6ME1WddziMsDIG/Gp+mUr7SYJQL8CdywfZ9+Qa+wJ3YE2e7sN+bwMH29GE5O1RqkKTmVFPZBjjKsl6UMHzJoCvqbNcBMmcBdYzl/0BzZ6HUq2a2zW+Fn+5rj6GQ6uO2x8BvrMPwx5MC8Ezmoua5fBxpQ0ZV6TtK2K45QYL/sYl/AYgsxKl0s/vCAAAAAElFTkSuQmCC"
                alt=""
              />
              info@ptuniv.edu.in
            </li>
            <li>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              0413-2655281-288
            </li>
            <li>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAABCCAYAAAAR6FVNAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATQSURBVHgBzZpNdttGDIAxI8e79imrbil309dXK/IN5BNYPYHFE8Q9QewTtDkB6RPYPoGVXXdR3b6+bppMlllF2SYxEWBEKhYlihzMSOb3np5Eij/ADAACGCoIQBQlXfgORgDqmaZNVDCg3d38U2AAwSDAFABfwWeYmv9iA54oEMJC6+/1c0Qc0lWGIGNK578kZSZSZZwVWAgOeAbLI+yFQkizz3jhqoiTAgf9yxehBS8xU6D+eHN3etH0hEYKRD8lkdpXV/RzALvB4Cc8bjIbuu6AH/uXpyT8a9id8AwP2OvoMBnVHbhRATaZDDCF7ZnMJrpKqSuWYdNBnao/cns/h8dn2P3h5OPs/c2f6/5c6wM8daw9tAgNavz/3ellef+KArnDss0/htlsYkaOfVR27BUfIOFvoX3CM908Ei6xpEDuMBG0l0HUT84f7liYUG46b6H9zFBjz0zjGW98m4En6gX4M0OECeU3MX7BI7LZnv1keMz7KF24Bn+6kMFZsWFnIMToU8h9ScNxXoxMFdEgiUiAc0oZTkHOYhbmM/BEnE3OL0YjbO7iszrhGTrG0LFjPoc3QQbPwph/WAUo5j8HGYZG4sj8E0/AET6HzmUlapVeh0J1Yr99zMeOvED4h0S/JEOlbeh2v7/Gp5rMR5SkKQWpr/CMnQn2Hwn3MNLSaipT2Dhnr4WcHySmRKWrJlt6Bo7QiN2wM0IgrPMj18rORJoK8AhcCRPPS5fES9dzFDcRlCR16IhGazP3omt2ayuydSi1/wFCsy8KpzIF2oRIAcRPTyE0X2RZsEbJ4/x+CwW+EilgZD7gl4hVXfUE3KFkThJ/6QFCWWWwqs2mMwpqWyhlKHUnBRS+A3e6+j5I/TBHWoso/ItNyIAAegCecSIGnthkTs1TYwHkA5n8oURZ5BVPPwixpqNVAlJIdg17Xk9V7hTcSmbCjvy8fROBEM5kdZ5ITUAOj+LtwWGaNJkNbs8f9NPf8xpAHAgwl3nPbih8RaFxCB6QT4xpRMekyDX1U29sbpPl6YEmQTswsOGX0neEAJDM/GUVoBtN6CZBogopMiJBR/mVt4eeZ8SLvlCvn3KC1saO3DrM27txj38snsTisu4RoLA7KX5/SyV0+CJlWzwsZxcKUDSaekajncDR52E5q5f/DFiob43l0nNlfYCcmXtEEbSThfMWrKTTbXbmdRayWg9oSEHes9wmxvwdp+WdKwpwatFGX6iSqXKhu3eY3nq8AxGaFdsvqCwp2zQLtFjya9V/lQrkTVfnbllobBP537gy5d9c1Gu7lCPq3wfC1DWRNyqQO3QMjwSbcV0TubatQqHrWuHu8yRrOmvCZplGfaGsY2fBwO4wTdcfGr/w5LMU5Ipdd5vGjWr1xp25PCr9BluG7nHRVHjG/Z25wySlVc0ttBbneRgv17qc494b7djQGn6Bg31svlbmhLMCNrRq+2Q0EA5ebz5uslBeRv7e6IC6almQ94oK4Q0IEK/Q8A0pRxGvtOfY2fRZ8RTPQEH0czJQe6Iu2ywfeS9/8l4j40SLHvnO4ZVTFF/hGe8ZKHCYiSAjXxBMAaaBEkGFZ4Ius1pzojQA1odY45IiNCX4OrGNTnrlZaapT6jcRFATKpO/+8yt9WvJQ6oJXwGdQx98HXdwgAAAAABJRU5ErkJggg=="
                alt=""
              />
              East coast Road, Pillaichavady,.
              <br /> Puducherry, 605 014
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required=""
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required=""
            />
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email id"
              required=""
            />
            <label>Write your messages here</label>
            <textarea
              name="message"
              rows={6}
              placeholder="Enter your message"
              required=""
              defaultValue={""}
            />
            <div
              className="h-captcha"
              data-captcha="true"
              data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
            >
              <iframe
                src="https://newassets.hcaptcha.com/captcha/v1/f407fb0/static/hcaptcha.html#frame=checkbox&id=03iltd9oymvi&host=greatstack.in&sentry=true&reportapi=https%3A%2F%2Faccounts.hcaptcha.com&recaptchacompat=off&custom=false&hl=en&tplinks=on&pstissuer=https%3A%2F%2Fpst-issuer.hcaptcha.com&sitekey=50b2fe65-b00b-4b9e-ad62-3ba471098be2&theme=light&origin=https%3A%2F%2Fgreatstack.in"
                tabIndex={0}
                frameBorder={0}
                scrolling="no"
                allow="private-state-token-issuance 'src'; private-state-token-redemption 'src'"
                title="Widget containing checkbox for hCaptcha security challenge"
                data-hcaptcha-widget-id="03iltd9oymvi"
                data-hcaptcha-response=""
                style={{
                  pointerEvents: "auto",
                  width: 303,
                  height: 78,
                  overflow: "hidden"
                }}
              />
              <textarea
                id="h-captcha-response-03iltd9oymvi"
                name="h-captcha-response"
                style={{ display: "none" }}
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn dark-btn submit-btn">
              Submit now{" "}
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAeCAYAAABnuu2GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADPSURBVHgB7dnRDYJAEEXRpxVYAiXQgpVICVqB2IEdaAeUQAlrB9iBdjDOyPqhm2yCX7xhTzIJhITkBgJkAWZIRDY6vYw624cHGtLItzA1bo15+o2odTqwi7dikNQF7LzHVTrD0uKOYFfiWJU4VhpR6zyWFrez46u4cUb6GcOssbBBNyr48rSPYE9X6uMddtC5w5cTWGUeHnuwykS1YJV5QbdgVaJYlCgWmagrWMm4mOMyKriKMpKuBJsw5RwsK8E3nS3YxVuxi1eqlz9+SrwAYrdvIKJt0HIAAAAASUVORK5CYII="
                alt=""
              />
            </button>
          </form>
          <span />
        </div>
      </div>
      <button onclick="topfunction()" id="myBtn" title="Go to top">
        <i className="fa fa-chevron-up" style={{ color: "aliceblue" }} />
      </button>
      <div className="footer">
        <p>© 2024 Puducherry Technological University. All rights reserved.</p>
        <ul>
          <li>
            <a
              href="https://www.youtube.com/@GreatStackDev/videos"
              target="_blank"
            >
              Terms of Services
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@GreatStackDev/videos"
              target="_blank"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="video-player hide">
      <video src="/assets/college-video-6XtGR-D3.mp4" autoPlay="" controls="" />
    </div>
  </div>
  <div className="last">
    <p>Developed by PTU's Web Team.</p>
  </div>
  <div
    style={{
      backgroundColor: "rgb(255, 255, 255)",
      border: "1px solid rgb(215, 215, 215)",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 4px",
      borderRadius: 4,
      left: "auto",
      top: "-10000px",
      zIndex: -2147483648,
      position: "absolute",
      pointerEvents: "auto",
      transition: "opacity 0.15s ease-out 0s",
      opacity: 0,
      visibility: "hidden"
    }}
    aria-hidden="true"
  >
    <div style={{ position: "relative", zIndex: 1 }}>
      <iframe
        src="https://newassets.hcaptcha.com/captcha/v1/f407fb0/static/hcaptcha.html#frame=challenge&id=03iltd9oymvi&host=greatstack.in&sentry=true&reportapi=https%3A%2F%2Faccounts.hcaptcha.com&recaptchacompat=off&custom=false&hl=en&tplinks=on&pstissuer=https%3A%2F%2Fpst-issuer.hcaptcha.com&sitekey=50b2fe65-b00b-4b9e-ad62-3ba471098be2&theme=light&origin=https%3A%2F%2Fgreatstack.in"
        frameBorder={0}
        scrolling="no"
        allow="private-state-token-issuance 'src'; private-state-token-redemption 'src'"
        title="Main content of the hCaptcha challenge"
        style={{ border: 0, zIndex: 2000000000, position: "relative" }}
      />
    </div>
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        pointerEvents: "none",
        top: 0,
        left: 0,
        zIndex: 0,
        backgroundColor: "rgb(255, 255, 255)",
        opacity: "0.05"
      }}
    />
    <div
      style={{
        borderWidth: 11,
        position: "absolute",
        pointerEvents: "none",
        marginTop: "-11px",
        zIndex: 1,
        right: "100%"
      }}
    >
      <div
        style={{
          borderWidth: 10,
          borderStyle: "solid",
          borderColor: "transparent rgb(255, 255, 255) transparent transparent",
          position: "relative",
          top: 10,
          zIndex: 1
        }}
      />
      <div
        style={{
          borderWidth: 11,
          borderStyle: "solid",
          borderColor: "transparent rgb(215, 215, 215) transparent transparent",
          position: "relative",
          top: "-11px",
          zIndex: 0
        }}
      />
    </div>
  </div>
</>
    </div>
  )
}

export default Home