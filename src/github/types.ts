export interface UserStatsResponse {
    user: null | {
        login:string;
        name: string |null;
        followers: { totalCount: number}
        repositories: {
            totalCount: number;
            nodes: { stargazerCount: number; primaryLanguage: { name: string } | null}[];
        };
        contributionsCollection: {
            totalCommitContributions: number;
            totalPullRequestContributions: number;
        }
    }
}