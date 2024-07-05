import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { DropdownDivider, Form } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toggleTheme } from "../Redux/Slice/themeSlice";
import { signOutSuccess } from "../Redux/Slice/userSlice";
import { BsCartFill } from "react-icons/bs";
import { mycontext } from "../App";

const Header = () => {
  const [
    items,
    setitems,
    cartcount,
    setCartCount,
    selectedproducts,
    setSelectedProducts,
  ] = useContext(mycontext);
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentuser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const handleSignout = () => {
    dispatch(signOutSuccess());
    localStorage.removeItem("Token");
    navigate("/signin");
  };
  return (
    <Navbar className="border-b-2 dark:bg-black">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white "
      >
        <span className="px-2 py-1 bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-200 rounded-lg text-white">
          IBA
        </span>
        Gold Shop
      </Link>

      <div className="flex gap-3 md:order-2 ">
        <Button
          className="w-13 h-10 hidden sm:inline "
          gradientDuoTone="cyanToBlue"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </Button>
        <Button gradientDuoTone="cyanToBlue">
          <Link className="nav-link" to="/cart">
            Cart
            <span className="badge bg-white text-black ms-1 rounded-full">
              {cartcount}
            </span>
          </Link>
        </Button>
        {currentuser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="user"
                img={currentuser.rest.profilePicture}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{currentuser.rest.username}</span>
            </Dropdown.Header>
            <Link to="/dashboard?tab=designs">
              <Dropdown.Item> Dashboard </Dropdown.Item>
            </Link>
            <DropdownDivider />
            <Dropdown.Item onClick={handleSignout}>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signup">
            <Button gradientDuoTone="cyanToBlue">SignUp</Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/productlist"} as={"div"} className="mt-2">
          <Link to="/productlist">Products</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/feedback"} as={"div"} className="mt-2">
          <Link to="/feedback">Feedback</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/review"} as={"div"} className="mt-2">
          <Link to="/review">Reviews</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
