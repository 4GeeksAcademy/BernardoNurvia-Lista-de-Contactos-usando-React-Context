import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ContacCard from "../component/ContacCard";

export const Home = () => {
	const [contacts, setContacts] = useState([]);
	function getContacts() {
	  fetch("https://playground.4geeks.com/contact/agendas/Bernardo")
		.then((response) => {
		  if (response.status == 200) {
			return response.json();
		  } else {
			throw "ha ocurrido un error";
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
		<ContacCard/>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
	)
};
