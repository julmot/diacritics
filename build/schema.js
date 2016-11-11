/*!***************************************************
 * diacritics
 * http://diacritics.io/
 * Copyright (c) 2016, Julian Motz
 * Released under the MIT license https://git.io/vXg2H
 *****************************************************/
{
    "title": "Language File Schema",
    "type": "object",
    "properties": {
        "metadata": {
            "type": "object",
            "properties": {
                "alphabet": {
                    "type": "string",
                    "minlength": 4,
                    "maxlength": 4
                },
                "continent": {
                    "type": "string",
                    "minimum": 4,
                    "maximum": 4
                },
                "language": {
                    "type": "string",
                    "minlength": 1
                },
                "native": {
                    "type": "string",
                    "minlength": 1
                },
                "sources": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "format": "uri"
                    },
                    "uniqueItems": true
                }
            },
            "required": ["alphabet", "continent", "language", "native"]
        },
        "data": {
            "type": "object",
            "additionalProperties": {
                "type": "object",
                "properties": {
                    "mapping": {
                        "type": "object",
                        "properties": {
                            "base": {
                                "type": "string",
                                "minimum": 1,
                                "maximum": 1
                            },
                            "decompose": {
                                "type": "string",
                                "minimum": 1
                            }
                        },
                        "required": ["base", "decompose"]
                    }
                },
                "required": ["mapping"]
            }
        }
    },
    "required": ["metadata", "data"]
}
