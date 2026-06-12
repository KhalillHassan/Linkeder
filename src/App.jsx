import { useEffect, useState } from "react";
import ProfileList from "./components/ProfileList";
import SideBar from "./components/SideBar";
import MatchesPage from "./components/MatchesPage";
import TopNavbar from "./components/TopNabar";

function App() {
  const [activePage, setActivePage] = useState("discover");

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("linkeder-theme");
    return savedTheme || "light";
  });

  const [connectedProfiles, setConnectedProfiles] = useState(() => {
    const savedProfiles = localStorage.getItem("linkeder-connected-profiles");

    if (savedProfiles) {
      return JSON.parse(savedProfiles);
    }

    return [];
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("linkeder-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(
      "linkeder-connected-profiles",
      JSON.stringify(connectedProfiles)
    );
  }, [connectedProfiles]);


  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  function addConnectedProfile(profile) {
    setConnectedProfiles((prevProfiles) => {
      const alreadyConnected = prevProfiles.some(
        (savedProfile) => savedProfile.id === profile.id
      );

      if (alreadyConnected) {
        return prevProfiles;
      }

      return [...prevProfiles, profile];
    });
  }
  
  function deleteConnectedProfile(profileId) {
  setConnectedProfiles((prevProfiles) =>
    prevProfiles.filter((profile) => profile.id !== profileId)
  );
}
  return (
    <div className="app">
      <SideBar activePage={activePage} setActivePage={setActivePage} />

      <main className="main-content">
        <TopNavbar theme={theme} onToggleTheme={toggleTheme} />

        {activePage === "discover" && (
          <>
            <div className="page-header">
              <h2 className="page-title">
                Discover Amazing <span>professionals</span>
              </h2>

              <p className="page-description">
                Connect with talented people for your next project.
              </p>
            </div>

            <div className="card-area">
              <ProfileList onConnectProfile={addConnectedProfile} />
            </div>
          </>
        )}

        {activePage === "matches" && (
        <MatchesPage
  connectedProfiles={connectedProfiles}
  onDeleteProfile={deleteConnectedProfile}
/>
        )}
      </main>
    </div>
  );
}

export default App;