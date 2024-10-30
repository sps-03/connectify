import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="flex flex-col border-r border-slate-500 border-opacity-50 p-6">
      <SearchInput />
      <div className="divider mb-0"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
