// Number formatting follows the standards defined by Uniswap

import { format, FormatOptions, fromUnixTime } from "date-fns";

const FIVE_DECIMALS_NO_TRAILING_ZEROS = new Intl.NumberFormat("en-US", {
  notation: "standard",
  maximumFractionDigits: 5,
});

const FIVE_DECIMALS_MAX_TWO_DECIMALS_MIN = new Intl.NumberFormat("en-US", {
  notation: "standard",
  maximumFractionDigits: 5,
  minimumFractionDigits: 2,
});

const FIVE_DECIMALS_MAX_TWO_DECIMALS_MIN_NO_COMMAS = new Intl.NumberFormat(
  "en-US",
  {
    notation: "standard",
    maximumFractionDigits: 5,
    minimumFractionDigits: 2,
    useGrouping: false,
  },
);

const THREE_DECIMALS_NO_TRAILING_ZEROS = new Intl.NumberFormat("en-US", {
  notation: "standard",
  maximumFractionDigits: 3,
  minimumFractionDigits: 0,
});

const THREE_DECIMALS = new Intl.NumberFormat("en-US", {
  notation: "standard",
  maximumFractionDigits: 3,
  minimumFractionDigits: 3,
});

const THREE_DECIMALS_USD = new Intl.NumberFormat("en-US", {
  notation: "standard",
  maximumFractionDigits: 3,
  minimumFractionDigits: 3,
  currency: "USD",
  style: "currency",
});

const TWO_DECIMALS_NO_TRAILING_ZEROS = new Intl.NumberFormat("en-US", {
  notation: "standard",
  maximumFractionDigits: 2,
});

