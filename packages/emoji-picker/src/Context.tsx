import React from 'react';
import { LATEST_DATASET_VERSION } from 'interweave-emoji';
import { Context } from './types';
import { CONTEXT_CLASSNAMES, CONTEXT_MESSAGES } from './constants';

export default React.createContext<Context>({
  classNames: CONTEXT_CLASSNAMES,
  emojiLargeSize: 0,
  emojiPadding: 0,
  emojiPath: '{{hexcode}}',
  emojiSize: 0,
  emojiSource: {
    compact: false,
    locale: 'en',
    version: LATEST_DATASET_VERSION,
  },
  messages: CONTEXT_MESSAGES,
});
