import React from "react";
import "../styles/m-card.css";
const Mcard = () => {
  const arrayFilm = [
    {
      title: "Phim Thịnh Hành",
      images: [
        "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2025/04/02/ws60io53_1920x1080-jedgar_296_168.webp",
        "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2021/03/16/2a2xe5su_1920x1080-doisongbimatcuathucung_296_168.webp",
      ],
    },

    {
      title: "Mới nhất",
      images: [
        "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/03/31/s97nhv78_1920x1080-nhungdieunhonhat_296_168.webp",
        "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2025/04/02/vub1cp8k_1920x1080-nhungconanglamchieu_296_168.webp",
      ],
    },
  ];
  return (
    <>
      <div className="wrapper-film">
        {arrayFilm.map((item) => {
          return (
            <>
              <h1>{item.title}</h1>
              <div className="parent-card">
                {item.images.map((image) => {
                  return (
                    <div className="card-container">
                      <span className="card-tag">HBO GO</span>
                      <img className="card-image" src={image} />
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Mcard;
