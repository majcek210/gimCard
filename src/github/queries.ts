export const USER_STATS_QUERY = `
    query UserStats($login: String!) {
        user(login: $login) {
            login
            name
            followers { totalCount }
            repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
                totalCount
                nodes { stargazerCount primaryLanguage { name } }
            }
            contributionsCollection {
                totalCommitContributions
                totalPullRequestContributions
            }
        }
    }
`;