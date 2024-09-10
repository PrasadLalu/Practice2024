import PropsTypes from "prop-types";

const CommonInput = ({ id, name, value, label, placeholder, onChange, type }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                id={id}
                name={name}
                value={value}
                type={type || "text"}
                placeholder={placeholder || "Enter value here"}
                onChange={onChange}
            />
        </div>
    );
}

CommonInput.propTypes = {
    id: PropsTypes.string,
    name: PropsTypes.string,
    value: PropsTypes.string,
    label: PropsTypes.string,
    type: PropsTypes.string,
    onChange: PropsTypes.func,
    placeholder: PropsTypes.string,
}

export default CommonInput;
