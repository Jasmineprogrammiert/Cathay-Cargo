import "./navbar.scss";
import AirlinesIcon from '@mui/icons-material/Airlines';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <AirlinesIcon sx={{ fontSize: "28px" }} />
        <span>Cathay Cargo</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <SupervisorAccountIcon />
          <span>Admin</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
