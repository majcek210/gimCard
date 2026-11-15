import type { UserStatsResponse } from "../../github/types";
import type { StatsData } from "../card/renderer";

type User = NonNullable<UserStatsResponse["user"]>;

export function toStatsData(user: User): StatsData {
    const stars = user.repositories.nodes.reduce((sum, repo) => sum + repo.stargazerCount, 0)

    return {
        name: user.name ?? user.login,
        stars,
        commits: user.contributionsCollection.totalCommitContributions,
        prs: user.contributionsCollection.totalPullRequestContributions
    }
}