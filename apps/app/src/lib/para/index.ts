import { Environment, ParaWeb } from "@getpara/react-sdk";
import { config } from "@/lib/para/config";
import { PARA_API_KEY } from "@/constants";

const para = new ParaWeb(Environment.BETA, PARA_API_KEY);

export { para, config };
