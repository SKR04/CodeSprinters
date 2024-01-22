import React from 'react';

const Landing = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home Page</title>
        <link rel="stylesheet" href="path-to-your-css-file.css" />
      </head>
      <body>
        <nav>
          <a href="#">Home</a>
          <a href="#">Fryde AI</a>
          <a href="#">Workflow Analysis</a>
          <a href="#">Forecast Hiring</a>
        </nav>

        <div class="content">
          <h1>Welcome to HireOps</h1>
          <p>
            Explore our modules:
          </p>
          <ul>
            <li><a href="/fryde">Fryde AI</a></li>
            <li><a href="/workforce-analysis">Workflow Analysis</a></li>
            <li><a href="/forecasted-hiring">Forecast Hiring</a></li>
          </ul>
        </div>

        <footer class="footer">
          <div class="footer__addr">
            <h1 class="footer__logo">HireOps</h1>
            <h2>Contact</h2>
            <address>
              21 - Anna University, Chennai<br />
              Phone no - 044 239013<br />
              Mail us - info@hireops.com
            </address>
          </div>
          <ul class="footer__nav">
            <li class="nav__item">
              <h2 class="nav__title">Media</h2>
              <ul class="nav__ul">
                <li>
                  <a href="#">LinkedIn</a>
                </li>

                <li>
                  <a href="#">Instagram</a>
                </li>

                <li>
                  <a href="#">X</a>
                </li>
              </ul>
            </li>

            <li class="nav__item nav__item--extra">
              <h2 class="nav__title">Services</h2>

              <ul class="nav__ul ">
                <li>
                  <a href="#">Skill Matching Engine</a>
                </li>

                <li>
                  <a href="#">Workflow Analysis</a>
                </li>

                <li>
                  <a href="#">Forecast Hiring</a>
                </li>
              </ul>
            </li>
            <li class="nav__item nav__item--extra">
              <h2 class="nav__title">Links</h2>

              <ul class="nav__ul ">
                <li>
                  <a href="#">Home</a>
                </li>

                <li>
                  <a href="#">Blogs</a>
                </li>

                <li>
                  <a href="#">Our Team</a>
                </li>
              </ul>
            </li>
          </ul>

          <div class="legal">
            <p>&copy; HireOps. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default Landing;
