/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    destinations: Destination;
    Events: Event;
    experiences: Experience;
    Fleet: Fleet;
    users: User;
    media: Media;
    'regular-flights': RegularFlight;
    'panoramic-flights': PanoramicFlight;
    regions: Region;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    destinations: DestinationsSelect<false> | DestinationsSelect<true>;
    Events: EventsSelect<false> | EventsSelect<true>;
    experiences: ExperiencesSelect<false> | ExperiencesSelect<true>;
    Fleet: FleetSelect<false> | FleetSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    'regular-flights': RegularFlightsSelect<false> | RegularFlightsSelect<true>;
    'panoramic-flights': PanoramicFlightsSelect<false> | PanoramicFlightsSelect<true>;
    regions: RegionsSelect<false> | RegionsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    indexSEO: IndexSEO;
    bookingSEO: BookingSEO;
    destinationsSEO: DestinationsSEO;
    eventsSEO: EventsSEO;
    experiencesSEO: ExperiencesSEO;
    jetSEO: JetSEO;
    fleetSEO: FleetSEO;
    servicesSEO: ServicesSEO;
    aboutSEO: AboutSEO;
    contactSEO: ContactSEO;
  };
  globalsSelect: {
    indexSEO: IndexSEOSelect<false> | IndexSEOSelect<true>;
    bookingSEO: BookingSEOSelect<false> | BookingSEOSelect<true>;
    destinationsSEO: DestinationsSEOSelect<false> | DestinationsSEOSelect<true>;
    eventsSEO: EventsSEOSelect<false> | EventsSEOSelect<true>;
    experiencesSEO: ExperiencesSEOSelect<false> | ExperiencesSEOSelect<true>;
    jetSEO: JetSEOSelect<false> | JetSEOSelect<true>;
    fleetSEO: FleetSEOSelect<false> | FleetSEOSelect<true>;
    servicesSEO: ServicesSEOSelect<false> | ServicesSEOSelect<true>;
    aboutSEO: AboutSEOSelect<false> | AboutSEOSelect<true>;
    contactSEO: ContactSEOSelect<false> | ContactSEOSelect<true>;
  };
  locale: 'en' | 'fr';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "destinations".
 */
