import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div className="category-container">
      <h2 className="sidebar-title">Category</h2>
      <div className="inputs-container">
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="category" />
          <span className="checkmark"></span>All
        </label>
        <Input handleChange={handleChange} value="Terrace" title="Terrace" name="category" />
        <Input handleChange={handleChange} value="Open Land" title="Open Land" name="category" />
        <Input handleChange={handleChange} value="Balcony" title="Balcony" name="category" />
        <Input handleChange={handleChange} value="Veranda" title="Veranda" name="category" />
        <Input handleChange={handleChange} value="Apartment" title="Apartment" name="category" />
      </div>
    </div>
  );
}

export default Category;

