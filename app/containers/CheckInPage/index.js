/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Button from '../../components/Button';

export default function CheckInPage() {
  return (
    <div>
      <h1>
      <FormattedMessage {...messages.header} />
      </h1>
      <h4>
      <FormattedMessage {...messages.motto} />
      </h4>

      <form>
        <input type="text"/>
        <input type="text"/>
        <Button type="submit">Check in</Button>
      </form>
    </div>
  );
}
