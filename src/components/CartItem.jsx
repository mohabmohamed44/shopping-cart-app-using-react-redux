import PropTypes from "prop-types";
import { Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { remove } from "../redux/Slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const removeItemFromCart = () => {
    dispatch(remove(item.id));
    enqueueSnackbar(`Item removed from your cart!`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  return (
    <div className="flex items-center p-5 justify-between bg-violet-200 mt-2 mb-2 rounded-xl">
      <div className="flex p-3">
        <img src={item.image} className="h-28 rounded-lg" alt={item.title} />
        <div className="ml-10 self-start space-y-5">
          <h1 className="text-xl text-purple-700 font-semibold">
            {item.title}
          </h1>
          <p>${item.price}</p>
        </div>
      </div>
      <div
        onClick={removeItemFromCart}
        className="bg-purple-300 hover:bg-purple-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
      >
        <Delete className="text-gray-800" />
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
