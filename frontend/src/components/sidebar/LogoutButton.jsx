import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut className="h-6 w-6 cursor-pointer text-gray-400 hover:text-red-500" onClick={logout} title="Logout" />
      ) : (
        <span className="loading loading-spinner text-gray-400"></span>
      )}
    </div>
  );
};

export default LogoutButton;
