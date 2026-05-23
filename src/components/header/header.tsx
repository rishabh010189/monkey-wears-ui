import logo from '../../assets/img/monkey-wears-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import FancySearch from '../fancy-search/FancySearch';
import useHeader from '../../hooks/header/useHeader';

const Header = () => {
  const { cartCount, disclaimerSeenHandler, showDisclaimer } = useHeader();
  return (
    <>
      {showDisclaimer && (
        <div className="bg-zinc-950 text-white py-1 relative">
          <div className="text-center px-12">
            This is a dummy project inspired by the Souled store and is not meant for real world
            business use cases. If you really wish to check out the really cool products, please{' '}
            <a
              href="https://www.thesouledstore.com/"
              target="blank"
              className="text-pink-500 font-bold"
            >
              explore here.
            </a>
          </div>
          <FontAwesomeIcon
            onClick={disclaimerSeenHandler}
            aria-label="my-profile"
            icon={faClose}
            className="absolute text-lg cursor-pointer px-2 top-[6px] right-[10px]"
          />
        </div>
      )}
      <header className="bg-white shadow-md min-h-[70px] flex">
        <div className="flex w-full justify-between items-center h-full">
          <div className="hidden lg:block w-5/12">
            <ul className="flex gap-4 px-2">
              <Link
                className="font-bold text-xl p-4 border-b-4 border-transparent hover:border-red-500 cursor-pointer"
                to="/products?category=men"
              >
                MEN
              </Link>
              <Link
                className="font-bold text-xl p-4 border-b-4 border-transparent hover:border-red-500 cursor-pointer"
                to="/products?category=women"
              >
                WOMEN
              </Link>
            </ul>
          </div>
          <div className="w-2/12 flex justify-center">
            <Link to="/">
              <img alt="Monkey wears brand logo" src={logo} className="w-24" />
            </Link>
          </div>
          <div className="w-5/12 justify-end items-center flex">
            <FancySearch />
            <FontAwesomeIcon
              aria-label="my-profile"
              icon={faUser}
              className="text-lg cursor-pointer px-2"
            />
            <Link to="/cart">
              <div className="relative cursor-pointer" aria-label="checkout-button">
                <FontAwesomeIcon icon={faCartShopping} className="text-lg cursor-pointer px-2" />
                {cartCount > 0 && (
                  <div className="absolute bg-red-500 rounded-full w-[20px] h-[20px] items-center justify-center text-white text-xs text-center top-[10px] left-[-2px]">
                    {cartCount}
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
