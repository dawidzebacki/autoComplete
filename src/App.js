import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Main from './views/Main';

const App = () => {
  
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const responseData = await response.json();
    dispatch({
      type: "FETCH_USERS_SUCCESS",
      data: responseData
    })
    console.info("Pobrano dane:", responseData);
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <Main />
    </>
  );
}

export default App;
