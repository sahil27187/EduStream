import React from "react";


const OverviewCard = ({ image,head,content }) => {


  return (
    <div className="carousel-item">
            <div className="card bg-base-100 image-full w-96 shadow-xl">
              <figure>
                <img
                  src={image}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <div tabIndex={0} className="collapse ">
                  <div className="collapse-title text-xl font-medium">{head}</div>
                  <div className="collapse-content">
                    <p>{content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
};

export default OverviewCard;