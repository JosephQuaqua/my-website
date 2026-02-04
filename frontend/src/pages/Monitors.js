import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/monitors.css";

function Monitors() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const team = [
    {
      role: "Founder",
      name: "Joseph Y. M. Quaqua",
      course: "B.Tech Computer Science",
      year: "2nd Year",
      room: "Ground-Floor: 018",
      whatsapp: "918401575682",
      image: "https://scontent.famd15-1.fna.fbcdn.net/v/t39.30808-1/556405375_798971459494041_4873750845762227318_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=1d2534&_nc_ohc=TVxoIehj49YQ7kNvwFSaB6K&_nc_oc=AdmXc-MB0VaQVO8Va0I_qefI_MIgjOqsSpt79Dvu4g9VoTjFlKA6E8d_Ym6JzLWTMTE&_nc_zt=24&_nc_ht=scontent.famd15-1.fna&_nc_gid=cWX4Vus5aI2oSQMEJOA8Ag&oh=00_AfvDuwIhBEPSv843SKTLyZ2trJIFTjgiN0l3PB5GZbUtGg&oe=6988C2E3"
    },
    {
      role: "Co-Founder",
      name: "Alexander Tamba Korsor",
      course: "BCom Finance",
      year: "3rd Year",
      room: "4th-Floor: 410",
      whatsapp: "231886326999",
      image: "https://scontent.famd15-1.fna.fbcdn.net/v/t39.30808-6/517688070_1882118599188269_7108688917183018114_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=eaDJFxNAb20Q7kNvwHrx46L&_nc_oc=Adnft9xhLFT37PRkFlmWpsJsPNs_yTl2RY4xBhNq5gY4t12J_oIBLN6XIGWhxYZiZ4U&_nc_zt=23&_nc_ht=scontent.famd15-1.fna&_nc_gid=zHb7nKShumZ2zs6jwlkXEg&oh=00_Afsu2ncSZebJwriWwgY_6715IoumKenFwpBl_EVUHFNSRw&oe=6988E2E4"
    },
    {
      role: "Loan Manager",
      name: "P. Joseph Bundoo",
      course: "BSc Pharmacy",
      year: "2nd Year",
      room: "4th-Floor: 424",
      whatsapp: "231881927395",
      image: "https://scontent.famd15-2.fna.fbcdn.net/v/t39.30808-6/541724663_749460107955200_6722659497955382412_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=i2noOXomJz8Q7kNvwFh9fUv&_nc_oc=AdlJl0EXRIqyYrGWWkWTu7z9J6w59tvfhjvNAWD_32rR-6fGm7CUZ4awG2BeH-W8gB8&_nc_zt=23&_nc_ht=scontent.famd15-2.fna&_nc_gid=cKdevGPYu4f1lNU__eE7wQ&oh=00_AfuFHNS1e0Vxea193OK-qp62TBb7y0acmLTD54y7Z_Wqfg&oe=6988C1C2"
    }
  ];

  return (
    <div className="page-container">

      {/* Sidebar */}
      <Sidebar
        handleLogout={handleLogout}
        isOpen={drawerOpen}
        closeDrawer={() => setDrawerOpen(false)}
      />

      <main className="main-content">

        {/* Topbar (same as Dashboard) */}
        <header className="topbar">
          <button className="menu-btn" onClick={toggleDrawer}>
            ☰
          </button>

          <div className="user-profile">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="User"
            />
            <span>Management Team</span>
          </div>
        </header>

        <div className="content-area">

          <header className="monitor-header">
            <h2>Management Team</h2>
            <p>Contact our leadership team directly for support and inquiries</p>
          </header>

          <div className="monitor-grid">
            {team.map((member, index) => (
              <div className="monitor-card" key={index}>
                <div className="profile-image">
                  <img src={member.image} alt={member.name} />
                </div>

                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>

                <div className="info">
                  <p><strong>Course:</strong> {member.course}</p>
                  <p><strong>Year:</strong> {member.year}</p>
                  <p><strong>Room:</strong> {member.room}</p>
                </div>

                <a
                  href={`https://wa.me/${member.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  Chat on WhatsApp
                </a>
              </div>
            ))}
          </div>

        </div>

      </main>
    </div>
  );
}

export default Monitors;
