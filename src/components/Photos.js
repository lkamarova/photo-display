import { v4 } from "uuid";

const Photos = ({ photos }) => {
  return (
    <div className="listWrap">
          {photos?.map((link) => (
            <div className="photo" key={v4()}><img src={link} alt="newPhoto" /></div>
          ))}
          {!photos.length && <span>У вас пока нет фото</span>}
    </div>
  );
};

export default Photos;