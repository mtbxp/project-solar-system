import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    console.log(missions);
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <ul>
          {missions.map((mission) => (
            <li key={ mission }>
              <MissionCard
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Missions;
