export default function Input01(props) {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        {...props.check}
      />
    </>
  );
}
