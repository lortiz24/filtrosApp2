import { Icon } from '../Icon';
import classes from '../../styles/globalStyle.module.css';
import { useMyNavigation } from '../../hooks/useMyNavigation';
import { BackgroundImage, Text } from '@mantine/core';
export const Home = () => {
	const { goToRegister } = useMyNavigation();
	return (
		<BackgroundImage
			src='/public/assets/home/bgHome.jpg'
			style={{
				width: '100%',
				minHeight: '100vh',
				justifyContent: 'center',
			}}
		>
			<Text fw={'bold'} fz={'120px'} style={{color:'white'}}>
				Fotografía
			</Text>
		</BackgroundImage>
	);
	return (
		<div
			style={{
				minHeight: '100vh',
				display: 'flex',
				justifyContent: 'center',
				backgroundImage: 'url("assets/home/bgHome.jpg")',
			}}
		>
			<div
				style={{
					width: '100%',
					padding: '32px 0px',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					rowGap: '50px',
				}}
			>
				<div style={{ padding: '0px 161px' }}>
					<h2
						className={classes.textBorder}
						style={{
							textAlign: 'center',
							fontSize: '120px',
							margin: 0,
						}}
					>
						<span>
							<Icon url='public/assets/home/Arrow1.svg' />
						</span>
						Fotografía
					</h2>
					<h2 style={{ textAlign: 'center', fontSize: '120px', margin: 0 }}>con filtros AR</h2>
				</div>
				<div style={{ padding: '0px 161px' }}>
					<p style={{ fontSize: '50px', textAlign: 'center' }}>
						Selecciona un elemento y <span style={{ fontWeight: 'bold' }}>tómate una fotografía</span> utilizando
						filtros de realidad aumentada.
					</p>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<button
						onClick={goToRegister}
						style={{
							padding: '43px 113px',
							fontSize: '65px',
							borderRadius: '24px',
							backgroundColor: '#EB0AFF',
						}}
					>
						¡Empecemos ahora!
					</button>
				</div>
			</div>
		</div>
	);
};
