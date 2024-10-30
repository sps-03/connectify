const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="mt-4 flex gap-3">
      <div className="form-control">
        <label className={`label cursor-pointer gap-2 ${selectedGender === "male" ? "font-semibold" : ""}`}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-gray-500 bg-gray-800"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label cursor-pointer gap-2 ${selectedGender === "female" ? "font-semibold" : ""}`}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-gray-500 bg-gray-800"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
