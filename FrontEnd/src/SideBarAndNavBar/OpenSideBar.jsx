
import PropTypes from 'prop-types';
import Navbar from './Navbar';

const OpenSideBar = ({ sidebarToggle, setsidebarToggle, clicked, detail, setdetail, video, setvideo, assignment,
  setassignment, ppt, setppt }) => {
  return (
    <div className={`${sidebarToggle ? "" : "ml-64"} w-full `}>
      <Navbar
        clicked={clicked}
        sidebarToggle={sidebarToggle}
        setsidebarToggle={setsidebarToggle}
        detail={detail}
        setdetail={setdetail}
        video={video}
        setvideo={setvideo}
        assignment={assignment}
        setassignment={setassignment}
        ppt={ppt}
        setppt={setppt}
      />
    </div>
  );
};


OpenSideBar.propTypes = {
  sidebarToggle: PropTypes.bool.isRequired,
  setsidebarToggle: PropTypes.func.isRequired,
  clicked: PropTypes.bool.isRequired,
  detail: PropTypes.bool.isRequired,
  setdetail: PropTypes.func.isRequired,
  video: PropTypes.bool.isRequired,
  setvideo: PropTypes.func.isRequired,
  assignment: PropTypes.bool.isRequired,
  setassignment: PropTypes.func.isRequired,
  ppt: PropTypes.bool.isRequired,
  setppt: PropTypes.func.isRequired,
};



export default OpenSideBar;