const TWO_DECIMALS = new Intl.NumberFormat("en-US", {
  notation: "standard",
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const TWO_DECIMALS_USD = new Intl.NumberFormat("en-US", {
  notation: "standard",
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
  currency: "USD",
  style: "currency",
});

const SHORTHAND_TWO_DECIMALS = new Intl.NumberFormat("en-US", {
  notation: "compact",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const SHORTHAND_TWO_DECIMALS_NO_TRAILING_ZEROS = new Intl.NumberFormat(
  "en-US",
  {
    notation: "compact",
    maximumFractionDigits: 2,
  },
);

const SHORTHAND_FIVE_DECIMALS_NO_TRAILING_ZEROS = new Intl.NumberFormat(
  "en-US",
  {
    notation: "compact",
    maximumFractionDigits: 5,
  },
);

const SHORTHAND_USD_TWO_DECIMALS = new Intl.NumberFormat("en-US", {
  notation: "compact",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  currency: "USD",
  style: "currency",
});

const SHORTHAND_USD_ONE_DECIMAL = new Intl.NumberFormat("en-US", {
  notation: "compact",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
  currency: "USD",
  style: "currency",
});

const SIX_SIG_FIGS_TWO_DECIMALS = new Intl.NumberFormat("en-US", {
  notation: "standard",
  maximumSignificantDigits: 6,
  minimumSignificantDigits: 3,
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const SIX_SIG_FIGS_NO_COMMAS = new Intl.NumberFormat("en-US", {
  notation: "standard",
  maximumSignificantDigits: 6,
  useGrouping: false,
});

const SIX_SIG_FIGS_TWO_DECIMALS_NO_COMMAS = new Intl.NumberFormat("en-US", {
  notation: "standard",
  maximumSignificantDigits: 6,
  minimumSignificantDigits: 3,
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
  useGrouping: false,
});

const THREE_SIG_FIGS_USD = new Intl.NumberFormat("en-US", {
  notation: "standard",
  minimumSignificantDigits: 3,
  maximumSignificantDigits: 3,
  currency: "USD",
  style: "currency",
});

type Format = Intl.NumberFormat | string;

// each rule must contain either an `upperBound` or an `exact` value.
// upperBound => number will use that formatter as long as it is < upperBound
// exact => number will use that formatter if it is === exact
type FormatterRule =
  | { upperBound?: undefined; exact: number; formatter: Format }
  | { upperBound: number; exact?: undefined; formatter: Format };

// these formatter objects dictate which formatter rule to use based on the interval that
// the number falls into. for example, based on the rule set below, if your number
// falls between 1 and 1e6, you'd use TWO_DECIMALS as the formatter.
const tokenNonTxFormatter: FormatterRule[] = [
  { exact: 0, formatter: "0" },
  { upperBound: 0.001, formatter: "<0.001" },
  { upperBound: 1, formatter: THREE_DECIMALS },
  { upperBound: 1e6, formatter: TWO_DECIMALS },
  { upperBound: 1e15, formatter: SHORTHAND_TWO_DECIMALS },
  { upperBound: Infinity, formatter: ">999T" },
];

const tokenTxFormatter: FormatterRule[] = [
  { exact: 0, formatter: "0" },
  { upperBound: 0.00001, formatter: "<0.00001" },
  { upperBound: 1, formatter: FIVE_DECIMALS_MAX_TWO_DECIMALS_MIN },
  { upperBound: 10000, formatter: SIX_SIG_FIGS_TWO_DECIMALS },
  { upperBound: Infinity, formatter: TWO_DECIMALS },
];

const swapTradeAmountFormatter: FormatterRule[] = [
  { exact: 0, formatter: "0" },
  { upperBound: 0.1, formatter: SIX_SIG_FIGS_NO_COMMAS },
  { upperBound: 1, formatter: FIVE_DECIMALS_MAX_TWO_DECIMALS_MIN_NO_COMMAS },
  { upperBound: Infinity, formatter: SIX_SIG_FIGS_TWO_DECIMALS_NO_COMMAS },
];

const fiatTokenDetailsFormatter: FormatterRule[] = [
  { exact: 0, formatter: "$0.00" },
  { upperBound: 0.00000001, formatter: "<$0.00000001" },
  { upperBound: 0.1, formatter: THREE_SIG_FIGS_USD },
  { upperBound: 1.05, formatter: THREE_DECIMALS_USD },
  { upperBound: 1e6, formatter: TWO_DECIMALS_USD },
  { upperBound: Infinity, formatter: SHORTHAND_USD_TWO_DECIMALS },
];

const fiatTokenPricesFormatter: FormatterRule[] = [
  { exact: 0, formatter: "$0.00" },
  { upperBound: 0.00000001, formatter: "<$0.00000001" },
  { upperBound: 0.1, formatter: THREE_SIG_FIGS_USD }, // Round to 3 significant figures, show significant trailing zeros
  { upperBound: 1.05, formatter: THREE_DECIMALS_USD }, // Round to 3 decimal places, show significant trailing zeros
  { upperBound: 1_000_000, formatter: TWO_DECIMALS_USD }, // Round to 2 decimal places
  { upperBound: 1_000_000_000_000_000, formatter: SHORTHAND_USD_TWO_DECIMALS }, // Use M/B/T abbreviations
  { upperBound: Infinity, formatter: ">$999T" }, // Use M/B/T abbreviations
];

const fiatTokenStatsFormatter: FormatterRule[] = [
  // if token stat value is 0, we probably don't have the data for it, so show '-' as a placeholder
  { exact: 0, formatter: "-" },
  { upperBound: 0.01, formatter: "<$0.01" },
  { upperBound: 1000, formatter: TWO_DECIMALS_USD },
  { upperBound: Infinity, formatter: SHORTHAND_USD_ONE_DECIMAL },
];

const fiatGasPriceFormatter: FormatterRule[] = [
  { upperBound: 0.01, formatter: "<$0.01" },
  { upperBound: 1e6, formatter: TWO_DECIMALS_USD },
  { upperBound: Infinity, formatter: SHORTHAND_USD_TWO_DECIMALS },
];

const fiatTokenQuantityFormatter = [
  { exact: 0, formatter: "$0.00" },
  ...fiatGasPriceFormatter,
];

const portfolioBalanceFormatter: FormatterRule[] = [
  { exact: 0, formatter: "$0.00" },
  { upperBound: Infinity, formatter: TWO_DECIMALS_USD },
];

const ntfTokenFloorPriceFormatterTrailingZeros: FormatterRule[] = [
  { exact: 0, formatter: "0" },
  { upperBound: 0.001, formatter: "<0.001" },
  { upperBound: 1, formatter: THREE_DECIMALS },
  { upperBound: 1000, formatter: TWO_DECIMALS },
  { upperBound: 1e15, formatter: SHORTHAND_TWO_DECIMALS },
  { upperBound: Infinity, formatter: ">999T" },
];

const ntfTokenFloorPriceFormatter: FormatterRule[] = [
  { exact: 0, formatter: "0" },
  { upperBound: 0.001, formatter: "<0.001" },
  { upperBound: 1, formatter: THREE_DECIMALS_NO_TRAILING_ZEROS },
  { upperBound: 1000, formatter: TWO_DECIMALS_NO_TRAILING_ZEROS },
  { upperBound: 1e15, formatter: SHORTHAND_TWO_DECIMALS_NO_TRAILING_ZEROS },
  { upperBound: Infinity, formatter: ">999T" },
];

const ntfCollectionStatsFormatter: FormatterRule[] = [
  { exact: 0, formatter: "0" },
  { upperBound: 0.00001, formatter: "<0.00001" },
  { upperBound: 1, formatter: FIVE_DECIMALS_NO_TRAILING_ZEROS },
  { upperBound: 1e6, formatter: SIX_SIG_FIGS_NO_COMMAS },
  { upperBound: 1e15, formatter: SHORTHAND_FIVE_DECIMALS_NO_TRAILING_ZEROS },
  { upperBound: Infinity, formatter: ">999T" },
];

export enum NumberType {
  // used for token quantities in non-transaction contexts (e.g. portfolio balances)
  TokenNonTx = "token-non-tx",

  // used for token quantities in transaction contexts (e.g. swap, send)
  TokenTx = "token-tx",

  // this formatter is only used for displaying the swap trade output amount
  // in the text input boxes. Output amounts on review screen should use the above TokenTx formatter
  SwapTradeAmount = "swap-trade-amount",

  // fiat prices in any component that belongs in the Token Details flow (except for token stats)
  FiatTokenDetails = "fiat-token-details",

  // fiat prices everywhere except Token Details flow
  FiatTokenPrice = "fiat-token-price",

  // fiat values for market cap, TVL, volume in the Token Details screen
  FiatTokenStats = "fiat-token-stats",

  // fiat price of token balances
  FiatTokenQuantity = "fiat-token-quantity",

  // fiat gas prices
  FiatGasPrice = "fiat-gas-price",

  // portfolio balance
  PortfolioBalance = "portfolio-balance",

  // nft floor price denominated in a token (e.g, ETH)
  NFTTokenFloorPrice = "nft-token-floor-price",

  // nft collection stats like number of items, holder, and sales
  NFTCollectionStats = "nft-collection-stats",

  // nft floor price with trailing zeros
  NFTTokenFloorPriceTrailingZeros = "nft-token-floor-price-trailing-zeros",
}

const TYPE_TO_FORMATTER_RULES = {
  [NumberType.TokenNonTx]: tokenNonTxFormatter,
  [NumberType.TokenTx]: tokenTxFormatter,
  [NumberType.SwapTradeAmount]: swapTradeAmountFormatter,
  [NumberType.FiatTokenQuantity]: fiatTokenQuantityFormatter,
  [NumberType.FiatTokenDetails]: fiatTokenDetailsFormatter,
  [NumberType.FiatTokenPrice]: fiatTokenPricesFormatter,
  [NumberType.FiatTokenStats]: fiatTokenStatsFormatter,
  [NumberType.FiatGasPrice]: fiatGasPriceFormatter,
  [NumberType.PortfolioBalance]: portfolioBalanceFormatter,
  [NumberType.NFTTokenFloorPrice]: ntfTokenFloorPriceFormatter,
  [NumberType.NFTTokenFloorPriceTrailingZeros]:
    ntfTokenFloorPriceFormatterTrailingZeros,
  [NumberType.NFTCollectionStats]: ntfCollectionStatsFormatter,
};

function getFormatterRule(input: number, type: NumberType) {
  const rules = TYPE_TO_FORMATTER_RULES[type];
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    if (
      (rule?.exact !== undefined && input === rule.exact) ||
      (rule?.upperBound !== undefined && input < rule.upperBound)
    ) {
      return rule.formatter;
    }
  }

  throw new Error(`formatter for type ${type} not configured correctly`);
}

export function formatNumber(
  input: number,
  type: NumberType = NumberType.TokenNonTx,
  placeholder = "-",
) {
  if (input === null || input === undefined) {
    return placeholder;
  }

  const formatter = getFormatterRule(input, type);
  if (typeof formatter === "string") return formatter;
  return formatter.format(input);
}

export function formatCurrencyAmount(
  amount: string | undefined,
  type: NumberType = NumberType.TokenNonTx,
  placeholder?: string,
) {
  return formatNumber(amount ? parseFloat(amount) : 0.0, type, placeholder);
}

export function formatPrice(
  price: string,
  type: NumberType = NumberType.FiatTokenPrice,
) {
  if (price === null || price === undefined) {
    return "-";
  }

  return formatNumber(parseFloat(price), type);
}

/**
 * Date formatter
 */
export function formatTimestamp(
  timestamp: string | number,
  formatString = "LLLL d, yyyy",
  options?: FormatOptions,
) {
  return format(fromUnixTime(Number(timestamp)), formatString, options);
}

export function formatNumberOrString(price: number | string, type: NumberType) {
  if (price === null || price === undefined) return "-";
  if (typeof price === "string") return formatNumber(parseFloat(price), type);
  return formatNumber(price, type);
}

export function formatUSDPrice(
  price: number | string,
  type: NumberType = NumberType.FiatTokenPrice,
) {
  return formatNumberOrString(price, type);
}

export function formatBytes(bytes: string | number, decimals = 2) {
  const bytesNum = Number(bytes);
  if (!bytesNum) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = [
    "Bytes",
    "KiB",
    "MiB",
    "GiB",
    "TiB",
    "PiB",
    "EiB",
    "ZiB",
    "YiB",
  ];

  const i = Math.floor(Math.log(bytesNum) / Math.log(k));

  return `${parseFloat((bytesNum / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export function formatStringItems(accepted: string[]) {
  return accepted.length > 1
    ? `${accepted.slice(0, -1).join(", ")} and ${accepted.slice(-1)}`
    : { 0: "", 1: accepted[0] }[accepted.length];
}

export function formatRoundNumber(
  x: number,
  {
    round = Math.round,
    decimal = 2,
  }: {
    round?: (x: number) => number;
    decimal?: number;
  } = {
    round: Math.round,
    decimal: 2,
  },
) {
  const pow = Math.pow(10, decimal);
  return round((x + Number.EPSILON) * pow) / pow;
}

export function formatPercentage(
  value: string | undefined,
  type: NumberType = NumberType.TokenNonTx,
  placeholder?: string,
) {
  return (
    formatNumber(value ? parseFloat(value) : 0.0, type, placeholder) + " %"
  );
}

export function formatToTitleCase(value: string) {
  return value.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}
