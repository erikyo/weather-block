import { __ } from '@wordpress/i18n';

/**
 * this function returns the weather interpretation codes from the API
 * @param {number} weatherCode	the weather code
 * @return {string} the weather interpretation
 *
 * @see https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM
 * 0						Clear sky
 * 1, 2, 3			Mainly clear, partly cloudy, and overcast
 * 45, 48				Fog and depositing rime fog
 * 51, 53, 55		Drizzle: Light, moderate, and dense intensity
 * 56, 57				Freezing Drizzle: Light and dense intensity
 * 61, 63, 65		Rain: Slight, moderate and heavy intensity
 * 66, 67				Freezing Rain: Light and heavy intensity
 * 71, 73, 75		Snow fall: Slight, moderate, and heavy intensity
 * 77						Snow grains
 * 80, 81, 82		Rain showers: Slight, moderate, and violent
 * 85, 86				Snow showers slight and heavy
 * 95     			Thunderstorm: Slight or moderate (*)
 * 96, 99 			Thunderstorm with slight and heavy hail (*)
 *        			(*) EU only
 */
export function getWeatherCode( weatherCode ) {
	switch ( weatherCode ) {
		case 0:
			return __( 'Clear sky' );
		case 1:
			return __( 'Mainly clear' );
		case 2:
			return __( 'Partly cloudy' );
		case 3:
			return __( 'Overcast' );
		case 45:
			return __( 'Fog' );
		case 48:
			return __( 'depositing rime fog' );
		case 51:
			return __( 'Drizzle' );
		case 53:
			return __( 'Freezing Drizzle' );
		case 55:
			return __( 'Dense Drizzle' );
		case 56:
			return __( 'Freezing Drizzle: Light intensity' );
		case 57:
			return __( 'Freezing Drizzle: dense intensity' );
		case 61:
			return __( 'Rain: Slight' );
		case 63:
			return __( 'Rain: Moderate' );
		case 65:
			return __( 'Rain: Heavy intensity' );
		case 66:
			return __( 'Freezing Rain: Light intensity' );
		case 67:
			return __( 'Freezing Rain: Heavy intensity' );
		case 71:
			return __( 'Snow fall' );
		case 73:
			return __( 'Moderate Snow' );
		case 75:
			return __( 'Heavy Snow' );
		case 77:
			return __( 'Snow grains' );
		case 80:
			return __( 'Rain showers' );
		case 81:
			return __( 'Rain showers: Slight' );
		case 82:
			return __( 'Rain showers: Violent' );
		case 85:
			return __( 'Light snow showers' );
		case 86:
			return __( 'Heavy Snow showers' );
		case 95:
			return __( 'Slight or moderate thunderstorm' );
		case 96:
			return __( 'Thunderstorm with slight hail' );
		case 99:
			return __( 'Thunderstorm with heavy hail' );
		default:
			return __( 'Unknown weather code: ' ) + weatherCode;
	}
}
