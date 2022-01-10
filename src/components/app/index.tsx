import React from "react";
import GlobalStyle from "../../styles/global.styles";
import Header from "../header";
import Search from "../search";
import * as Style from "./app.styles";
const App: React.FC<{}> = () => {
	return (
		<Style.App>
			<GlobalStyle />
			<Header />
			<Search />
		</Style.App>
	);
};

export default App;
