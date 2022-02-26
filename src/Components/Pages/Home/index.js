import React from 'react';
import { useSelector} from 'react-redux';
import Words from '../../Words';
import Categories from '../../Categories';
import { HomeContainer } from './home.style';

function HomePage(props) {
  const words = useSelector((state) => state.words)

  return (
    <HomeContainer>
      <div>
        <Categories />  
      </div>
      <Words />
    </HomeContainer>
  );
}

export default HomePage;