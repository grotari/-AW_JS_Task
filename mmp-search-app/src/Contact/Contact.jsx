import React from 'react';

export const Contact = () => {
  return(
    <div className="wrapper fundament-default-footer" id="wrapper-footer-full">
      <div className="container" id="footer-full-content" tabIndex={-1}>
        <div className="footer-separator">
          <i data-feather="message-circle" /> CONTACT
        </div>
        <div className="row">
          <div className="footer-widget col-lg-1 col-md-2 col-sm-2 col-xs-6 col-3">
            <div className="textwidget custom-html-widget">
              <a href="/">
                <img
                  src="https://fundament.acdh.oeaw.ac.at/common-assets/images/acdh_logo.svg"
                  className="image"
                  alt="ACDH Logo"
                  style={{ maxWidth: "100%", height: "auto" }}
                  title="ACDH Logo"
                />
              </a>
            </div>
          </div>
          {/* .footer-widget */}
          <div className="footer-widget col-lg-4 col-md-4 col-sm-6 col-9">
            <div className="textwidget custom-html-widget">
              <p>
                ACDH-CH
                <br />
                Austrian Centre for Digital Humanities <br /> and Cultural
                Heritage
                <br />
                Austrian Academy of Sciences
              </p>
              <p>
                Bäckerstraße 13,
                <br />
                1010 Vienna
              </p>
              <p>
                T: +43 1 51581-2200
                <br />
                E: <a href="mailto:acdh-ch@oeaw.ac.at">acdh-ch@oeaw.ac.at</a>
              </p>
            </div>
          </div>
          {/* .footer-widget */}
          <div className="footer-widget col-lg-3 col-md-4 col-sm-4 ml-auto">
            <div className="textwidget custom-html-widget">
              <h6>HELPDESK</h6>
              <p>
                ACDH-CH runs a helpdesk offering advice for questions related to
                various digital humanities topics.
              </p>
              <p>
                <a
                  className="helpdesk-button"
                  href="mailto:acdh-helpdesk@oeaw.ac.at"
                >
                  ASK US!
                </a>
              </p>
            </div>
          </div>
          {/* .footer-widget */}
        </div>
      </div>
    </div>
  );
};
