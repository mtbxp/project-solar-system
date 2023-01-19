import React from 'react';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <Title headline="Missões" />
      </div>
    );
  }
}

export default MissionCard;