export interface Destination {
  id: string;
  slug: string;
  order: number;
  title: string;
  country: string;
  region: string | Region;
  heroImage: string | Media;
  carousel: {
    carousel_image: string | Media;
    carousel_subtitle: string;
  };
  image: string | Media;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  custom_text: string;
  advantages: {
    title?: string | null;
    description?: string | null;
    id?: string | null;
  }[];
  additional_content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  meta: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
    keywords: string;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "regions".
 */
export interface Region {
  id: string;
  determiner: 'le' | 'la' | 'les';
  name: string;
  image?: (string | null) | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Events".
 */
export interface Event {
  id: string;
  slug: string;
  order: number;
  title: string;
  city: string;
  date: string;
  heroImage: string | Media;
  carousel: {
    carousel_image: string | Media;
    carousel_subtitle: string;
  };
  image: string | Media;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  custom_text: string;
  advantages: {
    title?: string | null;
    description?: string | null;
    id?: string | null;
  }[];
  additional_content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  meta: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
    keywords: string;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "experiences".
 */
export interface Experience {
  id: string;
  slug: string;
  type: 'gastronomy' | 'lifestyle';
  name: string;
  category: string;
  price: number;
  location: string;
  subtitle: string;
  description: string;
  text: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  duration: number;
  guests: {
    minimum: number;
    maximum: number;
  };
  image?: (string | null) | Media;
  gallery: (string | Media)[];
  details?:
    | {
        title: string;
        description: string;
        id?: string | null;
      }[]
    | null;
  departures?:
    | {
        destination: string | Destination;
        price: number;
        id?: string | null;
      }[]
    | null;
  meta: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
    keywords: string;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Fleet".
 */
export interface Fleet {
  id: string;
  order: number;
  name: string;
  badge?: string | null;
  speed: string;
  passengers: string;
  baggage: string;
  image?: (string | null) | Media;
  carouselImages?: (string | Media)[] | null;
  description?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  range?: string | null;
  equipment?:
    | {
        item: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "regular-flights".
 */
export interface RegularFlight {
  id: string;
  /**
   * Select departure location
   */
  start_point: string | Destination;
  /**
   * Select arrival location
   */
  end_point: string | Destination;
  hero_banner?: (string | null) | Media;
  about: {
    image: string | Media;
    description?: string | null;
  };
  time_frames: {
    frequency: number;
    average_flight_duration: number;
    return_departure_delay: number;
    /**
     * First departure time (format: HH:MM)
     */
    first_departure: string;
    /**
     * Last departure time (format: HH:MM)
     */
    last_departure: string;
  };
  tariffs: {
    price_per_adult: number;
    price_per_child: number;
    price_per_newborn: number;
    price_per_baggage: number;
    price_per_flex: number;
    max_persons: number;
    max_baggages: number;
    price_per_cabin_baggage: number;
    max_cabin_baggages: number;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "panoramic-flights".
 */
export interface PanoramicFlight {
  id: string;
  hero?: (string | null) | Media;
  /**
   * Select start location
   */
  start: string | Destination;
  routes: {
    end: {
      point_of_interest: {
        /**
         * Select stops on the way
         */
        stops?: (string | Destination)[] | null;
        flight_duration: number;
        fleets: {
          fleet: {
            /**
             * Select helicopter
             */
            helicopter: string | Fleet;
            price?: number | null;
            price_on_demand?: boolean | null;
            type: 'private' | 'public';
          };
          id?: string | null;
        }[];
      };
      id?: string | null;
    }[];
    id?: string | null;
  }[];
  image?: (string | null) | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'destinations';
        value: string | Destination;
      } | null)
    | ({
        relationTo: 'Events';
        value: string | Event;
      } | null)
    | ({
        relationTo: 'experiences';
        value: string | Experience;
      } | null)
    | ({
        relationTo: 'Fleet';
        value: string | Fleet;
      } | null)
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'regular-flights';
        value: string | RegularFlight;
      } | null)
    | ({
        relationTo: 'panoramic-flights';
        value: string | PanoramicFlight;
      } | null)
    | ({
        relationTo: 'regions';
        value: string | Region;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "destinations_select".
 */
export interface DestinationsSelect<T extends boolean = true> {
  slug?: T;
  order?: T;
  title?: T;
  country?: T;
  region?: T;
  heroImage?: T;
  carousel?:
    | T
    | {
        carousel_image?: T;
        carousel_subtitle?: T;
      };
  image?: T;
  description?: T;
  custom_text?: T;
  advantages?:
    | T
    | {
        title?: T;
        description?: T;
        id?: T;
      };
  additional_content?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
        keywords?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Events_select".
 */
export interface EventsSelect<T extends boolean = true> {
  slug?: T;
  order?: T;
  title?: T;
  city?: T;
  date?: T;
  heroImage?: T;
  carousel?:
    | T
    | {
        carousel_image?: T;
        carousel_subtitle?: T;
      };
  image?: T;
  description?: T;
  custom_text?: T;
  advantages?:
    | T
    | {
        title?: T;
        description?: T;
        id?: T;
      };
  additional_content?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
        keywords?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "experiences_select".
 */
export interface ExperiencesSelect<T extends boolean = true> {
  slug?: T;
  type?: T;
  name?: T;
  category?: T;
  price?: T;
  location?: T;
  subtitle?: T;
  description?: T;
  text?: T;
  duration?: T;
  guests?:
    | T
    | {
        minimum?: T;
        maximum?: T;
      };
  image?: T;
  gallery?: T;
  details?:
    | T
    | {
        title?: T;
        description?: T;
        id?: T;
      };
  departures?:
    | T
    | {
        destination?: T;
        price?: T;
        id?: T;
      };
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
        keywords?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Fleet_select".
 */
export interface FleetSelect<T extends boolean = true> {
  id?: T;
  order?: T;
  name?: T;
  badge?: T;
  speed?: T;
  passengers?: T;
  baggage?: T;
  image?: T;
  carouselImages?: T;
  description?: T;
  range?: T;
  equipment?:
    | T
    | {
        item?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "regular-flights_select".
 */
export interface RegularFlightsSelect<T extends boolean = true> {
  start_point?: T;
  end_point?: T;
  hero_banner?: T;
  about?:
    | T
    | {
        image?: T;
        description?: T;
      };
  time_frames?:
    | T
    | {
        frequency?: T;
        average_flight_duration?: T;
        return_departure_delay?: T;
        first_departure?: T;
        last_departure?: T;
      };
  tariffs?:
    | T
    | {
        price_per_adult?: T;
        price_per_child?: T;
        price_per_newborn?: T;
        price_per_baggage?: T;
        price_per_flex?: T;
        max_persons?: T;
        max_baggages?: T;
        price_per_cabin_baggage?: T;
        max_cabin_baggages?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "panoramic-flights_select".
 */
export interface PanoramicFlightsSelect<T extends boolean = true> {
  hero?: T;
  start?: T;
  routes?:
    | T
    | {
        end?:
          | T
          | {
              point_of_interest?:
                | T
                | {
                    stops?: T;
                    flight_duration?: T;
                    fleets?:
                      | T
                      | {
                          fleet?:
                            | T
                            | {
                                helicopter?: T;
                                price?: T;
                                price_on_demand?: T;
                                type?: T;
                              };
                          id?: T;
                        };
                  };
              id?: T;
            };
        id?: T;
      };
  image?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "regions_select".
 */
export interface RegionsSelect<T extends boolean = true> {
  id?: T;
  determiner?: T;
  name?: T;
  image?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "indexSEO".
 */
export interface IndexSEO {
  id: string;
  title: string;
  meta: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
    keywords: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "bookingSEO".
 */
export interface BookingSEO {
  id: string;
  title: string;
  meta: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
    keywords: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "destinationsSEO".
 */
export interface DestinationsSEO {
  id: string;
  title: string;
  meta: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
    keywords: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "eventsSEO".
 */
export interface EventsSEO {
  id: string;
  title: string;
  meta: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
    keywords: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "experiencesSEO".
 */
export interface ExperiencesSEO {
  id: string;
  title: string;
  meta: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
    keywords: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "jetSEO".
 */
export interface JetSEO {
  id: string;
  title: string;
  meta: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
    keywords: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "fleetSEO".
 */
export interface FleetSEO {
  id: string;
  title: string;
  meta: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
    keywords: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "servicesSEO".
 */
export interface ServicesSEO {
  id: string;
  title: string;
  meta: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
    keywords: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "aboutSEO".
 */
export interface AboutSEO {
  id: string;
  title: string;
  meta: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
    keywords: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contactSEO".
 */
export interface ContactSEO {
  id: string;
  title: string;
  meta: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
    keywords: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "indexSEO_select".
 */
export interface IndexSEOSelect<T extends boolean = true> {
  title?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
        keywords?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "bookingSEO_select".
 */
export interface BookingSEOSelect<T extends boolean = true> {
  title?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
        keywords?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "destinationsSEO_select".
 */
export interface DestinationsSEOSelect<T extends boolean = true> {
  title?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
        keywords?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "eventsSEO_select".
 */
export interface EventsSEOSelect<T extends boolean = true> {
  title?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
        keywords?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "experiencesSEO_select".
 */
export interface ExperiencesSEOSelect<T extends boolean = true> {
  title?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
        keywords?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "jetSEO_select".
 */
export interface JetSEOSelect<T extends boolean = true> {
  title?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
        keywords?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "fleetSEO_select".
 */
export interface FleetSEOSelect<T extends boolean = true> {
  title?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
        keywords?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "servicesSEO_select".
 */
export interface ServicesSEOSelect<T extends boolean = true> {
  title?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
        keywords?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "aboutSEO_select".
 */
export interface AboutSEOSelect<T extends boolean = true> {
  title?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
        keywords?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contactSEO_select".
 */
export interface ContactSEOSelect<T extends boolean = true> {
  title?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
        keywords?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}