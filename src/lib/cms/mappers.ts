// This is a placeholder for the actual DatoCMS types.
// In a real project, these would be generated from the DatoCMS schema.
type DatoAthlete = {
  name: string;
  role: string;
  summary: string;
  bioIntro: string;
  bioQuote: string;
  bioFacts: { label: string; value: string }[];
  instagram: string;
  email: string;
  cover: { url: string };
};

type DatoResult = {
  title: string;
  date: string;
  distance: string;
  rank: number;
  time: string;
  swim: string;
  bike: string;
  run: string;
  sources: string[];
};

type DatoRace = {
  race: string;
  date: string;
  distance: string;
  city: string;
  link: string;
};

type DatoPartner = {
  name: string;
  url: string;
  logo: { url: string };
};

type DatoPress = {
  title: string;
  date: string;
  source: string;
  url: string;
};

// Mapper for Athlete
export const mapDatoAthlete = (data: DatoAthlete) => ({
  frontmatter: {
    title: data.name,
    role: data.role,
    bio: {
      intro: data.bioIntro,
      quote: data.bioQuote,
      facts: data.bioFacts,
    },
    socials: {
      instagram: data.instagram,
      email: data.email,
    },
    cover: data.cover.url,
  },
  content: data.summary,
});

// Mapper for Results
export const mapDatoResults = (results: DatoResult[]) =>
  results.map((result) => ({
    data: {
      ...result,
      date: new Date(result.date),
    },
  }));

// Mapper for Upcoming Race
export const mapDatoUpcomingRace = (races: DatoRace[]) => {
  if (!races || races.length === 0) {
    return undefined;
  }
  const race = races[0];
  return {
    ...race,
    date: new Date(race.date),
  };
};

// Mapper for Partners
export const mapDatoPartners = (partners: DatoPartner[]) =>
  partners.map((partner) => ({
    ...partner,
    logo: partner.logo.url,
  }));

// Mapper for Press
export const mapDatoPress = (presses: DatoPress[]) =>
  presses.map((press) => ({
    data: {
      ...press,
      publishDate: new Date(press.date),
    },
  }));
