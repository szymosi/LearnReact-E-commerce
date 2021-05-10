import React from "react";
import './menu-item.styles.scss'

const MenuItem = ({ title, subtitle, imageUrl, size }) => {
	return (
		<div
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
			className={`menu-item ${size}`}>
			<div className="content">
				<div className="title">{title}</div>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
