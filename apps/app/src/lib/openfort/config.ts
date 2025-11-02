import {
  OPENFORT_PUBLISHABLE_KEY,
  OPENFORT_SHIELD_PUBLISHABLE_KEY,
} from "@/constants";

const config = {
  baseConfiguration: {
    publishableKey: OPENFORT_PUBLISHABLE_KEY,
  },
  shieldConfiguration: {
    shieldPublishableKey: OPENFORT_SHIELD_PUBLISHABLE_KEY,
  },
};

export { config };
