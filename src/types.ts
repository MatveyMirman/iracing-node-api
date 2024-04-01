export type AuthResponse = {
  authcode: string;
  autoLoginSeries: null;
  autoLoginToken: null;
  custId: number;
  email: string;
  ssoCookieDomain: string;
  ssoCookieName: string;
  ssoCookiePath: string;
  ssoCookieValue: string;
};

export type SignedUrl = {
  link: string;
  expires: string | Date;
};

export type CarAsset = {
  car_id: number;
  car_rules: string[];
  detail_copy: string;
  detail_techspecs_copy: string;
  folder: string; //"/img/cars/promazda"
  gallery_images: string; // "8"
  gallery_prefix: string | null;
  group_image: string | null;
  group_name: string | null;
  large_image: string; // "promazda-large.jpg",
  logo: string; //"/img/logos/partners/promazda-logo.png",
  small_image: string; //"promazda-small.jpg",
  sponsor_logo: string;
  template_path: string; //"car_templates/4_template_PM.zip"
};

export type CarAssetResponse = Record<string, CarAsset>;

export type TrackAsset = {
  coordinates: string;
  detail_copy: string;
  detail_techspecs_copy: string | null;
  detail_video: string | null;
  folder: string;
  gallery_images: string;
  gallery_prefix: string;
  large_image: string;
  logo: string;
  north: string;
  num_svg_images: number;
  small_image: string;
  track_map: string;
  track_map_layers: {
    background: string;
    inactive: string;
    active: string;
    pitroad: string;
    'start-finish': string;
    turns: string;
  };
};

export type TrackAssetResponse = Record<string, TrackAsset>;

export type CarType = {
  car_type: string;
};

export type CarDataResponse = {
  ai_enabled: boolean;
  allow_number_colors: boolean;
  allow_number_font: boolean;
  allow_sponsor1: boolean;
  allow_sponsor2: boolean;
  allow_wheel_color: boolean;
  award_exempt: boolean;
  car_dirpath: 'string';
  car_id: number;
  car_name: string;
  car_name_abbreviated: string;
  car_types: CarType[];
  car_weight: number;
  categories: string[];
  created: string | Date;
  first_sale: string | Date;
  forum_url: string;
  free_with_subscription: boolean;
  has_headlights: boolean;
  has_multiple_dry_tire_types: boolean;
  has_rain_capable_tire_types: boolean;
  hp: number;
  is_ps_purchasable: boolean;
  max_power_adjust_pct: number;
  max_weight_penalty_kg: number;
  min_power_adjust_pct: number;
  package_id: number;
  patterns: number;
  price: number;
  price_display: string;
  rain_enabled: boolean;
  retired: boolean;
  search_filters: string; // comma seperated strings
  sku: number;
};

export type Track = {
  track_id: number;
  track_name: string;
  config_name: string;
  category_id: number;
  category: string;
};

export type Weather = {
  version: number;
  type: number;
  temp_units: number;
  temp_value: number;
  rel_humidity: number;
  fog: number;
  wind_dir: number;
  wind_units: number;
  wind_value: number;
  skies: number;
  weather_var_initial: number;
  weather_var_ongoing: number;
  allow_fog: boolean;
  track_water: number;
  precip_option: number;
  time_of_day: number;
  simulated_start_utc_time: string | Date;
  simulated_start_utc_offset: number;
  precip_time_pct: number;
  precip_mm_final_session: number;
  precip_mm2hr_before_final_session: number;
};

export type WeatherResult = {
  avg_skies: number;
  avg_cloud_cover_pct: number;
  min_cloud_cover_pct: number;
  max_cloud_cover_pct: number;
  temp_units: number;
  avg_temp: number;
  min_temp: number;
  max_temp: number;
  avg_rel_humidity: number;
  wind_units: number;
  avg_wind_speed: number;
  min_wind_speed: number;
  max_wind_speed: number;
  avg_wind_dir: number;
  max_fog: number;
  fog_time_pct: number;
  precip_time_pct: number;
  precip_mm: number;
  precip_mm2hr_before_session: number;
  simulated_start_time: string | Date;
};

