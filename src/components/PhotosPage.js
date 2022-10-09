import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto } from "../photosSlice";
import AddFile from "./AddFile";
import Photos from "./Photos";

const PhotosPage = () => {
  const [newPhoto, setNewPhoto] = useState("");
  const allPhotos = useSelector((state) => state.profilePhotos.photos);
  const dispatch = useDispatch();

  console.log("allPhotos", allPhotos);

  const onSetNewPhoto = (value) => {
    setNewPhoto(value);
  };

  const onAddSubmit = () => {
    dispatch(addPhoto(newPhoto));
    setNewPhoto("");
  };

  return (
    <div className="listServicesWrap">
      <AddFile
        value={newPhoto}
        onChange={onSetNewPhoto}
        onSubmit={onAddSubmit}
      />
      <Photos photos={allPhotos} />
    </div>
  );
};

export default PhotosPage;
