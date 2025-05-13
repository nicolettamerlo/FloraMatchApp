import React from 'react';
import Header from '../components/Header';
import MatchForm from '../components/MatchForm';
import FlowersContainer from '../components/FlowersContainer';

const Homepage = () => {

  return (

    <div className="main min-h-screen p-6 text-muted font-body">
        <Header />
        <MatchForm />
        <FlowersContainer />
    </div>
    );

};

export default Homepage;
