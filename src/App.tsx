import {
  ForecastLeft,
  ForecastRight,
  Forecasts,
  LabelCardContainer,
  Loading,
  ScrollPaddingRight,
  Search,
  SideNav,
  SideNavContent,
  TopSideNav,
} from "./styles/AppStyles";
import { IoMenu, IoClose } from "react-icons/io5";
import { Map, WatherCard } from "./components";
import { useWather } from "./hooks/WatherHook";
import { Scrollbar } from "react-scrollbars-custom";
import { daysPTBR } from "./config/daysPTBR";
import { useState } from "react";

function App() {
  const { wather } = useWather();
  const [visibleMenu, setVisibleMenu] = useState(true);

  const getCurrentDay = (date: string) => {
    const currentDate = new Date(date);
    const currentDay = daysPTBR.find((d) => d.key === currentDate.getDay());
    return currentDay?.name;
  };
  const formatDate = (date: string) => {
    const splited = date.split("-");
    return `${splited[2]}/${splited[1]}/${splited[0]}`;
  };
  return (
    <>
      <TopSideNav>
        {visibleMenu ? (
          <IoClose onClick={() => setVisibleMenu(!visibleMenu)} />
        ) : (
          <IoMenu onClick={() => setVisibleMenu(!visibleMenu)} />
        )}
      </TopSideNav>
      {visibleMenu && (
        <SideNav>
          <SideNavContent>
            <Search>
              <IoMenu onClick={() => {}} />
            </Search>
            <Scrollbar style={{ height: "calc(100% - 5em)" }} thumbYProps={{ style: { background: "#161d2f" } }}>
              <ScrollPaddingRight>
                {wather.isData ? (
                  <>
                    <LabelCardContainer>
                      <h5>Localização atual</h5>
                    </LabelCardContainer>
                    <WatherCard options={wather} />
                    <LabelCardContainer>
                      <h5>Previsões</h5>
                    </LabelCardContainer>
                    {wather.forecast.forecastday.map((item, i) => (
                      <Forecasts key={i}>
                        <ForecastLeft>
                          <img src={`http:${item.day.condition.icon}`} alt={item.day.condition.text} />
                          <h3>{getCurrentDay(item.date)}</h3>
                          <p>{formatDate(item.date)}</p>
                        </ForecastLeft>
                        <ForecastRight>
                          <h1>{Math.ceil(item.day.avgtemp_c)}</h1>
                          <p>{item.day.condition.text}</p>
                          <div className="box">
                            <p>
                              Máx {Math.ceil(item.day.maxtemp_c)}º Min {Math.ceil(item.day.mintemp_c)}º
                            </p>
                          </div>
                        </ForecastRight>
                      </Forecasts>
                    ))}
                  </>
                ) : (
                  <Loading>
                    <div className="lds-ring">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </Loading>
                )}
              </ScrollPaddingRight>
            </Scrollbar>
          </SideNavContent>
        </SideNav>
      )}

      <Map />
    </>
  );
}

export default App;
