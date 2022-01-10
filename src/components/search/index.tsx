import React from "react";
import * as Style from "./search.styles";
const Search: React.FC<{}> = () => {
	return (
		<Style.Container>
			<Style.SearchField placeholder="Search" />
		</Style.Container>
	);
};

export default Search;
