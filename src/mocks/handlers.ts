import { rest } from "msw";

const base = `${window.location.protocol}${window.location.host}`;
const postPath = "/post";
export const getPostUrl = new URL(postPath, base);

export const handlers = [
  rest.get(postPath, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: 100,
          id: 12,
          title: "MockedTitle",
          body: "This is mocked post body text.",
        },
      ])
    );
  }),
];
