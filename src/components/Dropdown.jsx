

const Dropdown = (props) => {
  return (
    <select 
    className='box-border bg-white w-60 ml-15 p-5'
    value={props.value} 
    onChange={(e)=>props.onChange(e.target.value)}  
    >
      <option value=''>{props.title}</option>
      {props.data.map((val, index) => (
        <option key={index} value={val}>{val}</option>
      ))}
    </select>
  )
}

export default Dropdown