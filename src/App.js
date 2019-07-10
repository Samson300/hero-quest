import React from 'react';
import World from './containers/WorldContainer';
import GameMenu from './containers/GameMenuContainer';
import LoginPage from './containers/LoginPageContainer';


function App() {
  return (
    <div>
      <GameMenu />
      <LoginPage />
      <World />
    </div>
  );
}

export default App;
