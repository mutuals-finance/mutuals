import dotenvDefaults from 'dotenv-defaults';
import dotenvParseVariables from 'dotenv-parse-variables';

const loadEnvironment = (): void => {
  const defaults = dotenvDefaults.config();

  if (defaults.error !== undefined || defaults.parsed === undefined) {
    throw defaults.error;
  }

  process.env = Object.fromEntries(
    Object.entries(
      dotenvParseVariables({
        ...defaults.parsed,
        ...process.env,
      } as dotenvParseVariables.Parsed)
    ).map(([k, v]) => [k, (v as string)?.toLowerCase?.() === 'null' ? null : v])
  ) as typeof global.process.env;
};

loadEnvironment();
