/**
 * Interfaz del ejercicio "Search on Type"
 */
export interface University {
    domains:          string[];
    alpha_two_code:   string;
    country:          string;
    web_pages:        string[];
    name:             string;
    "state-province": null | string;
}
