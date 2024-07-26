import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ContacCard from "../component/ContacCard";

export const Home = () => {

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
