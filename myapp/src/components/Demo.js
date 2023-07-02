import React from 'react'

function Demo(props) {
    console.log(props);
  return (
    <div>
        <h2>{props.number}</h2>
    </div>
  )
}
export default Demo;