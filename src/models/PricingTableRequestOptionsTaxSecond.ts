/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class PricingTableRequestOptionsTaxSecond {
    'type': PricingTableRequestOptionsTaxSecondTypeEnum;
    'name': string;
    'value': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "PricingTableRequestOptionsTaxSecondTypeEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PricingTableRequestOptionsTaxSecond.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PricingTableRequestOptionsTaxSecondTypeEnum = "percent" ;

