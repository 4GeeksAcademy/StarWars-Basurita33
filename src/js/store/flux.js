const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
      vehicles: [],
      favorites: [],
      details: null
    },

    actions: {
      getCharacters: async () => {
        try {
          const url = "https://www.swapi.tech/api/people";
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("HTTP error " + response.status);
          } else {
            const data = await response.json();
            setStore({ characters: data.results });
            console.log(data);
          }
        } catch (error) {
          console.log(error);
        }
      },

      getPlanets: async () => {
        try {
          const url = "https://www.swapi.tech/api/planets";
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("HTTP error " + response.status);
          } else {
            const data = await response.json();
            setStore({ planets: data.results });
            console.log(data);
          }
        } catch (error) {
          console.log(error);
        }
      },

      getVehicles: async () => {
        try {
          const url = "https://www.swapi.tech/api/vehicles";
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("HTTP error " + response.status);
          } else {
            const data = await response.json();
            setStore({ vehicles: data.results });
            console.log(data);
          }
        } catch (error) {
          console.log(error);
        }
      },

      getDetails: async (uid, type) => {
        try {
          const url = `https://www.swapi.tech/api/${type}/${uid}`;
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("HTTP error " + response.status);
          } else {
            const data = await response.json();
            console.log(data);
            setStore({details: data.result.properties})
            console.log(data);
          }
        } catch (error) {
          console.log(error);
        }
      },

      // toggleFavorite: (favName) => {
      // 	const store = getStore();
      // 	if(store.favorites.includes(favName)) {
      // 		setStore({favorites: store.favorites.filter((repited) => repited != favName)});
      // 	} else {
      // 		setStore({favorites:[...store.favorites, favName]});
      // 	}
      // 	console.log(toggleFavorite);
      // }
    },
  };
};

export default getState;
