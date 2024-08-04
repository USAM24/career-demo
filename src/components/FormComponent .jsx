import PropTypes from 'prop-types';
const FormComponent = ({ formData }) => {
  return (
    <form>
      {formData.map((field, index) => (
        <div key={index}>
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === 'checkbox' ? (
            <input type={field.type} name={field.name} id={field.name} />
          ) : (
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              placeholder={field.placeholder}
            />
          )}
        </div>
      ))}
    </form>
  );
};

FormComponent.propTypes = {
  formData: PropTypes.array.isRequired,
};

export default FormComponent;
