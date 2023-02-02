import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';

class Missions extends React.Component {
  render() {
    console.log(missions);
    return (
      <div data-testid="missions">
        <div className="title">
          <Title headline="Missões" />
        </div>
        <div className="container-missions">
          {missions.map((mission) => (
            <div key={ mission } className="card-missions">
              <MissionCard
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Missions;
