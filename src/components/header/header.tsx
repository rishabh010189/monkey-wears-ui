import logo from '../../assets/img/monkey-wears-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-white shadow-md min-h-[70px] flex">
      <div className="flex w-full justify-between items-center h-full">
        <div className="w-5/12">
          <ul className="flex gap-4 px-2">
            <li className="font-bold text-xl p-4 border-b-4 border-transparent hover:border-red-500 cursor-pointer">
              MEN
            </li>
            <li className="font-bold text-xl p-4 border-b-4 border-transparent hover:border-red-500 cursor-pointer">
              WOMEN
            </li>
          </ul>
        </div>
        <div className="w-2/12 flex justify-center">
          <img src={logo} className="w-24" />
        </div>
        <div className="w-5/12 justify-end items-center flex">
          <div className="relative mr-4">
            <input
              name="search"
              id="search"
              type="text"
              className="border border-gray-500 h-10 w-72 px-4 pr-10 rounded-4xl"
              placeholder="What's in your mind today?"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-lg text-gray-500 absolute right-3 top-3"
            />
          </div>
          <FontAwesomeIcon icon={faUser} className="text-lg cursor-pointer px-2" />
          <FontAwesomeIcon icon={faCartShopping} className="text-lg cursor-pointer px-2" />
        </div>
      </div>
    </header>
  );
};

export default Header;
