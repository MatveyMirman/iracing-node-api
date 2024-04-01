# Iracing NodeJS Api

[![License][license-image]][license-url]
[![npm](https://img.shields.io/npm/dw/jest-coverage-badges.svg)](https://www.npmjs.com/package/iracing-node-api)

[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/make-coverage-badge.svg

![Coverage lines](coverage/badge-lines.svg)
![Coverage functions](coverage/badge-functions.svg)
![Coverage branches](coverage/badge-branches.svg)
![Coverage statements](coverage/badge-statements.svg)

## Summary

A wrapper for Iracing's `data` api written in typescript.

## Getting Started

`npm install iracing-node-api`

```ts
import IracingClient from 'iracing-node-api';

const client = new IRacingClient('youriracingemail', 'youriracingpassword');
```

`Note: Intializing the instance will automatically start the login flow and authenticate using your credentials.`

## Examples:

### Getting Car Data

```ts
import IracingClient from 'iracing-node-api';

const client = new IRacingClient('youriracingemail', 'youriracingpassword');

const carData = await client.getCarData();
```

<details>
<summary>Example Response</summary>
<pre>
<code lang="js">
[
	{
		"ai_enabled": true,
		"allow_number_colors": false,
		"allow_number_font": false,
		"allow_sponsor1": true,
		"allow_sponsor2": true,
		"allow_wheel_color": true,
		"award_exempt": false,
		"car_dirpath": "rt2000",
		"car_id": 1,
		"car_name": "Skip Barber Formula 2000",
		"car_name_abbreviated": "SBRS",
		"car_types": [
			{
				"car_type": "openwheel"
			},
			{
				"car_type": "road"
			},
			{
				"car_type": "rt2000"
			},
			{
				"car_type": "sbrs"
			},
			{
				"car_type": "skippy"
			}
		],
		"car_weight": 1250,
		"categories": [
			"formula_car"
		],
		"created": "2006-05-03T19:10:00Z",
		"first_sale": "2008-02-03T00:00:00Z",
		"forum_url": "https://forums.iracing.com/categories/skip-barber-formula-2000",
		"free_with_subscription": false,
		"has_headlights": false,
		"has_multiple_dry_tire_types": false,
		"has_rain_capable_tire_types": false,
		"hp": 132,
		"is_ps_purchasable": true,
		"max_power_adjust_pct": 0,
		"max_weight_penalty_kg": 250,
		"min_power_adjust_pct": -5,
		"package_id": 15,
		"patterns": 3,
		"price": 11.95,
		"price_display": "$11.95",
		"rain_enabled": false,
		"retired": false,
		"search_filters": "road,openwheel,skippy,sbrs,rt2000",
		"sku": 10009
	}
]
</code>
</pre>
</details>

### Getting Track Data

```ts
import IracingClient from 'iracing-node-api';

const client = new IRacingClient('youriracingemail', 'youriracingpassword');

const carData = await client.getTrackData();
```

<details>
<summary>Example Response</summary>
<pre>
<code lang="js">
[
	{
		"ai_enabled": false,
		"allow_pitlane_collisions": true,
		"allow_rolling_start": true,
		"allow_standing_start": true,
		"award_exempt": true,
		"category": "road",
		"category_id": 2,
		"closes": "2018-10-31",
		"config_name": "Full Course",
		"corners_per_lap": 7,
		"created": "2006-04-04T19:10:00Z",
		"first_sale": "2008-02-04T00:00:00Z",
		"free_with_subscription": true,
		"fully_lit": false,
		"grid_stalls": 62,
		"has_opt_path": false,
		"has_short_parade_lap": true,
		"has_start_zone": false,
		"has_svg_map": true,
		"is_dirt": false,
		"is_oval": false,
		"is_ps_purchasable": true,
		"lap_scoring": 0,
		"latitude": 41.9282105,
		"location": "Lakeville, Connecticut, USA",
		"longitude": -73.3839642,
		"max_cars": 66,
		"night_lighting": false,
		"nominal_lap_time": 53.54668,
		"number_pitstalls": 34,
		"opens": "2018-04-01",
		"package_id": 9,
		"pit_road_speed_limit": 45,
		"price": 0,
		"price_display": "$0.00",
		"priority": 1,
		"purchasable": true,
		"qualify_laps": 2,
		"rain_enabled": true,
		"restart_on_left": false,
		"retired": false,
		"search_filters": "road,lrp",
		"site_url": "http://www.limerock.com/",
		"sku": 10021,
		"solo_laps": 8,
		"start_on_left": false,
		"supports_grip_compound": false,
		"tech_track": false,
		"time_zone": "America/New_York",
		"track_config_length": 1.53,
		"track_dirpath": "limerock\\full",
		"track_id": 1,
		"track_name": "[Legacy] Lime Rock Park - 2008",
		"track_types": [
			{
				"track_type": "road"
			}
		]
	}
]
</code>
</pre>
</details>

## Roadmap

- Add all available endpoints from the iracing data api
- Add retry logic for rate-limited requests
- Add the ability to respond with specific data points given a parameter ex: `carId 123 -> getCarData()`
