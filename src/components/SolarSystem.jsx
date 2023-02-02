import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <div className="title">
          <Title headline="Planetas" />
        </div>
        <div className="container-planet">
          {planets.map((planet) => (
            <div key={ planet.name }>
              <PlanetCard
                planetName={ planet.name }
                planetImage={ planet.image }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
