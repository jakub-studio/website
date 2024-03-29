import React from "react";

export interface IfProps extends React.PropsWithChildren {
	condition: unknown;
}

const If: React.FC<IfProps> = props => {
	return props.condition ? <>{props.children}</> : null;
};

export default If;
