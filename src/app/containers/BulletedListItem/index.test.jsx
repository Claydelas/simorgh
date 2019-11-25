import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import BulletedListItemContainer from './index';
import { ServiceContext } from '#contexts/ServiceContext';
import { listItemA, listItemB } from '../BulletedList/fixtures';

describe('BulletedListItemContainer', () => {
  describe('with data', () => {
    shouldMatchSnapshot(
      'should render text correctly',
      <ServiceContext.Provider
        value={{ script: latin, service: 'news', dir: 'ltr' }}
      >
        <BulletedListItemContainer blocks={listItemA.model.blocks} />
      </ServiceContext.Provider>,
    );

    shouldMatchSnapshot(
      'should render another text correctly',
      <ServiceContext.Provider
        value={{ script: latin, service: 'news', dir: 'ltr' }}
      >
        <BulletedListItemContainer blocks={listItemB.model.blocks} />
      </ServiceContext.Provider>,
    );
  });
});
