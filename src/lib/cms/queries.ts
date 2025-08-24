export const GET_ATHLETE_QUERY = `
  query GetAthlete {
    athlete {
      name
      role
      summary
      bioIntro
      bioQuote
      bioFacts
      instagram
      email
      cover {
        url(imgixParams: { fm: "jpg", fit: "crop", w: 1200, h: 800 })
      }
    }
  }
`;

export const GET_RESULTS_QUERY = `
  query GetResults($limit: IntType) {
    allResults(first: $limit, orderBy: date_DESC) {
      title
      date
      distance
      rank
      time
      swim
      bike
      run
      sources
    }
  }
`;

export const GET_UPCOMING_RACE_QUERY = `
  query GetUpcomingRaces($today: Date) {
    allRaces(filter: { date: { gte: $today } }, orderBy: date_ASC, first: 1) {
      race
      date
      distance
      city
      link
    }
  }
`;

export const GET_PARTNERS_QUERY = `
  query GetPartners {
    allPartners {
      name
      url
      logo {
        url(imgixParams: { fm: "png", w: 300 })
      }
    }
  }
`;

export const GET_PRESS_QUERY = `
  query GetPress($limit: IntType) {
    allPresses(first: $limit, orderBy: date_DESC) {
      title
      date
      source
      url
    }
  }
`;
