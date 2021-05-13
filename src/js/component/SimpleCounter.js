import React, { useState, useEffect } from "react";

const SimpleCounter = () => {
	const [second, setSecond] = useState("00");
	const [minute, setMinute] = useState("00");
	const [hours, setHours] = useState("00");
	const [isActive, setIsActive] = useState(false);
	const [counter, setCounter] = useState(0);
	const [countDown, setCountDown] = useState(false);
	const [endValue, setEndValue] = useState();

	let intervalId;

	useEffect(() => {
		if (isActive) {
			intervalId = setInterval(() => {
				const hoursCounter = counter % 60;
				const secondCounter = Math.floor(counter / 3600);
				const minuteCounter = Math.floor(counter / 60);

				const computedHour =
					String(hoursCounter).length === 1
						? `0${hoursCounter}`
						: hoursCounter;
				const computedSecond =
					String(secondCounter).length === 1
						? `0${secondCounter}`
						: secondCounter;
				const computedMinute =
					String(minuteCounter).length === 1
						? `0${minuteCounter}`
						: minuteCounter;

				setSecond(computedSecond);
				setMinute(computedMinute);
				setHours(computedHour);
				if (countDown === true) {
					setCounter(counter => counter - 1);
				} else {
					setCounter(counter => counter + 1);
				}
			}, 1000);
			return () => clearInterval(intervalId);
		}
	}, [isActive, counter]);

	const reset = () => {
		setIsActive(isActive);
		setCounter(0);
		setHours("00");
		setMinute("00");
		setSecond("00");
	};
	return (
		<div className="container-fluid">
			<h1>COUNTER BY FRANC</h1>
			<div className="time">
				<div className="clock">
					<i className="far fa-clock"></i>
				</div>

				<div className="second">{second}</div>
				<div className="minute">{minute}</div>
				<div className="hour">{hours} </div>
			</div>
			<div className="col-md-12 mt-4">
				<label> Enter your seconds here : </label>
				<input
					onChange={e => {
						if (e !== null || e <= 0) {
							setCounter(parseInt(e.target.value));
						} else {
							null;
						}
					}}></input>
			</div>

			<div className="buttons">
				<button
					onClick={() => setIsActive(!isActive)}
					className="start">
					{isActive ? "Pause" : "Start"}
				</button>
				<button
					onClick={() => {
						setCountDown(!countDown);
						setIsActive(!isActive);
					}}>
					Count Down
				</button>
				<button
					onClick={() => {
						reset();
					}}
					className="Reset">
					Reset
				</button>
			</div>
		</div>
	);
};

export default SimpleCounter;

// import React from "react";
// import "../../styles/index.scss";
// import { useState, useEffect } from "react";

// const SimpleCounter = () => {
// 	const [time, setTime] = useState("");
// 	useEffect(() => {
// 		let countDownData = new Date("Jan 01, 2021 00:00:00").getTime();

// 		let interval = setInterval(() => {
// 			let now = new Date().getTime();
// 			let distance = now;

// 			let days = Math.floor(distance / (100 * 60 * 60 * 24));
// 			let hours =
// 				Math.floor(distance % (100 * 60 * 60 * 24)) / (1000 * 60 * 60);
// 			let minutes = Math.floor(
// 				(distance % (1000 * 60 * 60)) / (1000 * 60)
// 			);
// 			let seconds = Math.floor((distance % (1000 * 60)) / 1000);
// 			setTime(days + "d " + hours + "h" + minutes + "m" + seconds + "s ");
// 			// if (distance < 0) {
// 			// 	clearInterval(interval);
// 			// 	setTime("Reset that Time");
// 			// }
// 		}, 1000);
// 	}, []);

// 	return (
// 		<div>{time}</div>

// 		// <div className="counter">
// 		// 	<div className="icon">i</div>
// 		// 	<div className="fourth">{setDays(days)}</div>
// 		// 	<div className="third">{setHours(hours)}</div>
// 		// 	<div className="second">{setMinutes(minutes)}</div>
// 		// 	<div className="first">{setSeconds(seconds)}</div>
// 		// </div>
// 	);
// };

// export default SimpleCounter;
