import Photocard from "../Photocard/Photocard";
import "../PhotocardList/PhotocardList.scss";

function PhotocardList() {
  return (
    <div className="photoCardList">
      {filterPhotos.map((photo) => (
        <Photocard photo={photo} key={photo.id} />
      ))}
    </div>
  );
}

export default PhotocardList;
