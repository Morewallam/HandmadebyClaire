import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "o6hp51kg",
    dataset: "production",
    useCdn: false, // for static builds
})