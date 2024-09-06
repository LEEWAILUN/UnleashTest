/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

export type FeatureSchemaDependenciesItem = {
    /** Whether the parent feature is enabled or not */
    enabled?: boolean;
    /** The name of the parent feature */
    feature: string;
    /** The list of variants the parent feature should resolve to. Only valid when feature is enabled. */
    variants?: string[];
};
