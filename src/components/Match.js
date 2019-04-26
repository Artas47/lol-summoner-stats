import React, { Component } from 'react';
import {championIdToName} from './championIdToName';

import './Match.scss';

const Match = (props) => {
    return (
      <div className='match'>
        <div className='match--champion-name'>
          {championIdToName(props.championId)}
        </div>
        <div className='match--champion-img'>
          <img src={`https://opgg-static.akamaized.net/images/lol/champion/${championIdToName(props.championId)}.png?image=w_30&v=1`} />
        </div>
      </div>
    )
}

export default Match;

