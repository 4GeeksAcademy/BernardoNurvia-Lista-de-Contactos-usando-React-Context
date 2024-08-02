import { AddNewContact } from "../views/AddNewContact";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      addNewContact: [
        {
          name: "string",
          phone: "string",
          email: "string",
          address: "string",
          id: 0,
        },
      ],
      contacts: [],
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
        fetch("https://playground.4geeks.com/contact/agendas/BernardoNurvia", {
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
      getContacts: () => {
        fetch("https://playground.4geeks.com/contact/agendas/BernardoNurvia")
          .then((response) => {
            console.log(response);
            if (response.status == 200) {
              return response.json();
            } else {
              crearAngeda();
            }
          })
          .then((data) => {
            setStore({ contacts: data.contacts });
          })
          .catch((e) => {
            console.log(e);
          });
      },
      //para crear nuevos contactos
      addNewContact: () => {
        fetch(
          "https://playground.4geeks.com/todo/user/https://playground.4geeks.com/contact/agendas/BernardoNurvia/contacts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(),
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(
              "There was a problem with the fetch operation:",
              error
            );
          });
      },
    },
  };
};

export default getState;
