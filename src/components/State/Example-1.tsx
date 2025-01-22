"use client";

import React, { useState } from 'react'

const Example_1 = () => {
    const [count, setcount] = useState(() => {
        let initialCount = 10;
        return initialCount;
    });

  return (
    <div>Example_1 Count : {count}</div>
  )
}

export default Example_1