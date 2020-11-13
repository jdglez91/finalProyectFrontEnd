import React from "react";
import { Link } from "react-router-dom";

export const Main = () => {
	return (
		<div className="container">
			<div>
				<div
					style={{
						background: "#dce0f5",
						width: "180px",
						margin: "auto",
						borderRadius: "200px",
						textAlign: "center",
						padding: "20px",
						marginBottom: "10px"
					}}>
					<img src="https://img.icons8.com/windows/110/000000/broom.png" />
					<div style={{ textAlign: "center", color: "gray" }}>
						<p>Service Request</p>
					</div>
				</div>

				<div
					style={{
						background: "#dce0f5",
						width: "180px",
						margin: "auto",
						borderRadius: "200px",
						textAlign: "center",
						padding: "20px",
						marginBottom: "20px"
					}}>
					<img src="https://img.icons8.com/pastel-glyph/110/000000/vacuum-cleaner--v3.png" />
					<div style={{ textAlign: "center", color: "gray" }}>
						<p>Provide a Service</p>
					</div>
				</div>
				<div
					style={{
						background: "#dce0f5",
						width: "180px",
						margin: "auto",
						borderRadius: "200px",
						textAlign: "center",
						padding: "20px"
					}}>
					<img src="https://img.icons8.com/fluent-systems-regular/110/000000/service-bell.png" />
					<div style={{ textAlign: "center", color: "gray" }}>
						<p>Notifications</p>
					</div>
				</div>
			</div>
		</div>
	);
};
