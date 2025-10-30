import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTimer, decrement } from '../redux/Slice/countSlice'

function Contact() {
  const {timer} = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <div>
      Contact
      <h4>{timer}</h4>
      <button onClick={() => dispatch(addTimer())}>Add</button>
      <button onClick={() => dispatch(decrement())}>minus</button>
    </div>
  )
}

export default Contact
