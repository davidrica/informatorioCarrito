import styles from "./styles.module.css";

export default function Inputs(props) {
  const { name, value, type, onChange, labelContent = "", autoComplete = "off", args } = props;
  const inputFieldId = `input-form-${name}`;

  return (
    <div >
        <span>{labelContent}</span>


      <input
        id={inputFieldId}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        autoComplete={autoComplete}
        {...args}
      />
      
    </div>
  );
}