import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { AppPage } from './pages/AppPage.tsx';
import { theme } from './config/theme.ts';
import './index.css';
import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<MantineProvider theme={theme}>
				<AppPage />
			</MantineProvider>
		</BrowserRouter>
	</React.StrictMode>
);
