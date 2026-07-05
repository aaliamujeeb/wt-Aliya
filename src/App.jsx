
import { useState, useEffect, useRef } from "react";

export default function App() {

	const [timeLeft, setTimeLeft] = useState(10);
	// TODO 1: Create a ref `intervalRef` with useRef(null).
	const intervalRef = useRef(null);

	// TODO 2: Use useEffect (dependency []) to start a setInterval on mount that
	// decreases timeLeft by 1 each second.
	// (Hint: setTimeLeft(prev => prev - 1))
	// Store the id in intervalRef.current.

	// TODO 3: RETURN a cleanup function from the effect that calls
	// clearInterval(intervalRef.current) so the timer stops when the
	// component unmounts.
	
	useEffect(() => {
		intervalRef.current = setInterval(() => {
	        	setTimeLeft(prev => {
					if (prev <= 1) {
		  				clearInterval(intervalRef.current);
						return 0;
					}
					return prev - 1;
	      		});
	    }, 1000);

	    return () => {
	      clearInterval(intervalRef.current);
	    };
  	}, []);

	return (
		<div style={styles.card}>

		<p style={styles.time}>{timeLeft}</p>

		<p style={styles.label}>
		{timeLeft === 0 ? "⏰ Time's up!" : "counting down…"}</p>
		</div>
		);
}

const styles = {

	card: { fontFamily: "system-ui", maxWidth: 300, margin: "40px auto", padding: 28,

	borderRadius: 16, textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,.08)" },
	time: { fontSize: 60, fontWeight: 700, color: "#ff4757", margin: 0 },

	label: { color: "#888" },
};


