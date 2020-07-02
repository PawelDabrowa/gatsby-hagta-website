import React from 'react';
import { Link } from 'gatsby';

import { NavigationWrapper,  NavigationList, NavigationListItem,  Logo } from './styles/NavigationStyles';

const Navigation = () => (
  <NavigationWrapper>
    <Logo>
      <Link to="/">HAGTA</Link> 
    </Logo>
    <NavigationList>
        <NavigationListItem>
          <Link to="/articles">articles</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/about">about</Link>
        </NavigationListItem>
        <NavigationListItem>
         <Link to="/gallery">gallery</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/contact">contact</Link>
        </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
);

export default Navigation;