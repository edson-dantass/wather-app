import { LabelCardContainer, Search, SideNav, SideNavContent } from "./styles/AppStyles";
import { IoMenu } from "react-icons/io5";
import { Map, WatherCard } from "./components";

function App() {
  return (
    <>
      <SideNav>
        <SideNavContent>
          <Search>
            <IoMenu />
          </Search>
          <LabelCardContainer>
            <h5>Localização atual</h5>
          </LabelCardContainer>
          <WatherCard />
          <LabelCardContainer>
            <h5>Previsões</h5>
          </LabelCardContainer>
          <WatherCard />
        </SideNavContent>
      </SideNav>
      <Map />
    </>
  );
}

export default App;
