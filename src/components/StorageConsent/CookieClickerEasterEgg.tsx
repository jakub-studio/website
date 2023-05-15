import { CSSProperties, MouseEventHandler, useCallback, useState } from "react";

const cookieClickerConstants = {
	DEFAULT_SIZE_PX: 24,
	INCREMENT_PX: 2
};
const CookieClickerEasterEgg = () => {
	const [size, setSize] = useState<number>(
		cookieClickerConstants.DEFAULT_SIZE_PX
	);

	const onClick = useCallback(() => {
		setSize(size + cookieClickerConstants.INCREMENT_PX);
	}, [size]);

	// onContextMenu acts as a reset. On mobile, long press and release acts as a reset as long press triggers context menu
	const onContextMenu = useCallback<MouseEventHandler<HTMLDivElement>>(e => {
		e.stopPropagation();
		e.preventDefault();

		setSize(cookieClickerConstants.DEFAULT_SIZE_PX);
	}, []);

	const style: CSSProperties = { fontSize: size + "px", lineHeight: "75%" };

	return (
		<div
			className="disable-tap-highlight hidden cursor-pointer select-none items-center justify-center transition-all duration-150 sm:flex"
			style={style}
			onClick={onClick}
			onContextMenu={onContextMenu}
			data-psst="Click me!"
		>
			🍪
		</div>
	);
};

export default CookieClickerEasterEgg;
