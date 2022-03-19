import { memo } from "react";

export const Small = memo(({value}) => {

  console.log('Me volví a mostrar :(');

  return (
    <small> {value} </small>
  )
})
