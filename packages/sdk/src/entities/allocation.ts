import { AllocationType } from "../types";

export interface AllocationBaseConstructorArgs {
  allocationType: AllocationType;
  recipient: string;
}

/**
 * Represents an allocation in a Mutuals Pool
 */
export abstract class Allocation {
  public readonly recipient: string;

  private _allocationType: AllocationType;
  private _share: number | null;
  private _amount: number | null;

  /**
   * Constructs an allocation for a given pool with the given liquidity
   * @param recipient For which pool the liquidity is assigned
   * @param allocationType For which pool the liquidity is assigned
   */
  public constructor({
    recipient,
    allocationType,
  }: AllocationBaseConstructorArgs) {
    this._allocationType = allocationType;
    this.recipient = recipient;
    this._share = null;
    this._amount = null;
    this.value = 0;
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
  public get allocationType(): AllocationType {
    return this._allocationType;
  }

  /**
   * Returns the price of token0 at the lower tick
   */
  public set allocationType(newAllocationType) {
    const isPrevPercentage = this.isPercentage;
    this._allocationType = newAllocationType;
    if (isPrevPercentage && this.isFixed) {
      this._amount = this._share;
      this._share = null;
    } else if (!isPrevPercentage && this.isPercentage) {
      this._share = this._amount;
      this._amount = null;
    }
  }

  /**
   * Returns the price of token0 at the lower tick
   */
  public get value(): number {
    return (this.isPercentage ? this._share : this._amount) as number;
  }

  /**
   * Returns the price of token0 at the lower tick
   */
  public set value(newValue: number) {
    this.isPercentage ? (this._share = newValue) : (this._amount = newValue);
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
