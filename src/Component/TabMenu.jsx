const TabMenu = ({ text,className, ...props }) => {
    return (
      <div
        {...props}
        className={`rounded-[1rem] w-[12rem] h-[4rem] text-center border-2 border-[blue] px-[1rem] py-[0.5rem] cursor-pointer ${className} `}
      >
        {text}
      </div>
    )
  }
  
  export default TabMenu