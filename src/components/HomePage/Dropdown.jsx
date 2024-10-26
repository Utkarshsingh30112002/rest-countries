const Dropdown = (props) => {
  return (
    <select 
    className='box-border bg-white w-60 md:ml p-5 bg-LME text-LMT dark:bg-DME dark:text-DMT place-self-center'
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