import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Loading from './components/Loading';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil';

import '@creativebulma/bulma-divider/dist/bulma-divider.css';
import '@creativebulma/bulma-collapsible/dist/css/bulma-collapsible.min.css';
import '@creativebulma/bulma-tooltip/dist/bulma-tooltip.min.css';
import './styles/loading.css';
import './styles/bulma.css';

const App = React.lazy(() => import('./App'));

ReactDOM.render(
	<Suspense fallback={<Loading />}>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</Suspense>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
