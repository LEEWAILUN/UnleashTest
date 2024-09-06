/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { SignalEndpointTokenSchema } from './signalEndpointTokenSchema';

/**
 * An object describing a signal endpoint.
 */
export interface SignalEndpointSchema {
    /** The date and time of when the signal endpoint was created. */
    createdAt: string;
    /** The ID of the user that created this signal endpoint. */
    createdByUserId: number;
    /**
     * A more detailed description of the signal endpoint and its intended use.
     * @nullable
     */
    description?: string | null;
    /** Whether the signal endpoint is currently enabled. If not specified, defaults to true. */
    enabled: boolean;
    /**
     * The signal endpoint's ID. Signal endpoint IDs are incrementing integers. In other words, a more recently created signal endpoint will always have a higher ID than an older one.
     * @minimum 1
     */
    id: number;
    /** The signal endpoint name. Must be URL-safe. */
    name: string;
    /** The list of tokens associated with the signal endpoint. */
    tokens?: SignalEndpointTokenSchema[];
    /** The full URL that should be used to call the signal endpoint. This property is only returned for newly created or updated signal endpoints. */
    url?: string;
}
