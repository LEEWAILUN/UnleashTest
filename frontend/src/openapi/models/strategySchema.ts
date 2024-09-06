/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { StrategySchemaParametersItem } from './strategySchemaParametersItem';

/**
 * The [activation strategy](https://docs.getunleash.io/reference/activation-strategies) schema
 */
export interface StrategySchema {
    deprecated: boolean;
    /**
     * A short description of the strategy
     * @nullable
     */
    description: string | null;
    /**
     * A human friendly name for the strategy
     * @nullable
     */
    displayName: string | null;
    /** Whether the strategy can be edited or not. Strategies bundled with Unleash cannot be edited. */
    editable: boolean;
    /** The name (type) of the strategy */
    name: string;
    /** A list of relevant parameters for each strategy */
    parameters: StrategySchemaParametersItem[];
    /**
     * An optional title for the strategy
     * @nullable
     */
    title?: string | null;
}
