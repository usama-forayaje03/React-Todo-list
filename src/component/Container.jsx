function Container(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <div className={`max-w-screen-lg py-3 m-auto ${props.className}`}>{props.children}</div>
  )
}

export default Container