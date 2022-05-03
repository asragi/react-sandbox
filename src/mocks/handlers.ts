import { rest } from "msw";

export const handlers = [
  rest.get("/post", (req, res, ctx) => {
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
