import React from "react";
import SecondsCounter from "./SimpleCounter";

//create your first component
export function Home() {
	return (
		<div className="container-fluid text-center mt-5 ">
			<SecondsCounter seconds="20" minutes="20" hour="25" />
		</div>
	);
}
