import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCities, getAllCitizens } from '../../redux/actions';
import { sortedCitizensSelector } from '../../redux/selectors';
import Citizen from '../Citizen/Citizen';

import './App.css';

function App() {

  const dispatch = useDispatch();
  const sortedCitizens = useSelector(sortedCitizensSelector);

  useEffect(() => {
    dispatch(getAllCities());
    dispatch(getAllCitizens());
  }, [dispatch]);

  const renderCitizens = (citizens) => {

    return (
      <ul className='citizens-list' key={citizens[0]._id + citizens[0].city_id}>
        {citizens.map(citizen => <Citizen key={citizen._id} citizen={citizen} />)}
      </ul>
    );
  };

  const renderList = (treeData, layer = 1) => {

    if (Array.isArray(treeData)) {
      return renderCitizens(treeData);
    };

    return Object.entries(treeData).map((treeItem) =>
      treeItem.map((element, index) => {

        if (typeof element !== 'object') {
          return <span key={element + index + layer} className={`tree__layer tree__layer_${layer}`}>{element}</span>
        };

        return renderList(element, layer + 1);
      }));
  };

  return (
    <div className='app'>

      {Object.keys(sortedCitizens).length === 0 ?
        <div>loading</div>
        :
        <div className='app__tree tree'>
          {renderList(sortedCitizens)}
        </div>
      }

    </div>
  );
};

export default App;
