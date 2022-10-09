/* eslint-disable no-unused-expressions */
import { useRef } from "react";
import addPhoto from "../image/addPhoto.png";

const AddFile = ({ value, onChange, onSubmit }) => {
  const inputRef = useRef();

  return (
    <div className="filterWrap">
      <div className="imageWrap">
        <img src={value ? value : addPhoto} alt="newPhoto" />
      </div>
      <label htmlFor="file-upload" className="fileUpload">
        <i className="fa fa-cloud-upload"></i>Загрузить фото
      </label>
      <input
        type="file"
        id="file-upload"
        name="file"
        onChange={() => onChange(URL.createObjectURL(inputRef.current.files[0]))}
        ref={inputRef}
      />

      <button onClick={(e) => {e.preventDefault(); onSubmit()}}> Добавить </button>
    </div>
  );
};

export default AddFile;
