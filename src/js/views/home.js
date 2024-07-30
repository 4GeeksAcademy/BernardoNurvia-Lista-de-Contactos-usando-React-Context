import React, {useState, useEffect} from "react";

import "../../styles/home.css";
import ContacCard from "../component/ContacCard";

export const Home = () => {
	const [contacts, setContacts] = useState([]);
	console.log(contacts);
	function crearAngeda() {
		fetch("https://playground.4geeks.com/contact/agendas/Bernardo", {method:"POST"})
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
	}
	function getContacts() {
	  fetch("https://playground.4geeks.com/contact/agendas/Bernardo")
		.then((response) => {
			console.log(response);
		  if (response.status == 200) {
			return response.json();
		  } else {
			crearAngeda()
		  }
		})
		.then((data) => {
		  setContacts(data.contacts);
		})
		.catch((e) => {
		  console.log(e);
		});
	}
	useEffect(() => {
	  getContacts();
	}, []);
	
	return(
	<div className="container text-center mt-5">
		<h1>Hello Rigo!</h1>
		{contacts.map((contact)=>{
			return (
				<ContacCard contact={contact} getContacts={getContacts} key={contact.id}/>
			)
		})}
		
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
	)
};
