import React, { useState } from "react";
import * as Style from "./wsClientsList.styles";
import { IWSClientsListItemProps, IWSClientsListProps } from "./wsClinetsList.types";

const ListItem: React.FC<IWSClientsListItemProps> = () => {
	return <Style.ListItem></Style.ListItem>;
};

const WSClientsList: React.FC<IWSClientsListProps> = () => {
	const [listItems, setListItems] = useState([] as IWSClientsListItemProps[]);
	return (
		<Style.Container>
			<Style.List>
				{listItems.map((item, index) => (
					<ListItem key={index} />
				))}
			</Style.List>
		</Style.Container>
	);
};

export default WSClientsList;
