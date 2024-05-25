import { createRoot, Suspense } from '@wordpress/element';
import { WeatherBlock } from './WeatherBlock';
import { Loading } from './Loading';

window.addEventListener( 'DOMContentLoaded', () => {
	const elements = document.querySelectorAll(
		'.wp-block-blocchi-weather-block'
	);

	if ( elements?.length ) {
		elements.forEach( ( element ) => {
			const root = createRoot( element );
			root.render(
				<Suspense fallback={ <Loading /> }>
					<WeatherBlock { ...element.dataset } />
				</Suspense>
			);
		} );
	}
} );
