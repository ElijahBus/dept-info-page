import containerIcon from '../assets/container.svg';
import listIcon from '../assets/list.svg';
import databaseIcon from '../assets/database.svg';
import trendUpIcon from '../assets/trend-up.svg';

const SideBar = () => (
  <div className="h-full w-14 bg-white flex flex-col items-center gap-4 pt-8">
    <button className="text-sm">
      <img src={containerIcon} alt="Container Icon"/>
    </button>

    <button className="text-sm bg-[#EEF3F8] rounded-lg p-2">
      <img src={listIcon} alt="List Icon"/>
    </button>

    <button className="text-sm">
      <img src={databaseIcon} alt="Database Icon"/>
    </button>
    
    <button className="text-sm">
      <img src={trendUpIcon} alt="Trend Up Icon"/>
    </button>
  </div>);

export default SideBar;
