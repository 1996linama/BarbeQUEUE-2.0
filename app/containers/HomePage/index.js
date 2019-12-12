/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { useHistory, withRouter } from 'react-router-dom';
import Button from '../../components/Button';
import { CenterContainer } from '../../components/Container'
import { Row } from '../../components/Row'
import { Col } from '../../components/Col'
import { H1C } from '../../components/H1'


export default function HomePage() {

  return (
    <CenterContainer>
      <Row>
        <Col>
          <H1C>
            <FormattedMessage {...messages.header} />
          </H1C>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button href='/path'>
            Customer
          </Button>
          <Button>
            Admin
          </Button>
        </Col>
      </Row>
    </CenterContainer>
  );
}
