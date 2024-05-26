import { __ } from '@wordpress/i18n';

/**
 * this function returns the weather interpretation codes from the API
 * @param {number} weatherCode	the weather code
 * @return {string} the weather interpretation
 *
 * @see https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM
 * @example ```
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
 * ```
 */
export function getWeatherCode( weatherCode ) {
	switch ( weatherCode ) {
		case 0:
			return __( 'Clear sky' ); // Clear sky
		case 1:
			return __( 'Mainly clear' ); // Mainly clear
		case 2:
			return __( 'Partly cloudy' ); // Partly cloudy
		case 3:
			return __( 'Overcast' ); // Overcast
		case 45:
			return __( 'Fog' ); // Fog
		case 48:
			return __( 'Depositing rime fog' ); // depositing rime fog
		case 51:
			return __( 'Drizzle' ); // Drizzle
		case 53:
			return __( 'Freezing Drizzle' ); // Freezing Drizzle
		case 55:
			return __( 'Dense Drizzle' ); // Dense Drizzle
		case 56:
			return __( 'Light freezing Drizzle' ); // Freezing Drizzle: Light intensity
		case 57:
			return __( 'Dense freezing Drizzle' ); // Freezing Drizzle: dense intensity
		case 61:
			return __( 'Slight Rain' ); // Rain: Slight
		case 63:
			return __( 'Moderate Rain' ); // Rain: Moderate
		case 65:
			return __( 'Rain: Heavy intensity' ); // Rain: Heavy intensity
		case 66:
			return __( 'Light Freezing Rain' ); // Freezing Rain: Light intensity
		case 67:
			return __( 'Heavy Freezing Rain' ); // Freezing Rain: Heavy intensity
		case 71:
			return __( 'Snow fall' ); // Snow fall
		case 73:
			return __( 'Moderate Snow' ); // Moderate Snow
		case 75:
			return __( 'Heavy Snow' ); // Heavy Snow
		case 77:
			return __( 'Snow grains' ); // Snow grains
		case 80:
			return __( 'Rain showers' ); // Rain showers
		case 81:
			return __( 'Slight Rain showers' ); // Rain showers: Slight
		case 82:
			return __( 'Violent Rain showers' ); // Rain showers: Violent
		case 85:
			return __( 'Light snow showers' ); // Light snow showers
		case 86:
			return __( 'Heavy Snow showers' ); // Heavy Snow showers
		case 95:
			return __( 'Slight thunderstorm' ); // Slight or moderate thunderstorm
		case 96:
			return __( 'Thunderstorm with slight hail' ); // Thunderstorm with slight hail
		case 99:
			return __( 'Thunderstorm with heavy hail' ); // Thunderstorm with heavy hail
		default:
			return __( 'Unknown weather code: ' ) + weatherCode;
	}
}
