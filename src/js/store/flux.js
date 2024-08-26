const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			favorites: []
		},
		actions: {

			getCharacters: async () => {
				try {
					const url = "https://www.swapi.tech/api/people";
					const response = await fetch(url);
					const data = await response.json();
					setStore({ characters: data.results });
				}
				catch (error) {
					console.log(error);
				}
			},

			getPlanets: async () => {
				try {
					const url = "https://www.swapi.tech/api/planets";
					const response = await fetch(url);
					const data = await response.json();
					setStore({ planets: data.results });
				}
				catch (error) {
					console.log(error);
				}
			},

			getStarships: async () => {
				try {
					const url = "https://www.swapi.tech/api/starships";
					const response = await fetch(url);
					const data = await response.json();
					setStore({ starships: data.results });
				}
				catch (error) {
					console.log(error);
				}
			},

			getDetails: async (uid, type) => {
				try {
					const url = `https://www.swapi.tech/api/${type}/${uid}`;
				    const response = await fetch(url);
				    const data = await response.json();
				    return data.result.properties;
				} 
				catch (error) {
					console.log(error);
				}				
			},

			addFavorite: (item, type) => {
				const store = getStore();
				const newItem = { ...item, type: type };
				if(store.favorites.some(favorite => favorite.uid === item.uid && favorite.type === type)) {
					setStore({ favorites: [...store.favorites, newItem] });
				} 		
			},

			deleteFromFavorite: (uid, type) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(
                    favorite => !(favorite.uid === uid && favorite.type === type)
                );
                setStore({ favorites: updatedFavorites });
            },
						
		}
	};
};

export default getState;
