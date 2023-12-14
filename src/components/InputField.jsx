const InputField = (props) => {
  const { setFormData, name, ...otherProps } = props;
  return (
    <input
    {...otherProps}
      className='text-sm py-4 px-6 w-full outline-none border border-border-default rounded-l-lg'
      autoComplete='off'
        onChange={(e) =>
          setFormData((prevState) => ({
            ...prevState,
            [name]: e.target.value,
          }))
        }
    />
  );
};

export default InputField;
