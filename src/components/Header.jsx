import cactusLogo from '../assets/cactus-logo.svg';
import giftIcon from '../assets/gift.svg';
import bellIcon from '../assets/bell.svg';
import hambunrger from '../assets/hamburger.svg';

const Header = () => (
  <header
    className="w-full h-14 flex justify-between items-center px-10 bg-white">
    <div>
      <img src={cactusLogo} alt="Cactus Logo"/>
    </div>

    <div>
      <ul className="flex gap-8 text-gray-500 text-sm font-normal">
        <li>Dashboard</li>
        <li>Portfolio</li>
        <li className="text-teal-600">Debt</li>
        <li>Underwriting</li>
        <li>Contacts</li>
        <li>Reports</li>
      </ul>
    </div>

    <div className="flex gap-2 text-sm">
      <button
        className="p-2 border-[0.1em] rounded border-gray-200 flex items-center">
        <img src={giftIcon} alt="Gift Icon"/>
        <span className="text-lg ml-2">$0</span>
      </button>
      <button
        className="p-2 border-[0.1em] rounded border-gray-200 flex items-center px-3">
        <img src={bellIcon} alt="Notification Icon"/>
      </button>
      <button
        className="p-2 border-[0.1em] rounded border-gray-200 flex items-center">
        <img src={hambunrger} alt="Menu toggle"/>
        <span
          className="bg-gray-100 text-gray-800 rounded-full p-1 ml-2 font-semibold">TL</span>
      </button>
    </div>
  </header>
);

export default Header;
