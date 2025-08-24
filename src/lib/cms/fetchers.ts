import { getCollection, getEntry } from 'astro:content';
import { CMS_ENABLED } from './client';
import { executeQuery } from '@datocms/cda-client';
import {
  GET_ATHLETE_QUERY,
  GET_RESULTS_QUERY,
  GET_UPCOMING_RACE_QUERY,
  GET_PARTNERS_QUERY,
  GET_PRESS_QUERY,
} from './queries';
import { mapDatoAthlete, mapDatoResults, mapDatoUpcomingRace, mapDatoPartners, mapDatoPress } from './mappers';
import partnersData from '~/content/partners.json';
import calendarData from '~/content/calendar/2025.yaml';
import type { Race } from '~/types';

const { DATOCMS_API_TOKEN, DATOCMS_ENV, DATOCMS_ENDPOINT } = import.meta.env;

async function fetchDatoCMS(query: string, variables: Record<string, unknown> = {}) {
  const options: {
    token: string;
    variables: Record<string, unknown>;
    environment?: string;
    endpoint?: string;
  } = {
    token: DATOCMS_API_TOKEN as string,
    variables,
  };

  if (DATOCMS_ENV) {
    options.environment = DATOCMS_ENV;
  }

  if (DATOCMS_ENDPOINT) {
    options.endpoint = DATOCMS_ENDPOINT;
  }

  return executeQuery(query, options);
}

export async function getAthlete() {
  if (CMS_ENABLED) {
    const data = await fetchDatoCMS(GET_ATHLETE_QUERY);
    // @ts-expect-error: DatoCMS types are not available
    return mapDatoAthlete(data.athlete);
  }
  const localAthlete = await getEntry('athlete', 'maxence-mey');
  if (!localAthlete) {
    throw new Error('Athlete not found');
  }
  return {
    frontmatter: localAthlete.data,
    content: localAthlete.body,
  };
}

export async function getResults({ limit }: { limit?: number } = {}) {
  if (CMS_ENABLED) {
    const data = await fetchDatoCMS(GET_RESULTS_QUERY, { limit });
    // @ts-expect-error: DatoCMS types are not available
    return mapDatoResults(data.allResults);
  }
  const results = await getCollection('results');
  results.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return limit ? results.slice(0, limit) : results;
}

export async function getUpcomingRace() {
  if (CMS_ENABLED) {
    const today = new Date().toISOString().split('T')[0];
    const data = await fetchDatoCMS(GET_UPCOMING_RACE_QUERY, { today });
    // @ts-expect-error: DatoCMS types are not available
    return mapDatoUpcomingRace(data.allRaces);
  }

  const { upcoming } = calendarData;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const futureRaces = upcoming
    .map((race: Omit<Race, 'date'> & { date: string }) => ({ ...race, date: new Date(race.date) }))
    .filter((race: Race) => race.date.getTime() >= today.getTime())
    .sort((a: Race, b: Race) => a.date.getTime() - b.date.getTime());
  return futureRaces.length > 0 ? futureRaces[0] : undefined;
}

export async function getPartners() {
  if (CMS_ENABLED) {
    const data = await fetchDatoCMS(GET_PARTNERS_QUERY);
    // @ts-expect-error: DatoCMS types are not available
    return mapDatoPartners(data.allPartners);
  }
  return partnersData;
}

export async function getPress({ limit }: { limit?: number } = {}) {
  if (CMS_ENABLED) {
    const data = await fetchDatoCMS(GET_PRESS_QUERY, { limit });
    // @ts-expect-error: DatoCMS types are not available
    return mapDatoPress(data.allPresses);
  }
  const press = await getCollection('press');
  press.sort((a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf());
  return limit ? press.slice(0, limit) : press;
}
