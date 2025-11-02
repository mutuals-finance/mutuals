import { config } from "./config";
import Openfort from "@openfort/openfort-node";

const openfort = new Openfort(process.env.OPENFORT_SECRET_KEY ?? "");

export { config, openfort };
