import React, { useState } from 'react'

export default (props) => {
  let { state, setState } = useState({ name: "wodfe" })

  return (
    <div className="login">
      <span>React Admin</span>
    </div>
  );
};
