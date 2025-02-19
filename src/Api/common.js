import { ApolloClient, InMemoryCache } from "@apollo/client";

export const chainlinkClient = createClient("https://api.thegraph.com/subgraphs/name/deividask/chainlink");
export const arbitrumGraphClient = createClient("https://api.thegraph.com/subgraphs/name/gmx-io/gmx-stats");
export const avalancheGraphClient = createClient("https://api.thegraph.com/subgraphs/name/gmx-io/gmx-avalanche-stats");
export const nissohGraphClient = createClient("https://api.thegraph.com/subgraphs/name/nissoh/gmx-vault");
export const arbitrumReferralsGraphClient = createClient(
  "https://api.thegraph.com/subgraphs/name/gdev8317/gmx-arbitrum-referrals-staging"
);
export const avalancheReferralsGraphClient = createClient(
  "https://api.thegraph.com/subgraphs/name/gdev8317/gmx-avalanche-referrals-staging"
);

function createClient(uri) {
  return new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });
}
