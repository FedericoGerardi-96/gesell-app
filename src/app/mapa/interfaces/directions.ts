export interface DirectionsResponse {
  code: string;
  routes: Route[];
  uuid: string;
  waypoints: Waypoint[];
}

export interface Route {
  distance: number;
  duration: number;
  geometry: Geometry;
  legs: Leg[];
  weight: number;
  weight_name: string;
}

export interface Geometry {
  coordinates: Array<number[]>;
  type: string;
}

export interface Leg {
  admins: Admin[];
  distance: number;
  duration: number;
  steps: Step[];
  summary: string;
  via_waypoints: any[];
  weight: number;
}

export interface Admin {
  iso_3166_1: string;
  iso_3166_1_alpha3: string;
}

export interface Step {
  distance: number;
  driving_side: string;
  duration: number;
  geometry: Geometry;
  intersections: Intersection[];
  maneuver: Maneuver;
  mode: string;
  name: string;
  weight: number;
}

export interface Intersection {
  admin_index: number;
  bearings: number[];
  duration?: number;
  entry: boolean[];
  geometry_index: number;
  in?: number;
  is_urban?: boolean;
  location: number[];
  mapbox_streets_v8?: MapboxStreetsV8;
  out?: number;
  traffic_signal?: boolean;
  turn_duration?: number;
  turn_weight?: number;
  weight?: number;
}

export interface MapboxStreetsV8 {
  class: Class;
}

export enum Class {
  Street = 'street',
  Tertiary = 'tertiary',
}

export interface Maneuver {
  bearing_after: number;
  bearing_before: number;
  instruction: string;
  location: number[];
  modifier?: string;
  type: string;
}

export interface Waypoint {
  distance: number;
  location: number[];
  name: string;
}
