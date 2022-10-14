import React from "react";

const User = ({name,surn,age}) => {
  return <>
      <tr>
        <td>{name}</td>
        <td>{surn}</td>
        <td>{age}</td>
        </tr>
      </>
}

export default User;