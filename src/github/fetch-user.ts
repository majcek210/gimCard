import { githubGraphQL } from "./client";
import { USER_STATS_QUERY } from "./queries";
import { UserStatsResponse } from "./types";

export async function fetchUserStats(login: string) {
    const data = await githubGraphQL<UserStatsResponse>(USER_STATS_QUERY, { login });
    if (!data.user) throw new Error(`User "${login}" not found`)
    return data.user;
}

