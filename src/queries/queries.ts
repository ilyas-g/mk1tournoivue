import { gql } from "@apollo/client";

const CARD_QUERY = gql`
query LeagueStandings {
  league(slug: "championnat-de-france-mortal-kombat-1-classement") {
    id
    name
    videogames {
      id
      name
    }
    events (query: {
      perPage: 16
    }) {
      nodes {
        id
        name
        slug
        startAt
        isOnline
        images {
          id
          url
        }
        numEntrants
        tournament {
          id
          name
          slug
          numAttendees
          venueAddress
          startAt
          state
          images {
            id
            url
          }
        }
        standings (query: {
          page: 1
          perPage: 8
        }) {
          nodes {
            id
            entrant {
              id
              name
            }
          }
        }
      }
    }
  }
}
`;

const STANDING_QUERY = gql`
  query LeagueStandings {
    league(slug: "championnat-de-france-mortal-kombat-1-classement") {
      standings (query: {
        page: 1,
        perPage: 24
      }) {
        pageInfo {
          totalPages
          total
        }
        nodes {
          id
          placement
          totalPoints
          entrant {
            id
            name
          }
        }
      }
    }
  }
`;

const LCQ_QUERY = gql`
query EventStandings {
  event(slug: "tournament/final-lcq-pfl-road-to-evo-2023-espot-paris/event/last-chance-qualifier-pfl") {
    id
    name
    slug
    standings(query: {
      perPage: 8,
      page: 1
    }){
      nodes {
        placement
        entrant {
          id
          name
        }
      }
    }
  }
}
`;

export { CARD_QUERY, STANDING_QUERY, LCQ_QUERY };
