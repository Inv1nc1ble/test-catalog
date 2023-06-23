import clsx from "clsx";

const BasicButton = ({
	children,
	style = [],
	onClick = _ => {},
	type = "button",
	disabled = false,
	isLoading = false,
	loadingText = "Sending"
}) => {
	const buttonStyles = style.map(e => (styles[e] ? styles[e] : e));

	buttonStyles.push("basicButton");

	if (isLoading) {
		buttonStyles.push("basicButtonLoading");
	}

	return (
		<button
			className={clsx(buttonStyles)}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{isLoading ? loadingText : children}
		</button>
	);
};

export default BasicButton;
