/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class PricingTableResponseOptions {
    'optional'?: boolean;
    'optionalSelected'?: boolean;
    'multichoiceEnabled'?: boolean;
    'multichoiceSelected'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "optional",
            "baseName": "optional",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "optionalSelected",
            "baseName": "optional_selected",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "multichoiceEnabled",
            "baseName": "multichoice_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "multichoiceSelected",
            "baseName": "multichoice_selected",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PricingTableResponseOptions.attributeTypeMap;
    }

    public constructor() {
    }
}
