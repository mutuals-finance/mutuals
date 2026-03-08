export const ANALYTICS_EVENTS = {
  // Authentication
  SIGN_UP: "Sign Up",
  SIGN_IN: "Sign In",
  SIGN_OUT: "Sign Out",
  WALLET_CONNECTED: "Wallet Connected",
  WALLET_DISCONNECTED: "Wallet Disconnected",

  // Newsletter
  NEWSLETTER_SUBSCRIBED: "Newsletter Subscribed",
  NEWSLETTER_SUBSCRIPTION_FAILED: "Newsletter Subscription Failed",

  // Pool Management
  POOL_CREATED: "Pool Created",
  POOL_VIEWED: "Pool Viewed",
  POOL_UPDATED: "Pool Updated",
  POOL_DELETED: "Pool Deleted",

  // Transactions
  DEPOSIT_INITIATED: "Deposit Initiated",
  DEPOSIT_COMPLETED: "Deposit Completed",
  DEPOSIT_FAILED: "Deposit Failed",
  WITHDRAWAL_INITIATED: "Withdrawal Initiated",
  WITHDRAWAL_COMPLETED: "Withdrawal Completed",
  WITHDRAWAL_FAILED: "Withdrawal Failed",

  // Navigation
  PAGE_VIEWED: "Page Viewed",
  LINK_CLICKED: "Link Clicked",

  // Forms
  FORM_SUBMITTED: "Form Submitted",
  FORM_ERROR: "Form Error",

  // Contact
  CONTACT_FORM_SUBMITTED: "Contact Form Submitted",
  CONTACT_FORM_FAILED: "Contact Form Failed",
} as const;

export type AnalyticsEvent =
  (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

/**
 * Event Properties Types
 */

export interface SignUpProperties {
  user_id: string;
  email?: string;
  wallet_address?: string;
  account_type?: string;
}

export interface SignInProperties {
  user_id: string;
  email?: string;
  wallet_address?: string;
  account_type?: string;
}

export interface WalletConnectedProperties {
  wallet_address: string;
  wallet_type: string;
}

export interface NewsletterSubscribedProperties {
  email: string;
  source: string;
  mixpanel_user_id?: string;
}

export interface NewsletterSubscriptionFailedProperties {
  email: string;
  source: string;
  error: string;
}

export interface PoolCreatedProperties {
  pool_id: string;
  pool_name: string;
  member_count: number;
}

export interface PoolViewedProperties {
  pool_id: string;
  pool_name: string;
}

export interface TransactionProperties {
  pool_id: string;
  amount: string;
  token_address?: string;
  transaction_hash?: string;
}

export interface PageViewedProperties {
  page_name: string;
  page_path: string;
  referrer?: string;
}

export interface LinkClickedProperties {
  link_text: string;
  link_url: string;
  link_target?: string;
}

export interface FormSubmittedProperties {
  form_name: string;
  form_location: string;
}

export interface FormErrorProperties {
  form_name: string;
  error_message: string;
  field_name?: string;
}

export const ANALYTICS_SUPER_PROPERTIES = {
  // Mixpanel standard properties (with $ prefix)
  EMAIL: "$email",
  NAME: "$name",

  // Custom properties
  WALLET_ADDRESS: "wallet_address",
  USER_TYPE: "user_type",
  ACCOUNT_TYPE: "account_type",
} as const;
