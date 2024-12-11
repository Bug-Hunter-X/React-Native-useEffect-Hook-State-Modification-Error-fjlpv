// Correct implementation using setState
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return (
    <View>
      <Text>Count: {count}</Text>
    </View>
  );
};

export default MyComponent;