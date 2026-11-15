export async function githubGraphQL<T>(
  query: String,
  variables: Record<string, unknown>,
): Promise<T> {
    const token = process.env.GITHUB_TOKEN;
    const GITHUB_GRAPHQL_URL = process.env.GITHUB_GRAPHQL_URL;
    if (!token) throw new Error("GITHUB_TOKEN must be set!")
    if (!GITHUB_GRAPHQL_URL) throw new Error("GITHUB_GRAPHQL_URL was not set.")
    
        const response = await fetch(GITHUB_GRAPHQL_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                "User-Agent": "gimCard"
            },
            body: JSON.stringify({query, variables})
        })

        if (!response.ok) {
            throw new Error(`Github responded with status ${response.status}`)
        }

        const json = (await response.json()) as {
            data?: T;
            errors?: { message: string}[]
        }

        if (json.errors?.length) throw new Error(json.errors[0].message);
        if (!json.data) throw new Error("Github didn't return data")

        return json.data;

}
