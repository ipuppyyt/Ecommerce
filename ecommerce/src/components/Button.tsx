

const Button = (props:any) => {
  return (
    <div>
      <button
          className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-blue-400">
          {props.value}
        </button>
    </div>
  )
}

export default Button
