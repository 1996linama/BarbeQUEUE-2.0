/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'BarbeQUEUE 2.0',
  },
  motto : {
    id: `${scope}.motto`,
    defaultMessage: 'Get barbequeued!'
  }
});
