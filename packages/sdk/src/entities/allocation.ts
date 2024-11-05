import { AllocationType } from "../types";

export interface AllocationBaseConstructorArgs {
  allocationType: AllocationType;
  recipient: string;
}

/**
 * Represents an allocation in a Mutuals Pool
 */
export class Allocation {
  public readonly recipient: string;
  public readonly value: number;
  public readonly allocationType: AllocationType;

  /**
   * Constructs an allocation for a given pool with the given liquidity
   * @param recipient For which pool the liquidity is assigned
   * @param allocationType For which pool the liquidity is assigned
   */
  public constructor({
    recipient,
    allocationType,
  }: AllocationBaseConstructorArgs) {
    this.allocationType = allocationType;
    this.recipient = recipient;
    this.value = 0;
  }

  /**
   * Returns the name of the allocation
   */
  public get name(): string {
    switch (this.allocationType) {
      case AllocationType.Fixed:
        return "Fixed Recipient";
      case AllocationType.Percentage:
        return "Percentage Recipient";
      case AllocationType.FixedTimed:
        return "Fixed Timed Group";
      case AllocationType.FixedPrioritized:
        return "Fixed Prioritized Group";
      case AllocationType.PercentageTimed:
        return "Percentage Timed Group";
      case AllocationType.PercentagePrioritized:
        return "Percentage Prioritized Group";
      default:
        return "Unknown";
    }
  }

  /**
   * Returns the price of token0 at the lower tick
   */
  public get isRecipient(): boolean {
    return !this.isGroup;
  }

  /**
   * Returns the price of token0 at the lower tick
   */
  public get isGroup(): boolean {
    return this.isPrioritized || this.isTimed;
  }

  /**
   * Returns the price of token0 at the lower tick
   */
  public get isPrioritized(): boolean {
    return (
      this.allocationType == AllocationType.PercentagePrioritized ||
      this.allocationType == AllocationType.FixedPrioritized
    );
  }

  /**
   * Returns the price of token0 at the lower tick
   */
  public get isTimed(): boolean {
    return (
      this.allocationType == AllocationType.PercentageTimed ||
      this.allocationType == AllocationType.FixedTimed
    );
  }

  /**
   * Returns the price of token0 at the lower tick
   */
  public get isPercentage(): boolean {
    return (
      this.allocationType == AllocationType.Percentage ||
      this.allocationType == AllocationType.PercentageTimed ||
      this.allocationType == AllocationType.PercentagePrioritized
    );
  }

  /**
   * Returns the price of token0 at the lower tick
   */
  public get isFixed(): boolean {
    return (
      this.allocationType == AllocationType.Fixed ||
      this.allocationType == AllocationType.FixedTimed ||
      this.allocationType == AllocationType.FixedPrioritized
    );
  }
}
