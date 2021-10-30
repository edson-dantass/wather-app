export type WatherContextProps = {
  isData: boolean;
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime: string;
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        avgtemp_c: number;
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
          text: string;
          icon: string;
          code: number;
        };
      };
    }[];
  };
  current: {
    last_updated: number;
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
  };
};
export type TypeWatherContext = {
  wather: WatherContextProps;
  setWather: React.Dispatch<React.SetStateAction<WatherContextProps>>;
};
export const PROP_EXMAPLE = {
  isData: false,
  current: {
    last_updated: 0,
    temp_c: 0,
    temp_f: 0,
    condition: {
      text: "",
      code: 0,
      icon: "",
    },
  },
  forecast: {
    forecastday: [
      {
        date: "",
        day: {
          maxtemp_c: 0,
          avgtemp_c: 0,
          mintemp_c: 0,
          condition: {
            code: 0,
            icon: "",
            text: "",
          },
        },
      },
    ],
  },
  location: {
    country: "",
    lat: 0,
    localtime: "",
    lon: 0,
    name: "",
    region: "",
    tz_id: "",
  },
};
