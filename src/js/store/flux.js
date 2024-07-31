import { AddNewContact } from "../views/AddNewContact";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			addNewContact: [
				{
					
						"name": "string",
						"phone": "string",
						"email": "string",
						"address": "string",
						"id": 0
					
				},
			
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			//crea la agenda en el caso que no exista
			crearAngeda: () => {
				fetch("https://playground.4geeks.com/contact/agendas/Bernardo", {
				  method: "POST",
				})
				  .then((response) => {
					console.log(response);
					if (response.ok) {
					  return response.json();
					} else {
					  throw "ha ocurrido un error";
					}
				  })
				  .then((data) => {
					getContacts();
				  })
				  .catch((e) => {
					console.log(e);
				  });
			  },
			  //llama a todos los contactos creados en la agenda
			  getContacts:() => {
				fetch("https://playground.4geeks.com/contact/agendas/Bernardo")
				  .then((response) => {
					console.log(response);
					if (response.status == 200) {
					  return response.json();
					} else {
					  crearAngeda();
					}
				  })
				  .then((data) => {
					setContacts(data.contacts);
				  })
				  .catch((e) => {
					console.log(e);
				  });
			  },
			  //para crear nuevos contactos
			  addNewContact: ()=>{
			  fetch('https://playground.4geeks.com/todo/user/https://playground.4geeks.com/contact/agendas/Bernardo/contacts', {
				method: "PUT",
				body: JSON.stringify(contact),
				headers: {
				  "Content-Type": "application/json"
				}
			  })
			  .then(resp => {
				  console.log(resp.ok); // Será true si la respuesta es exitosa
				  console.log(resp.status); // El código de estado 200, 300, 400, etc.
				  console.log(resp.text()); // Intentará devolver el resultado exacto como string
				  return resp.json(); // Intentará parsear el resultado a JSON y retornará una promesa donde puedes usar .then para seguir con la lógica
			  })
			  .then(data => {
				  // Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				  console.log(data); // Esto imprimirá en la consola el objeto exacto recibido del servidor
			  })
			  .catch(error => {
				  // Manejo de errores
				  console.log(error);
			  });
			},
			
		}
	};
};

export default getState;
