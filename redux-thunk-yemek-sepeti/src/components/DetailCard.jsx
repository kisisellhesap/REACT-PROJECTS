import { FaMinus, FaPlus } from "react-icons/fa6";

import { useDispatch, useSelector } from "react-redux";
import { addToBasket, deleteFromBasket } from "../redux/actions/basketAction";

const DetailCard = ({ item }) => {
  const { basket } = useSelector((store) => store.basketReducer);
  const dispatch = useDispatch();

  const filtered = basket.some((product) => product.id === item.id);

  const basketToAdd = () => {
    console.log(item.id);
    if (!filtered) {
      dispatch(addToBasket(item));
      // console.log("eklendi");
    } else {
      dispatch(deleteFromBasket(item.id));

      // console.log("bu item var ");
    }
  };
  return (
    <div
      className={!filtered ? "detail-card" : "detail-card detail-card-active"}
    >
      <div className="detail-card-info">
        <h3 className="detail-food-name">{item.title}</h3>
        <p className="detail-food-desc">{item.desc}</p>
        <span className="detail-food-price">45.99 $</span>
      </div>
      <img src={item.photo} alt="" />

      <button className="add-to-basket-btn" onClick={basketToAdd}>
        {!filtered ? <FaPlus /> : <FaMinus />}
      </button>
    </div>
  );
};

export default DetailCard;
