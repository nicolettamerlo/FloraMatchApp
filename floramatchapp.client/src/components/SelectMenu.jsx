function SelectMenu({handleOptions, value, title, options}) {

    const handlechange = (e) => {
        handleOptions(e.target.value);
        options.map((option) => {
            if(option.value == e.target.value);
        })
      };

    return (
      <div>
          <label className="block mb-2 text-sm font-medium tracking-wider text-secondary-dark">{title}:</label>
          <select
          value={value}
          onChange={(e) => handlechange(e)}
          className="border border-secondary-dark rounded px-4 py-2 w-full sm:max-w-[300px] cursor-pointer select"
          >
          {options.map((item, index) => (
            <option className='option' key={index} value={item.value}>{item.icon} {item.label}</option>
          ))}
          </select>
    </div>
    )
}
export default SelectMenu