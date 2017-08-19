import React from 'react';
import {
  Row,
  Column
} from 'react-foundation';
import FooterTop from './FooterTop';

// @todo: get this from the server/drupal
const links = [
  { label: "What we do", path: "/what-we-do"},
  { label: "Portfolio", path: "/portfolio"},
  { label: "Musings", path: "/blog"},
  { label: "Videos", path: "/videos"},
  { label: "Contact", path: "/contact"},
  { label: "Careers", path: "/careers"}
];

export const PageFooter = () => {
  return (
    <section style={footer}>
      <Row>
        <Column small={12}>
          <FooterTop links={links} />
        </Column>
      </Row>
      <div className="base-line" />
      <Row>
        <Column large={6}>
          <div className="logo-img" />
          <Row>
            <Column large={6}>
              <Row className="address-info">
                <Column medium={6}>
                  <address><span className="region">Los Angeles</span> 6080 Center Dr. Suite 600<br />Los Angeles, CA 90045</address>
                  <a href="tel:13109430246">+1 310 943 0246</a>
                </Column>
                <Column medium={6}>
                  <address><span className="region">High Desert</span> 12180 Ridgecrest Rd #106<br />Victorville, CA 92395</address>
                  <a href="tel:17605611515">+1 760 561 1515</a>
                </Column>
              </Row>
            </Column>
          </Row>
        </Column>
      </Row>
    </section>
  );
};

const footer = {
  backgroundColor: "#3a4047"
};