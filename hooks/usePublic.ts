export const getMains = async () => {
    const response = await fetch("https://banoome.hasura.app/v1/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Hasura-Role": "public",
        },
        body: JSON.stringify({
            query: `
            query GetBlog {
                blog(limit: 3, order_by: {id: desc}) {
                  id
                  desc
                  title
                  title1
                  title2
                  content
                  content1
                  content2
                  media
                  media1
                  media2
                  type
                  created_at
                  updated_at
                }
              }
                   
          `
        }),
    });
    const json = await response.json();
    return json?.data;
};

export const getBlogsById = async (id: number) => {
    const response = await fetch(`${process.env.GraphqlAPI}/v1/graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Hasura-Role": "public",
        },
        body: JSON.stringify({
            query: `
            query GetProject($id: Int) {
                blog(where: {id: {_eq: $id}}) {
                content
                content1
                content2
                content3
                created_at
                desc
                id
                media
                media2
                media1
                title
                title1
                updated_at
                title3
                title2
                }
              }       
          `,
            variables: {
                id,
            },
        }),
    });
    const json = await response.json();
    return json?.data?.blog[0];
};
export const getProjectsById = async (id: number) => {
    const response = await fetch(`${process.env.GraphqlAPI}/v1/graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Hasura-Role": "public",
        },
        body: JSON.stringify({
            query: `
            query GetProject($id: Int) {
                project(where: {id: {_eq: $id}}) {
                  id
                  content
                  media
                  title
                  created_at
                  content3
                  content2
                  content1
                  app_url
                  desc
                  media3
                  media2
                  media1
                  title1
                  title2
                  title3
                  updated_at
                  web_url
                }
              }       
          `,
            variables: {
                id,
            },
        }),
    });
    const json = await response.json();
    return json?.data?.project[0];
};