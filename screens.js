import HomeScreen from './app/home_screen';
import Welcome from './app/welcome';
import LevelsList from './app/levels_list';
import Level from './app/level';
import Guess from './app/guess';

const Screens = {
  		Home: { screen: HomeScreen },
  		LevelsList: { screen: LevelsList },
  		Level: { screen: Level },
  		Guess: { screen: Guess },
	};

export default Screens;