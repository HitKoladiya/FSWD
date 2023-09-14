import React from 'react'

export default function Alert(props) {

  return (
    <div>
      {props.alert && <div className={`absolute w-full p-3 px-10 text-xl ${props.alert.type === 'Success' ? 'bg-[#d4edda]' :'bg-[#f8d7da]'}`} role="alert">
        <strong> {props.alert.type}{' '}</strong>: {props.alert.msg}
      </div>}
    </div>
  )
}