export type DriverResult = {
  cust_id: number;
  display_name: string;
  finish_position: number;
  finish_position_in_class: number;
  laps_lead: number;
  laps_complete: number;
  opt_laps_complete: number;
  interval: number;
  class_interval: number;
  average_lap: number;
  best_lap_num: number;
  best_lap_time: number;
  best_nlaps_num: number;
  best_nlaps_time: number;
  best_qual_lap_at: string;
  best_qual_lap_num: number;
  best_qual_lap_time: number;
  reason_out_id: number;
  reason_out: string;
  champ_points: number;
  drop_race: boolean;
  club_points: number;
  position: number;
  qual_lap_time: number;
  starting_position: number;
  starting_position_in_class: number;
  car_class_id: number;
  car_class_name: string;
  car_class_short_name: string;
  club_id: number;
  club_name: string;
  club_shortname: string;
  division: number;
  division_name: string;
  old_license_level: number;
  old_sub_level: number;
  old_cpi: number;
  oldi_rating: number;
  old_ttrating: number;
  new_license_level: number;
  new_sub_level: number;
  new_cpi: number;
  newi_rating: number;
  new_ttrating: number;
  multiplier: number;
  license_change_oval: number;
  license_change_road: number;
  incidents: number;
  max_pct_fuel_fill: number;
  weight_penalty_kg: number;
  league_points: number;
  league_agg_points: number;
  car_id: number;
  car_name: string;
  aggregate_champ_points: number;
  livery: {
    car_id: number;
    pattern: number;
    color1: string;
    color2: string;
    color3: string;
    number_font: number;
    number_color1: string;
    number_color2: string;
    number_color3: string;
    number_slant: number;
    sponsor1: number;
    sponsor2: number;
    car_number: string;
    wheel_color: string;
    rim_type: number;
  };
  suit: {
    pattern: number;
    color1: string;
    color2: string;
    color3: string;
  };
  helmet: {
    pattern: number;
    color1: string;
    color2: string;
    color3: string;
    face_type: number;
    helmet_type: number;
  };
  watched: boolean;
  friend: boolean;
  ai: boolean;
};

export type TrackState = {
  leave_marbles: boolean;
  practice_rubber: number;
  qualify_rubber: number;
  warmup_rubber: number;
  race_rubber: number;
  practice_grip_compound: number;
  qualify_grip_compound: number;
  warmup_grip_compound: number;
  race_grip_compound: number;
};

export type AllowedLicence = {
  parent_id: number;
  license_group: number;
  min_license_level: number;
  max_license_level: number;
  group_name: string;
};

export type CarClass = {
  car_class_id: number;
  cars_in_class: { car_id: number }[];
  name: string;
  short_name: string;
};

export type SessionResult = {
  subsession_id: number;
  season_id: number;
  season_name: string;
  season_short_name: string;
  season_year: number;
  season_quarter: number;
  series_id: number;
  series_name: number;
  series_short_name: string;
  series_logo: string;
  race_week_num: number;
  session_id: number;
  license_category_id: number;
  license_category: string;
  private_session_id: number;
  start_time: string | Date;
  end_time: string | Date;
  num_laps_for_qual_average: number;
  num_laps_for_solo_average: number;
  corners_per_lap: number;
  caution_type: number;
  event_type: number;
  event_type_name: string;
  driver_changes: boolean;
  min_team_drivers: number;
  max_team_drivers: number;
  driver_change_rule: number;
  driver_change_param1: number;
  driver_change_param2: number;
  max_weeks: number;
  points_type: string;
  event_strength_of_field: number;
  event_average_lap: number;
  event_laps_complete: number;
  num_cautions: number;
  num_caution_laps: number;
  num_lead_changes: number;
  official_session: boolean;
  heat_info_id: number;
  special_event_type: number;
  damage_model: number;
  can_protest: boolean;
  cooldown_minutes: number;
  limit_minutes: number;
  track: Track;
  weather: Weather;
  track_state: TrackState;
  session_results: [
    {
      simsession_number: number;
      simsession_type: number;
      simsession_type_name: string;
      simsession_subtype: number;
      simsession_name: string;
      weather_result: WeatherResult;
      results: DriverResult[];
    }
  ];
  car_classes: CarClass[];
  allowed_licenses: AllowedLicence[];
  results_restricted: boolean;
  associated_subsession_ids: number[];
};

