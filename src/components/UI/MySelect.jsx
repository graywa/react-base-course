import React from 'react'

const MySelect = ({options, defaultValue, value, onChange}) => {

  return (
    <div style={{margin: '10px 0'}}>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option disabled value="">{defaultValue}</option>
        {options.map(opt => {
          return (
            <option key={opt.value} value={opt.value}>
              {opt.name}
            </option>
          )
        })}
      </select>
    </div>

  )
}

export default MySelect