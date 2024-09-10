import CommonInput from "./common-input";

const inputTypes = {
    TEXT: "text",
    SELECT: "select",
} 
const CommonForm = ({ formControls = [], formData, setFormData }) => {
    const renderFormElement = (control) => {
        console.log(control);
        let content = null;
        switch (control.componentType) {
            case inputTypes.TEXT:
                content = <CommonInput type="text" />;
                break;
            default:
                break;
}
        return content;

    }

    return <form>
        {
            formControls?.length
                ?  formControls.map(control => renderFormElement(control))
                : null
        }
    </form>
}

export default CommonForm;
