import { graphql, HttpResponse, passthrough } from "msw";
import { faker } from "@faker-js/faker";
import { PoolStatus } from "../graphql/data/__generated__/graphql";

export const handlers = [
  graphql.query("Pool", ({ variables }) => {
    const { id, slug } = variables;

    if (slug !== "demo" && slug !== undefined) {
      return passthrough();
    }

    faker.seed(0);

    return HttpResponse.json({
      data: {
        pool: {
          __typename: "Pool",
          id: id || faker.string.uuid(),
          name: "Mutuals Demo Pool",
          description: faker.lorem.paragraph(),
          image: faker.image.url(),
          slug: "demo",
          status: PoolStatus.Active,
          donationBps: faker.number.int({ min: 100, max: 1000 }),
          createdAt: faker.date.past().toISOString(),
          updatedAt: faker.date.recent().toISOString(),
        },
      },
    });
  }),
];
