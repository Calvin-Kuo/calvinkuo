import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1998-01-05T23:51:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current Age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries Visited',
    value: 30,
    link:
      'https://www.google.com/maps/d/edit?mid=1gY1hgPN2AzoMqObDrDVvpdhKXLjOcE0&usp=sharing',
  },
  {
    key: 'location',
    label: 'Home State',
    value: 'New Jersey, US',
  },
];

export default data;