export type EventLogResponse = {
  success: boolean;
  session_info: {
    subsession_id: number;
    session_id: number;
    simsession_number: number;
    simsession_type: number;
    simsession_name: string;
    event_type: number;
    event_type_name: string;
    private_session_id: number;
    season_name: string;
    season_short_name: string;
    series_name: string;
    series_short_name: string;
    start_time: string | Date;
    track: Track;
  };
  chunk_info: {
    chunk_size: number;
    num_chunks: number;
    rows: number;
    base_download_url: string;
    chunk_file_names: string[];
  };
};

export type LapDataResponse = {
  success: boolean;
  session_info: {
    subsession_id: number;
    session_id: number;
    simsession_number: number;
    simsession_type: number;
    simsession_name: string;
    num_laps_for_qual_average: number;
    num_laps_for_solo_average: number;
    event_type: number;
    event_type_name: string;
    private_session_id: number;
    season_name: string;
    season_short_name: string;
    series_short_name: string;
    start_time: string | Date;
    track: Track;
  };
  best_lap_num: number;
  best_lap_time: number;
  best_nlaps_num: number;
  best_nlaps_time: number;
  best_qual_lap_num: number;
  best_qual_lap_time: number;
  best_qual_lap_at: string | Date | null;
  chunk_info: {
    chunk_size: number;
    num_chunks: number;
    rows: string;
    base_download_url: string;
    chunk_file_names: string[];
  };
};

export type LapData = {
  group_id: number;
  name: string;
  cust_id: number;
  display_name: string;
  lap_number: number;
  flags: number;
  incident: boolean;
  session_time: number;
  session_start_time: string | Date | null;
  lap_time: number;
  team_fastest_lap: boolean;
  personal_best_lap: boolean;
  helmet: {
    pattern: number;
    color1: string;
    color2: string;
    color3: string;
    face_type: number;
    helmet_type: number;
  };
  license_level: number;
  car_number: string;
  lap_events: string[];
  lap_position: number;
  interval: number | null;
  interval_units: string | null;
  fastest_lap: boolean;
  ai: boolean;
};

export type TrackData = {
  ai_enabled: boolean;
  allow_pitlane_collisions: boolean;
  allow_rolling_start: boolean;
  allow_standing_start: boolean;
  award_exempt: boolean;
  category: string;
  category_id: number;
  closes: string;
  config_name: string;
  corners_per_lap: number;
  created: string | Date;
  first_sale: string | Date;
  free_with_subscription: boolean;
  fully_lit: boolean;
  grid_stalls: number;
  has_opt_path: boolean;
  has_short_parade_lap: boolean;
  has_start_zone: boolean;
  has_svg_map: boolean;
  is_dirt: boolean;
  is_oval: boolean;
  is_ps_purchasable: boolean;
  lap_scoring: number;
  latitude: number;
  location: string;
  longitude: number;
  max_cars: number;
  night_lighting: boolean;
  nominal_lap_time: number;
  number_pitstalls: string;
  opens: string;
  package_id: number;
  pit_road_speed_limit: number;
  price: number;
  price_display: string;
  priority: number;
  purchasable: boolean;
  qualify_laps: number;
  rain_enabled: boolean;
  restart_on_left: boolean;
  retired: boolean;
  search_filters: string;
  site_url: string;
  sku: number;
  solo_laps: number;
  start_on_left: boolean;
  supports_grip_compound: boolean;
  tech_track: boolean;
  time_zone: String;
  track_config_length: number;
  track_dirpath: string;
  track_id: number;
  track_name: string;
  track_types: { track_type: string }[];
};
