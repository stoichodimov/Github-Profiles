import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.register({
	onUpdate: (registration) => {
		const waitingServiceWorker = registration.waiting;
		if (waitingServiceWorker) {
			waitingServiceWorker.addEventListener('statechange', (event) => {
				if (event.target.state === 'activated') {
					alert('New Verison Found. Refressing...');
					window.location.reload();
				}
			});
			waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
		}
	}
});
