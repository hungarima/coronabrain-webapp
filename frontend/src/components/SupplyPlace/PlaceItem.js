import React, { useState, useContext } from "react";
import ReadMoreReact from "read-more-react";

import Card from "../../components/shared/UIElements/Card";
import Button from "../../components/shared/FormElements/Button";
import Modal from "../../components/shared//UIElements/Modal";
import Map from "../../components/shared//UIElements/Map";
import ProductList from "./ProductList";

import "./PlaceItem.css";

const PlaceItem = props => {
  const [showNumber, setShowNumber] = useState(false);

  const cancelNumber = () => {
    setShowNumber(false);
  };

  return (
    <React.Fragment>
      <Modal
        show={showNumber}
        onCancel={cancelNumber}
        header="Contact us"
        footerClass="place-item__modal-actions"
        footer={<React.Fragment></React.Fragment>}
      >
        <h1 className="phoneNumber">+65 8888 8888</h1>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.name} />
          </div>
          <div className="place-item__info">
            <h2>{props.name}</h2>
            <ul className="address">
              <li>
                <h3>{props.address}</h3>
              </li>
              <li>
                {props.available ? (
                  <p className="available">Open now</p>
                ) : (
                  <p className="unavailable">Closed</p>
                )}
              </li>
            </ul>
            <p className="details">Summary</p>
            <div className="description">
              <ReadMoreReact
                text={props.description}
                readMoreText={<a className="read">Read more</a>}
              />
            </div>
          </div>

          <div className="place-item__actions">
            <p className="details">Products</p>
            <ProductList sid={props.id} products={props.products} />
          </div>
          <div className="maps">
            <div className="map-container">
              <Map center={props.coordinates} zoom={16} />
            </div>
          </div>
          <div className="contact">
            <Button onClick={setShowNumber}>Contact now</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
