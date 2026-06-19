/**
 * Interactive Residential Layout Platform - Client Dashboard Script
 * Implements GIS dashboard logic, search, advanced filters, analytics, 
 * side-by-side comparison, and SVG rendering with pan/zoom engine.
 */

// Inlined database for offline/local execute compatibility
const PLOT_DATABASE = {
    "81": {
        "id": 81,
        "coords": [
            [
                200,
                227
            ],
            [
                243,
                227
            ],
            [
                243,
                258
            ],
            [
                200,
                258
            ]
        ],
        "area_sqft": 2200,
        "area_sqm": 204.4,
        "dims": "36' \u00d7 60'",
        "facing": "North",
        "corner": "Corner Plot",
        "is_corner": true,
        "road_width": "9m",
        "status": "Available",
        "neighbours": {
            "80": "Business Owner",
            "48": "Architect"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 5,
        "main_road_proximity": 3,
        "amenities_proximity": 3,
        "demand_score": 60,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard North-facing residential plot located on a 9m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "80": {
        "id": 80,
        "coords": [
            [
                200,
                258
            ],
            [
                243,
                258
            ],
            [
                243,
                290
            ],
            [
                200,
                290
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Available",
        "neighbours": {
            "79": "Merchant Navy Captain",
            "81": "Cardiologist",
            "49": "Merchant Navy Captain"
        },
        "community_profile": "Mixed Community",
        "neighbourhood_score": 8.0,
        "park_proximity": 5,
        "main_road_proximity": 3,
        "amenities_proximity": 3,
        "demand_score": 48,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard highly favorable East-facing residential plot located on a 9m street. It represents a peaceful Mixed Community with moderate demand and good utility value."
    },
    "79": {
        "id": 79,
        "coords": [
            [
                200,
                290
            ],
            [
                243,
                290
            ],
            [
                243,
                321
            ],
            [
                200,
                321
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Sold",
        "neighbours": {
            "78": "Architect",
            "80": "Business Owner",
            "50": "Business Owner"
        },
        "community_profile": "Mixed Community",
        "neighbourhood_score": 7.5,
        "park_proximity": 6,
        "main_road_proximity": 3,
        "amenities_proximity": 3,
        "demand_score": 49,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard highly favorable East-facing residential plot located on a 9m street. It represents a peaceful Mixed Community with moderate demand and good utility value."
    },
    "78": {
        "id": 78,
        "coords": [
            [
                200,
                321
            ],
            [
                243,
                321
            ],
            [
                243,
                353
            ],
            [
                200,
                353
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Sold",
        "neighbours": {
            "77": "Corporate Director",
            "79": "Merchant Navy Captain",
            "51": "Cardiologist"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 6,
        "main_road_proximity": 3,
        "amenities_proximity": 4,
        "demand_score": 50,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard highly favorable East-facing residential plot located on a 9m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "77": {
        "id": 77,
        "coords": [
            [
                200,
                353
            ],
            [
                243,
                353
            ],
            [
                243,
                385
            ],
            [
                200,
                385
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Sold",
        "neighbours": {
            "76": "Civil Lawyer",
            "78": "Architect",
            "52": "Chartered Accountant"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 10.0,
        "park_proximity": 6,
        "main_road_proximity": 3,
        "amenities_proximity": 4,
        "demand_score": 50,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard highly favorable East-facing residential plot located on a 9m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "76": {
        "id": 76,
        "coords": [
            [
                200,
                385
            ],
            [
                243,
                385
            ],
            [
                243,
                416
            ],
            [
                200,
                416
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Reserved",
        "neighbours": {
            "75": "Real Estate Consultant",
            "77": "Corporate Director",
            "53": "IAS Officer"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 8.5,
        "park_proximity": 7,
        "main_road_proximity": 3,
        "amenities_proximity": 4,
        "demand_score": 52,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard highly favorable East-facing residential plot located on a 9m street. It represents a peaceful Residential Community with moderate demand and good utility value."
    },
    "75": {
        "id": 75,
        "coords": [
            [
                200,
                416
            ],
            [
                243,
                416
            ],
            [
                243,
                448
            ],
            [
                200,
                448
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Available",
        "neighbours": {
            "74": "Retired Army Colonel",
            "76": "Civil Lawyer",
            "54": "Software Engineer"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 7,
        "main_road_proximity": 3,
        "amenities_proximity": 5,
        "demand_score": 53,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard highly favorable East-facing residential plot located on a 9m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "74": {
        "id": 74,
        "coords": [
            [
                200,
                448
            ],
            [
                243,
                448
            ],
            [
                243,
                480
            ],
            [
                200,
                480
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Available",
        "neighbours": {
            "73": "Senior Scientist",
            "75": "Real Estate Consultant",
            "55": "Senior Bank Manager"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 10.0,
        "park_proximity": 7,
        "main_road_proximity": 3,
        "amenities_proximity": 5,
        "demand_score": 53,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard highly favorable East-facing residential plot located on a 9m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "73": {
        "id": 73,
        "coords": [
            [
                200,
                480
            ],
            [
                243,
                480
            ],
            [
                243,
                511
            ],
            [
                200,
                511
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Sold",
        "neighbours": {
            "72": "University Professor",
            "74": "Retired Army Colonel",
            "56": "Doctor"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 8.5,
        "park_proximity": 7,
        "main_road_proximity": 3,
        "amenities_proximity": 5,
        "demand_score": 53,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard highly favorable East-facing residential plot located on a 9m street. It represents a peaceful Residential Community with moderate demand and good utility value."
    },
    "72": {
        "id": 72,
        "coords": [
            [
                200,
                511
            ],
            [
                243,
                511
            ],
            [
                243,
                543
            ],
            [
                200,
                543
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Sold",
        "neighbours": {
            "71": "Doctor",
            "73": "Senior Scientist",
            "57": "University Professor"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 7,
        "main_road_proximity": 3,
        "amenities_proximity": 5,
        "demand_score": 53,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard highly favorable East-facing residential plot located on a 9m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "71": {
        "id": 71,
        "coords": [
            [
                200,
                543
            ],
            [
                243,
                543
            ],
            [
                243,
                575
            ],
            [
                200,
                575
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Sold",
        "neighbours": {
            "70": "Senior Bank Manager",
            "72": "University Professor",
            "58": "Senior Scientist"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 8,
        "main_road_proximity": 3,
        "amenities_proximity": 6,
        "demand_score": 56,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard highly favorable East-facing residential plot located on a 9m street. It represents a peaceful Residential Community with moderate demand and good utility value."
    },
    "70": {
        "id": 70,
        "coords": [
            [
                200,
                575
            ],
            [
                243,
                575
            ],
            [
                243,
                606
            ],
            [
                200,
                606
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Reserved",
        "neighbours": {
            "69": "Software Engineer",
            "71": "Doctor",
            "59": "Retired Army Colonel"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.5,
        "park_proximity": 8,
        "main_road_proximity": 3,
        "amenities_proximity": 6,
        "demand_score": 56,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard highly favorable East-facing residential plot located on a 9m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "69": {
        "id": 69,
        "coords": [
            [
                200,
                606
            ],
            [
                243,
                606
            ],
            [
                243,
                638
            ],
            [
                200,
                638
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Available",
        "neighbours": {
            "68": "IAS Officer",
            "70": "Senior Bank Manager",
            "60": "Real Estate Consultant"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 8.0,
        "park_proximity": 8,
        "main_road_proximity": 3,
        "amenities_proximity": 6,
        "demand_score": 56,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard highly favorable East-facing residential plot located on a 9m street. It represents a peaceful Residential Community with moderate demand and good utility value."
    },
    "68": {
        "id": 68,
        "coords": [
            [
                200,
                638
            ],
            [
                243,
                638
            ],
            [
                243,
                670
            ],
            [
                200,
                670
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Available",
        "neighbours": {
            "67": "Chartered Accountant",
            "69": "Software Engineer",
            "61": "Civil Lawyer"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 10.0,
        "park_proximity": 7,
        "main_road_proximity": 3,
        "amenities_proximity": 6,
        "demand_score": 55,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard highly favorable East-facing residential plot located on a 9m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "67": {
        "id": 67,
        "coords": [
            [
                200,
                670
            ],
            [
                243,
                670
            ],
            [
                243,
                701
            ],
            [
                200,
                701
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Sold",
        "neighbours": {
            "66": "Cardiologist",
            "68": "IAS Officer",
            "62": "Corporate Director"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 8.5,
        "park_proximity": 7,
        "main_road_proximity": 3,
        "amenities_proximity": 7,
        "demand_score": 56,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard highly favorable East-facing residential plot located on a 9m street. It represents a peaceful Residential Community with moderate demand and good utility value."
    },
    "66": {
        "id": 66,
        "coords": [
            [
                200,
                701
            ],
            [
                243,
                701
            ],
            [
                243,
                733
            ],
            [
                200,
                733
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Sold",
        "neighbours": {
            "65": "Business Owner",
            "67": "Chartered Accountant",
            "63": "Architect"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 7,
        "main_road_proximity": 3,
        "amenities_proximity": 7,
        "demand_score": 56,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard highly favorable East-facing residential plot located on a 9m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "65": {
        "id": 65,
        "coords": [
            [
                200,
                733
            ],
            [
                243,
                733
            ],
            [
                243,
                765
            ],
            [
                200,
                765
            ]
        ],
        "area_sqft": 2200,
        "area_sqm": 204.4,
        "dims": "36' \u00d7 60'",
        "facing": "South",
        "corner": "Corner Plot",
        "is_corner": true,
        "road_width": "9m",
        "status": "Sold",
        "neighbours": {
            "66": "Cardiologist",
            "64": "Merchant Navy Captain"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 10.0,
        "park_proximity": 7,
        "main_road_proximity": 3,
        "amenities_proximity": 7,
        "demand_score": 61,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard South-facing residential plot located on a 9m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "48": {
        "id": 48,
        "coords": [
            [
                243,
                227
            ],
            [
                286,
                227
            ],
            [
                286,
                258
            ],
            [
                243,
                258
            ]
        ],
        "area_sqft": 2200,
        "area_sqm": 204.4,
        "dims": "36' \u00d7 60'",
        "facing": "North",
        "corner": "Corner Plot",
        "is_corner": true,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "49": "Merchant Navy Captain",
            "81": "Cardiologist"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 5,
        "main_road_proximity": 4,
        "amenities_proximity": 3,
        "demand_score": 67,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard North-facing residential plot located on a 12m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "49": {
        "id": 49,
        "coords": [
            [
                243,
                258
            ],
            [
                286,
                258
            ],
            [
                286,
                290
            ],
            [
                243,
                290
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "48": "Architect",
            "50": "Business Owner",
            "80": "Business Owner"
        },
        "community_profile": "Mixed Community",
        "neighbourhood_score": 7.5,
        "park_proximity": 6,
        "main_road_proximity": 4,
        "amenities_proximity": 3,
        "demand_score": 49,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Mixed Community with moderate demand and good utility value."
    },
    "50": {
        "id": 50,
        "coords": [
            [
                243,
                290
            ],
            [
                286,
                290
            ],
            [
                286,
                321
            ],
            [
                243,
                321
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Available",
        "neighbours": {
            "49": "Merchant Navy Captain",
            "51": "Cardiologist",
            "79": "Merchant Navy Captain"
        },
        "community_profile": "Mixed Community",
        "neighbourhood_score": 8.0,
        "park_proximity": 6,
        "main_road_proximity": 4,
        "amenities_proximity": 3,
        "demand_score": 49,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Mixed Community with moderate demand and good utility value."
    },
    "51": {
        "id": 51,
        "coords": [
            [
                243,
                321
            ],
            [
                286,
                321
            ],
            [
                286,
                353
            ],
            [
                243,
                353
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Available",
        "neighbours": {
            "50": "Business Owner",
            "52": "Chartered Accountant",
            "78": "Architect"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 6,
        "main_road_proximity": 4,
        "amenities_proximity": 4,
        "demand_score": 50,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "52": {
        "id": 52,
        "coords": [
            [
                243,
                353
            ],
            [
                286,
                353
            ],
            [
                286,
                385
            ],
            [
                243,
                385
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Reserved",
        "neighbours": {
            "51": "Cardiologist",
            "53": "IAS Officer",
            "77": "Corporate Director"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 8.5,
        "park_proximity": 7,
        "main_road_proximity": 4,
        "amenities_proximity": 4,
        "demand_score": 52,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Residential Community with moderate demand and good utility value."
    },
    "53": {
        "id": 53,
        "coords": [
            [
                243,
                385
            ],
            [
                286,
                385
            ],
            [
                286,
                416
            ],
            [
                243,
                416
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "52": "Chartered Accountant",
            "54": "Software Engineer",
            "76": "Civil Lawyer"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 10.0,
        "park_proximity": 7,
        "main_road_proximity": 4,
        "amenities_proximity": 4,
        "demand_score": 52,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "54": {
        "id": 54,
        "coords": [
            [
                243,
                416
            ],
            [
                286,
                416
            ],
            [
                286,
                448
            ],
            [
                243,
                448
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "53": "IAS Officer",
            "55": "Senior Bank Manager",
            "75": "Real Estate Consultant"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 8.0,
        "park_proximity": 7,
        "main_road_proximity": 4,
        "amenities_proximity": 5,
        "demand_score": 53,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Residential Community with moderate demand and good utility value."
    },
    "55": {
        "id": 55,
        "coords": [
            [
                243,
                448
            ],
            [
                286,
                448
            ],
            [
                286,
                480
            ],
            [
                243,
                480
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "54": "Software Engineer",
            "56": "Doctor",
            "74": "Retired Army Colonel"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.5,
        "park_proximity": 7,
        "main_road_proximity": 4,
        "amenities_proximity": 5,
        "demand_score": 53,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "56": {
        "id": 56,
        "coords": [
            [
                243,
                480
            ],
            [
                286,
                480
            ],
            [
                286,
                511
            ],
            [
                243,
                511
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Available",
        "neighbours": {
            "55": "Senior Bank Manager",
            "57": "University Professor",
            "73": "Senior Scientist"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 8,
        "main_road_proximity": 4,
        "amenities_proximity": 5,
        "demand_score": 55,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Residential Community with moderate demand and good utility value."
    },
    "57": {
        "id": 57,
        "coords": [
            [
                243,
                511
            ],
            [
                286,
                511
            ],
            [
                286,
                543
            ],
            [
                243,
                543
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Available",
        "neighbours": {
            "56": "Doctor",
            "58": "Senior Scientist",
            "72": "University Professor"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 8,
        "main_road_proximity": 4,
        "amenities_proximity": 5,
        "demand_score": 55,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "58": {
        "id": 58,
        "coords": [
            [
                243,
                543
            ],
            [
                286,
                543
            ],
            [
                286,
                575
            ],
            [
                243,
                575
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Reserved",
        "neighbours": {
            "57": "University Professor",
            "59": "Retired Army Colonel",
            "71": "Doctor"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 8.5,
        "park_proximity": 8,
        "main_road_proximity": 4,
        "amenities_proximity": 6,
        "demand_score": 56,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Residential Community with moderate demand and good utility value."
    },
    "59": {
        "id": 59,
        "coords": [
            [
                243,
                575
            ],
            [
                286,
                575
            ],
            [
                286,
                606
            ],
            [
                243,
                606
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "58": "Senior Scientist",
            "60": "Real Estate Consultant",
            "70": "Senior Bank Manager"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 10.0,
        "park_proximity": 8,
        "main_road_proximity": 4,
        "amenities_proximity": 6,
        "demand_score": 56,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "60": {
        "id": 60,
        "coords": [
            [
                243,
                606
            ],
            [
                286,
                606
            ],
            [
                286,
                638
            ],
            [
                243,
                638
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "59": "Retired Army Colonel",
            "61": "Civil Lawyer",
            "69": "Software Engineer"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 8,
        "main_road_proximity": 4,
        "amenities_proximity": 6,
        "demand_score": 56,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "61": {
        "id": 61,
        "coords": [
            [
                243,
                638
            ],
            [
                286,
                638
            ],
            [
                286,
                670
            ],
            [
                243,
                670
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "60": "Real Estate Consultant",
            "62": "Corporate Director",
            "68": "IAS Officer"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 8.5,
        "park_proximity": 8,
        "main_road_proximity": 4,
        "amenities_proximity": 7,
        "demand_score": 57,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Residential Community with moderate demand and good utility value."
    },
    "62": {
        "id": 62,
        "coords": [
            [
                243,
                670
            ],
            [
                286,
                670
            ],
            [
                286,
                701
            ],
            [
                243,
                701
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Available",
        "neighbours": {
            "61": "Civil Lawyer",
            "63": "Architect",
            "67": "Chartered Accountant"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 10.0,
        "park_proximity": 8,
        "main_road_proximity": 4,
        "amenities_proximity": 7,
        "demand_score": 57,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "63": {
        "id": 63,
        "coords": [
            [
                243,
                701
            ],
            [
                286,
                701
            ],
            [
                286,
                733
            ],
            [
                243,
                733
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "30' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Available",
        "neighbours": {
            "62": "Corporate Director",
            "64": "Merchant Navy Captain",
            "66": "Cardiologist"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 8,
        "main_road_proximity": 4,
        "amenities_proximity": 7,
        "demand_score": 57,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "64": {
        "id": 64,
        "coords": [
            [
                243,
                733
            ],
            [
                286,
                733
            ],
            [
                286,
                765
            ],
            [
                243,
                765
            ]
        ],
        "area_sqft": 2200,
        "area_sqm": 204.4,
        "dims": "36' \u00d7 60'",
        "facing": "South",
        "corner": "Corner Plot",
        "is_corner": true,
        "road_width": "12m",
        "status": "Reserved",
        "neighbours": {
            "63": "Architect",
            "65": "Business Owner"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.5,
        "park_proximity": 7,
        "main_road_proximity": 4,
        "amenities_proximity": 7,
        "demand_score": 67,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard South-facing residential plot located on a 12m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "47": {
        "id": 47,
        "coords": [
            [
                360,
                432
            ],
            [
                392,
                432
            ],
            [
                392,
                464
            ],
            [
                360,
                464
            ]
        ],
        "area_sqft": 2400,
        "area_sqm": 223.0,
        "dims": "48' \u00d7 50'",
        "facing": "North",
        "corner": "Corner Plot",
        "is_corner": true,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "46": "Civil Lawyer",
            "28": "Senior Scientist"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 10.0,
        "park_proximity": 8,
        "main_road_proximity": 6,
        "amenities_proximity": 5,
        "demand_score": 78,
        "demand_level": "High",
        "demand_explanation": "High demand plot. Highly desired due to its North-facing direction and wide 12m adjacent road. Being a Corner Plot provides excellent ventilation, additional access, and high premium value. Surrounded by a high-end Professional Community with close access to parks."
    },
    "46": {
        "id": 46,
        "coords": [
            [
                360,
                464
            ],
            [
                392,
                464
            ],
            [
                392,
                497
            ],
            [
                360,
                497
            ]
        ],
        "area_sqft": 2000,
        "area_sqm": 185.8,
        "dims": "40' \u00d7 50'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Reserved",
        "neighbours": {
            "45": "Real Estate Consultant",
            "47": "Corporate Director",
            "29": "Retired Army Colonel"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 8.5,
        "park_proximity": 8,
        "main_road_proximity": 6,
        "amenities_proximity": 5,
        "demand_score": 65,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard highly favorable East-facing residential plot located on a 12m street. It represents a peaceful Residential Community with moderate demand and good utility value."
    },
    "45": {
        "id": 45,
        "coords": [
            [
                360,
                497
            ],
            [
                392,
                497
            ],
            [
                392,
                530
            ],
            [
                360,
                530
            ]
        ],
        "area_sqft": 2000,
        "area_sqm": 185.8,
        "dims": "40' \u00d7 50'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Available",
        "neighbours": {
            "44": "Retired Army Colonel",
            "46": "Civil Lawyer",
            "30": "Real Estate Consultant"
        },
        "community_profile": "Mixed Community",
        "neighbourhood_score": 7.0,
        "park_proximity": 9,
        "main_road_proximity": 6,
        "amenities_proximity": 5,
        "demand_score": 67,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard highly favorable East-facing residential plot located on a 12m street. It represents a peaceful Mixed Community with moderate demand and good utility value."
    },
    "44": {
        "id": 44,
        "coords": [
            [
                360,
                530
            ],
            [
                392,
                530
            ],
            [
                392,
                563
            ],
            [
                360,
                563
            ]
        ],
        "area_sqft": 2000,
        "area_sqm": 185.8,
        "dims": "40' \u00d7 50'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "43": "Senior Scientist",
            "45": "Real Estate Consultant",
            "31": "Civil Lawyer"
        },
        "community_profile": "Mixed Community",
        "neighbourhood_score": 8.0,
        "park_proximity": 9,
        "main_road_proximity": 6,
        "amenities_proximity": 6,
        "demand_score": 68,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard highly favorable East-facing residential plot located on a 12m street. It represents a peaceful Mixed Community with moderate demand and good utility value."
    },
    "43": {
        "id": 43,
        "coords": [
            [
                360,
                563
            ],
            [
                392,
                563
            ],
            [
                392,
                596
            ],
            [
                360,
                596
            ]
        ],
        "area_sqft": 2000,
        "area_sqm": 185.8,
        "dims": "40' \u00d7 50'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "42": "University Professor",
            "44": "Retired Army Colonel",
            "32": "Corporate Director"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 8.5,
        "park_proximity": 9,
        "main_road_proximity": 6,
        "amenities_proximity": 6,
        "demand_score": 68,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard highly favorable East-facing residential plot located on a 12m street. It represents a peaceful Residential Community with moderate demand and good utility value."
    },
    "42": {
        "id": 42,
        "coords": [
            [
                360,
                596
            ],
            [
                392,
                596
            ],
            [
                392,
                628
            ],
            [
                360,
                628
            ]
        ],
        "area_sqft": 2000,
        "area_sqm": 185.8,
        "dims": "40' \u00d7 50'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "41": "Doctor",
            "43": "Senior Scientist",
            "33": "Architect"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 9,
        "main_road_proximity": 6,
        "amenities_proximity": 6,
        "demand_score": 68,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard highly favorable East-facing residential plot located on a 12m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "41": {
        "id": 41,
        "coords": [
            [
                360,
                628
            ],
            [
                392,
                628
            ],
            [
                392,
                661
            ],
            [
                360,
                661
            ]
        ],
        "area_sqft": 2000,
        "area_sqm": 185.8,
        "dims": "40' \u00d7 50'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "40": "Senior Bank Manager",
            "42": "University Professor",
            "34": "Merchant Navy Captain"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 9,
        "main_road_proximity": 6,
        "amenities_proximity": 6,
        "demand_score": 68,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard highly favorable East-facing residential plot located on a 12m street. It represents a peaceful Residential Community with moderate demand and good utility value."
    },
    "40": {
        "id": 40,
        "coords": [
            [
                360,
                661
            ],
            [
                392,
                661
            ],
            [
                392,
                694
            ],
            [
                360,
                694
            ]
        ],
        "area_sqft": 2000,
        "area_sqm": 185.8,
        "dims": "40' \u00d7 50'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Available",
        "neighbours": {
            "39": "Software Engineer",
            "41": "Doctor",
            "35": "Business Owner"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.5,
        "park_proximity": 9,
        "main_road_proximity": 6,
        "amenities_proximity": 7,
        "demand_score": 70,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard highly favorable East-facing residential plot located on a 12m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "39": {
        "id": 39,
        "coords": [
            [
                360,
                694
            ],
            [
                392,
                694
            ],
            [
                392,
                727
            ],
            [
                360,
                727
            ]
        ],
        "area_sqft": 2000,
        "area_sqm": 185.8,
        "dims": "40' \u00d7 50'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Available",
        "neighbours": {
            "38": "IAS Officer",
            "40": "Senior Bank Manager",
            "36": "Cardiologist"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 8.0,
        "park_proximity": 8,
        "main_road_proximity": 6,
        "amenities_proximity": 7,
        "demand_score": 68,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard highly favorable East-facing residential plot located on a 12m street. It represents a peaceful Residential Community with moderate demand and good utility value."
    },
    "38": {
        "id": 38,
        "coords": [
            [
                360,
                727
            ],
            [
                392,
                727
            ],
            [
                392,
                760
            ],
            [
                360,
                760
            ]
        ],
        "area_sqft": 2400,
        "area_sqm": 223.0,
        "dims": "48' \u00d7 50'",
        "facing": "South",
        "corner": "Corner Plot",
        "is_corner": true,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "39": "Software Engineer",
            "37": "Chartered Accountant"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 10.0,
        "park_proximity": 8,
        "main_road_proximity": 6,
        "amenities_proximity": 7,
        "demand_score": 73,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard South-facing residential plot located on a 12m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "28": {
        "id": 28,
        "coords": [
            [
                392,
                432
            ],
            [
                435,
                432
            ],
            [
                435,
                464
            ],
            [
                392,
                464
            ]
        ],
        "area_sqft": 2400,
        "area_sqm": 223.0,
        "dims": "48' \u00d7 50'",
        "facing": "North",
        "corner": "Corner Plot",
        "is_corner": true,
        "road_width": "12m",
        "status": "Available",
        "neighbours": {
            "29": "Retired Army Colonel",
            "47": "Corporate Director",
            "18": "Architect"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 8.5,
        "park_proximity": 8,
        "main_road_proximity": 7,
        "amenities_proximity": 5,
        "demand_score": 79,
        "demand_level": "High",
        "demand_explanation": "High demand plot. Highly desired due to its North-facing direction and wide 12m adjacent road. Being a Corner Plot provides excellent ventilation, additional access, and high premium value. Surrounded by a high-end Residential Community with close access to parks."
    },
    "29": {
        "id": 29,
        "coords": [
            [
                392,
                464
            ],
            [
                435,
                464
            ],
            [
                435,
                497
            ],
            [
                392,
                497
            ]
        ],
        "area_sqft": 2000,
        "area_sqm": 185.8,
        "dims": "40' \u00d7 50'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Reserved",
        "neighbours": {
            "28": "Senior Scientist",
            "30": "Real Estate Consultant",
            "46": "Civil Lawyer",
            "19": "Merchant Navy Captain"
        },
        "community_profile": "Mixed Community",
        "neighbourhood_score": 8.0,
        "park_proximity": 8,
        "main_road_proximity": 7,
        "amenities_proximity": 5,
        "demand_score": 60,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Mixed Community with moderate demand and good utility value."
    },
    "30": {
        "id": 30,
        "coords": [
            [
                392,
                497
            ],
            [
                435,
                497
            ],
            [
                435,
                530
            ],
            [
                392,
                530
            ]
        ],
        "area_sqft": 2000,
        "area_sqm": 185.8,
        "dims": "40' \u00d7 50'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "29": "Retired Army Colonel",
            "31": "Civil Lawyer",
            "45": "Real Estate Consultant",
            "20": "Business Owner"
        },
        "community_profile": "Mixed Community",
        "neighbourhood_score": 7.0,
        "park_proximity": 9,
        "main_road_proximity": 7,
        "amenities_proximity": 5,
        "demand_score": 62,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Mixed Community with moderate demand and good utility value."
    },
    "31": {
        "id": 31,
        "coords": [
            [
                392,
                530
            ],
            [
                435,
                530
            ],
            [
                435,
                563
            ],
            [
                392,
                563
            ]
        ],
        "area_sqft": 2000,
        "area_sqm": 185.8,
        "dims": "40' \u00d7 50'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "30": "Real Estate Consultant",
            "32": "Corporate Director",
            "44": "Retired Army Colonel",
            "21": "Cardiologist"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 8.5,
        "park_proximity": 9,
        "main_road_proximity": 7,
        "amenities_proximity": 5,
        "demand_score": 62,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Residential Community with moderate demand and good utility value."
    },
    "32": {
        "id": 32,
        "coords": [
            [
                392,
                563
            ],
            [
                435,
                563
            ],
            [
                435,
                596
            ],
            [
                392,
                596
            ]
        ],
        "area_sqft": 2000,
        "area_sqm": 185.8,
        "dims": "40' \u00d7 50'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "31": "Civil Lawyer",
            "33": "Architect",
            "43": "Senior Scientist",
            "22": "Chartered Accountant"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 10.0,
        "park_proximity": 9,
        "main_road_proximity": 7,
        "amenities_proximity": 6,
        "demand_score": 63,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "33": {
        "id": 33,
        "coords": [
            [
                392,
                596
            ],
            [
                435,
                596
            ],
            [
                435,
                628
            ],
            [
                392,
                628
            ]
        ],
        "area_sqft": 2000,
        "area_sqm": 185.8,
        "dims": "40' \u00d7 50'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Available",
        "neighbours": {
            "32": "Corporate Director",
            "34": "Merchant Navy Captain",
            "42": "University Professor",
            "23": "IAS Officer"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 8.0,
        "park_proximity": 9,
        "main_road_proximity": 7,
        "amenities_proximity": 6,
        "demand_score": 63,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Residential Community with moderate demand and good utility value."
    },
    "34": {
        "id": 34,
        "coords": [
            [
                392,
                628
            ],
            [
                435,
                628
            ],
            [
                435,
                661
            ],
            [
                392,
                661
            ]
        ],
        "area_sqft": 2000,
        "area_sqm": 185.8,
        "dims": "40' \u00d7 50'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Available",
        "neighbours": {
            "33": "Architect",
            "35": "Business Owner",
            "41": "Doctor",
            "24": "Software Engineer"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.5,
        "park_proximity": 9,
        "main_road_proximity": 7,
        "amenities_proximity": 6,
        "demand_score": 63,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "35": {
        "id": 35,
        "coords": [
            [
                392,
                661
            ],
            [
                435,
                661
            ],
            [
                435,
                694
            ],
            [
                392,
                694
            ]
        ],
        "area_sqft": 2000,
        "area_sqm": 185.8,
        "dims": "40' \u00d7 50'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "34": "Merchant Navy Captain",
            "36": "Cardiologist",
            "40": "Senior Bank Manager",
            "25": "Senior Bank Manager"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 9,
        "main_road_proximity": 7,
        "amenities_proximity": 7,
        "demand_score": 64,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Residential Community with moderate demand and good utility value."
    },
    "36": {
        "id": 36,
        "coords": [
            [
                392,
                694
            ],
            [
                435,
                694
            ],
            [
                435,
                727
            ],
            [
                392,
                727
            ]
        ],
        "area_sqft": 2000,
        "area_sqm": 185.8,
        "dims": "40' \u00d7 50'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "35": "Business Owner",
            "37": "Chartered Accountant",
            "39": "Software Engineer",
            "26": "Doctor"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 8,
        "main_road_proximity": 7,
        "amenities_proximity": 7,
        "demand_score": 63,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard West-facing residential plot located on a 12m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "37": {
        "id": 37,
        "coords": [
            [
                392,
                727
            ],
            [
                435,
                727
            ],
            [
                435,
                760
            ],
            [
                392,
                760
            ]
        ],
        "area_sqft": 2400,
        "area_sqm": 223.0,
        "dims": "48' \u00d7 50'",
        "facing": "South",
        "corner": "Corner Plot",
        "is_corner": true,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "36": "Cardiologist",
            "38": "IAS Officer",
            "27": "University Professor"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 8.5,
        "park_proximity": 8,
        "main_road_proximity": 7,
        "amenities_proximity": 7,
        "demand_score": 74,
        "demand_level": "High",
        "demand_explanation": "High demand plot. Highly desired due to its South-facing direction and wide 12m adjacent road. Being a Corner Plot provides excellent ventilation, additional access, and high premium value. Surrounded by a high-end Residential Community with close access to parks."
    },
    "27": {
        "id": 27,
        "coords": [
            [
                472,
                432
            ],
            [
                515,
                432
            ],
            [
                515,
                464
            ],
            [
                472,
                464
            ]
        ],
        "area_sqft": 3600,
        "area_sqm": 334.5,
        "dims": "60' \u00d7 60'",
        "facing": "North",
        "corner": "Corner Plot",
        "is_corner": true,
        "road_width": "15m",
        "status": "Available",
        "neighbours": {
            "26": "Doctor",
            "37": "Chartered Accountant"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 7,
        "main_road_proximity": 9,
        "amenities_proximity": 4,
        "demand_score": 97,
        "demand_level": "Very High",
        "demand_explanation": "Very High demand plot. Highly desired due to its North-facing direction and wide 15m adjacent road. Being a Corner Plot provides excellent ventilation, additional access, and high premium value. Surrounded by a high-end Professional Community with close access to parks."
    },
    "26": {
        "id": 26,
        "coords": [
            [
                472,
                464
            ],
            [
                515,
                464
            ],
            [
                515,
                497
            ],
            [
                472,
                497
            ]
        ],
        "area_sqft": 3000,
        "area_sqm": 278.7,
        "dims": "50' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "15m",
        "status": "Sold",
        "neighbours": {
            "25": "Senior Bank Manager",
            "27": "University Professor",
            "36": "Cardiologist"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 8,
        "main_road_proximity": 9,
        "amenities_proximity": 5,
        "demand_score": 78,
        "demand_level": "High",
        "demand_explanation": "High demand plot. Highly desired due to its West-facing direction and wide 15m adjacent road. Surrounded by a high-end Residential Community with close access to parks."
    },
    "25": {
        "id": 25,
        "coords": [
            [
                472,
                497
            ],
            [
                515,
                497
            ],
            [
                515,
                530
            ],
            [
                472,
                530
            ]
        ],
        "area_sqft": 3000,
        "area_sqm": 278.7,
        "dims": "50' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "15m",
        "status": "Sold",
        "neighbours": {
            "24": "Software Engineer",
            "26": "Doctor",
            "35": "Business Owner"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.5,
        "park_proximity": 8,
        "main_road_proximity": 9,
        "amenities_proximity": 5,
        "demand_score": 78,
        "demand_level": "High",
        "demand_explanation": "High demand plot. Highly desired due to its West-facing direction and wide 15m adjacent road. Surrounded by a high-end Professional Community with close access to parks."
    },
    "24": {
        "id": 24,
        "coords": [
            [
                472,
                530
            ],
            [
                515,
                530
            ],
            [
                515,
                563
            ],
            [
                472,
                563
            ]
        ],
        "area_sqft": 3000,
        "area_sqm": 278.7,
        "dims": "50' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "15m",
        "status": "Sold",
        "neighbours": {
            "23": "IAS Officer",
            "25": "Senior Bank Manager",
            "34": "Merchant Navy Captain"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 8.0,
        "park_proximity": 8,
        "main_road_proximity": 9,
        "amenities_proximity": 5,
        "demand_score": 78,
        "demand_level": "High",
        "demand_explanation": "High demand plot. Highly desired due to its West-facing direction and wide 15m adjacent road. Surrounded by a high-end Residential Community with close access to parks."
    },
    "23": {
        "id": 23,
        "coords": [
            [
                472,
                563
            ],
            [
                515,
                563
            ],
            [
                515,
                596
            ],
            [
                472,
                596
            ]
        ],
        "area_sqft": 3000,
        "area_sqm": 278.7,
        "dims": "50' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "15m",
        "status": "Reserved",
        "neighbours": {
            "22": "Chartered Accountant",
            "24": "Software Engineer",
            "33": "Architect"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 10.0,
        "park_proximity": 8,
        "main_road_proximity": 9,
        "amenities_proximity": 5,
        "demand_score": 78,
        "demand_level": "High",
        "demand_explanation": "High demand plot. Highly desired due to its West-facing direction and wide 15m adjacent road. Surrounded by a high-end Professional Community with close access to parks."
    },
    "22": {
        "id": 22,
        "coords": [
            [
                472,
                596
            ],
            [
                515,
                596
            ],
            [
                515,
                628
            ],
            [
                472,
                628
            ]
        ],
        "area_sqft": 3000,
        "area_sqm": 278.7,
        "dims": "50' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "15m",
        "status": "Available",
        "neighbours": {
            "21": "Cardiologist",
            "23": "IAS Officer",
            "32": "Corporate Director"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 8.5,
        "park_proximity": 8,
        "main_road_proximity": 9,
        "amenities_proximity": 6,
        "demand_score": 79,
        "demand_level": "High",
        "demand_explanation": "High demand plot. Highly desired due to its West-facing direction and wide 15m adjacent road. Surrounded by a high-end Residential Community with close access to parks."
    },
    "21": {
        "id": 21,
        "coords": [
            [
                472,
                628
            ],
            [
                515,
                628
            ],
            [
                515,
                661
            ],
            [
                472,
                661
            ]
        ],
        "area_sqft": 3000,
        "area_sqm": 278.7,
        "dims": "50' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "15m",
        "status": "Available",
        "neighbours": {
            "20": "Business Owner",
            "22": "Chartered Accountant",
            "31": "Civil Lawyer"
        },
        "community_profile": "Mixed Community",
        "neighbourhood_score": 7.0,
        "park_proximity": 8,
        "main_road_proximity": 9,
        "amenities_proximity": 6,
        "demand_score": 79,
        "demand_level": "High",
        "demand_explanation": "High demand plot. Highly desired due to its West-facing direction and wide 15m adjacent road. Surrounded by a high-end Mixed Community with close access to parks."
    },
    "20": {
        "id": 20,
        "coords": [
            [
                472,
                661
            ],
            [
                515,
                661
            ],
            [
                515,
                694
            ],
            [
                472,
                694
            ]
        ],
        "area_sqft": 3000,
        "area_sqm": 278.7,
        "dims": "50' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "15m",
        "status": "Sold",
        "neighbours": {
            "19": "Merchant Navy Captain",
            "21": "Cardiologist",
            "30": "Real Estate Consultant"
        },
        "community_profile": "Mixed Community",
        "neighbourhood_score": 8.0,
        "park_proximity": 8,
        "main_road_proximity": 9,
        "amenities_proximity": 6,
        "demand_score": 79,
        "demand_level": "High",
        "demand_explanation": "High demand plot. Highly desired due to its West-facing direction and wide 15m adjacent road. Surrounded by a high-end Mixed Community with close access to parks."
    },
    "19": {
        "id": 19,
        "coords": [
            [
                472,
                694
            ],
            [
                515,
                694
            ],
            [
                515,
                727
            ],
            [
                472,
                727
            ]
        ],
        "area_sqft": 3000,
        "area_sqm": 278.7,
        "dims": "50' \u00d7 60'",
        "facing": "West",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "15m",
        "status": "Sold",
        "neighbours": {
            "18": "Architect",
            "20": "Business Owner",
            "29": "Retired Army Colonel"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.5,
        "park_proximity": 8,
        "main_road_proximity": 9,
        "amenities_proximity": 6,
        "demand_score": 79,
        "demand_level": "High",
        "demand_explanation": "High demand plot. Highly desired due to its West-facing direction and wide 15m adjacent road. Surrounded by a high-end Professional Community with close access to parks."
    },
    "18": {
        "id": 18,
        "coords": [
            [
                472,
                727
            ],
            [
                515,
                727
            ],
            [
                515,
                760
            ],
            [
                472,
                760
            ]
        ],
        "area_sqft": 3600,
        "area_sqm": 334.5,
        "dims": "60' \u00d7 60'",
        "facing": "South",
        "corner": "Corner Plot",
        "is_corner": true,
        "road_width": "15m",
        "status": "Sold",
        "neighbours": {
            "19": "Merchant Navy Captain",
            "28": "Senior Scientist"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 7,
        "main_road_proximity": 9,
        "amenities_proximity": 7,
        "demand_score": 93,
        "demand_level": "Very High",
        "demand_explanation": "Very High demand plot. Highly desired due to its South-facing direction and wide 15m adjacent road. Being a Corner Plot provides excellent ventilation, additional access, and high premium value. Surrounded by a high-end Professional Community with close access to parks."
    },
    "10": {
        "id": 10,
        "coords": [
            [
                149,
                768
            ],
            [
                198,
                768
            ],
            [
                198,
                825
            ],
            [
                149,
                825
            ]
        ],
        "area_sqft": 1500,
        "area_sqm": 139.4,
        "dims": "30' \u00d7 50'",
        "facing": "East",
        "corner": "Corner Plot",
        "is_corner": true,
        "road_width": "9m",
        "status": "Reserved",
        "neighbours": {
            "9": "Software Engineer",
            "11": "Doctor"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.5,
        "park_proximity": 6,
        "main_road_proximity": 2,
        "amenities_proximity": 8,
        "demand_score": 62,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard highly favorable East-facing residential plot located on a 9m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "9": {
        "id": 9,
        "coords": [
            [
                149,
                825
            ],
            [
                198,
                825
            ],
            [
                198,
                883
            ],
            [
                149,
                883
            ]
        ],
        "area_sqft": 1500,
        "area_sqm": 139.4,
        "dims": "30' \u00d7 50'",
        "facing": "East",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Available",
        "neighbours": {
            "8": "IAS Officer",
            "10": "Senior Bank Manager"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 8.0,
        "park_proximity": 6,
        "main_road_proximity": 2,
        "amenities_proximity": 8,
        "demand_score": 51,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard highly favorable East-facing residential plot located on a 9m street. It represents a peaceful Residential Community with moderate demand and good utility value."
    },
    "8": {
        "id": 8,
        "coords": [
            [
                149,
                883
            ],
            [
                198,
                883
            ],
            [
                198,
                985
            ],
            [
                149,
                985
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "36' \u00d7 50'",
        "facing": "East",
        "corner": "Corner Plot",
        "is_corner": true,
        "road_width": "9m",
        "status": "Sold",
        "neighbours": {
            "9": "Software Engineer",
            "7": "Chartered Accountant"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 10.0,
        "park_proximity": 5,
        "main_road_proximity": 2,
        "amenities_proximity": 8,
        "demand_score": 63,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard highly favorable East-facing residential plot located on a 9m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "11": {
        "id": 11,
        "coords": [
            [
                198,
                768
            ],
            [
                231,
                768
            ],
            [
                231,
                883
            ],
            [
                198,
                883
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "36' \u00d7 50'",
        "facing": "South",
        "corner": "Corner Plot",
        "is_corner": true,
        "road_width": "12m",
        "status": "Reserved",
        "neighbours": {
            "12": "University Professor",
            "1": "Civil Lawyer"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 6,
        "main_road_proximity": 3,
        "amenities_proximity": 8,
        "demand_score": 62,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard South-facing residential plot located on a 12m street. It represents a peaceful Residential Community with moderate demand and good utility value."
    },
    "7": {
        "id": 7,
        "coords": [
            [
                198,
                883
            ],
            [
                231,
                883
            ],
            [
                231,
                985
            ],
            [
                198,
                985
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "36' \u00d7 50'",
        "facing": "North",
        "corner": "Corner Plot",
        "is_corner": true,
        "road_width": "9m",
        "status": "Sold",
        "neighbours": {
            "6": "Cardiologist",
            "17": "Corporate Director"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.5,
        "park_proximity": 5,
        "main_road_proximity": 3,
        "amenities_proximity": 9,
        "demand_score": 64,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard North-facing residential plot located on a 9m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "12": {
        "id": 12,
        "coords": [
            [
                231,
                768
            ],
            [
                264,
                768
            ],
            [
                264,
                883
            ],
            [
                231,
                883
            ]
        ],
        "area_sqft": 1500,
        "area_sqm": 139.4,
        "dims": "30' \u00d7 50'",
        "facing": "South",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "11": "Doctor",
            "13": "Senior Scientist",
            "2": "Corporate Director"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 6,
        "main_road_proximity": 3,
        "amenities_proximity": 8,
        "demand_score": 48,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard South-facing residential plot located on a 12m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "6": {
        "id": 6,
        "coords": [
            [
                231,
                883
            ],
            [
                264,
                883
            ],
            [
                264,
                985
            ],
            [
                231,
                985
            ]
        ],
        "area_sqft": 1500,
        "area_sqm": 139.4,
        "dims": "30' \u00d7 50'",
        "facing": "North",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Sold",
        "neighbours": {
            "5": "Business Owner",
            "7": "Chartered Accountant",
            "16": "Civil Lawyer"
        },
        "community_profile": "Mixed Community",
        "neighbourhood_score": 7.0,
        "park_proximity": 5,
        "main_road_proximity": 3,
        "amenities_proximity": 9,
        "demand_score": 50,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard North-facing residential plot located on a 9m street. It represents a peaceful Mixed Community with moderate demand and good utility value."
    },
    "13": {
        "id": 13,
        "coords": [
            [
                264,
                768
            ],
            [
                296,
                768
            ],
            [
                296,
                883
            ],
            [
                264,
                883
            ]
        ],
        "area_sqft": 1500,
        "area_sqm": 139.4,
        "dims": "30' \u00d7 50'",
        "facing": "South",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "12": "University Professor",
            "14": "Retired Army Colonel",
            "3": "Architect"
        },
        "community_profile": "Residential Community",
        "neighbourhood_score": 8.5,
        "park_proximity": 7,
        "main_road_proximity": 4,
        "amenities_proximity": 8,
        "demand_score": 51,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard South-facing residential plot located on a 12m street. It represents a peaceful Residential Community with moderate demand and good utility value."
    },
    "5": {
        "id": 5,
        "coords": [
            [
                264,
                883
            ],
            [
                296,
                883
            ],
            [
                296,
                985
            ],
            [
                264,
                985
            ]
        ],
        "area_sqft": 1500,
        "area_sqm": 139.4,
        "dims": "30' \u00d7 50'",
        "facing": "North",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Reserved",
        "neighbours": {
            "4": "Merchant Navy Captain",
            "6": "Cardiologist",
            "15": "Real Estate Consultant"
        },
        "community_profile": "Mixed Community",
        "neighbourhood_score": 8.0,
        "park_proximity": 5,
        "main_road_proximity": 4,
        "amenities_proximity": 9,
        "demand_score": 51,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard North-facing residential plot located on a 9m street. It represents a peaceful Mixed Community with moderate demand and good utility value."
    },
    "14": {
        "id": 14,
        "coords": [
            [
                296,
                768
            ],
            [
                330,
                768
            ],
            [
                330,
                883
            ],
            [
                296,
                883
            ]
        ],
        "area_sqft": 1500,
        "area_sqm": 139.4,
        "dims": "30' \u00d7 50'",
        "facing": "South",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Sold",
        "neighbours": {
            "13": "Senior Scientist",
            "15": "Real Estate Consultant",
            "4": "Merchant Navy Captain"
        },
        "community_profile": "Mixed Community",
        "neighbourhood_score": 8.0,
        "park_proximity": 7,
        "main_road_proximity": 5,
        "amenities_proximity": 8,
        "demand_score": 52,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard South-facing residential plot located on a 12m street. It represents a peaceful Mixed Community with moderate demand and good utility value."
    },
    "4": {
        "id": 4,
        "coords": [
            [
                296,
                883
            ],
            [
                330,
                883
            ],
            [
                330,
                985
            ],
            [
                296,
                985
            ]
        ],
        "area_sqft": 1500,
        "area_sqm": 139.4,
        "dims": "30' \u00d7 50'",
        "facing": "North",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Available",
        "neighbours": {
            "3": "Architect",
            "5": "Business Owner",
            "14": "Retired Army Colonel"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.5,
        "park_proximity": 6,
        "main_road_proximity": 5,
        "amenities_proximity": 9,
        "demand_score": 54,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard North-facing residential plot located on a 9m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "15": {
        "id": 15,
        "coords": [
            [
                330,
                768
            ],
            [
                363,
                768
            ],
            [
                363,
                883
            ],
            [
                330,
                883
            ]
        ],
        "area_sqft": 1500,
        "area_sqm": 139.4,
        "dims": "30' \u00d7 50'",
        "facing": "South",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Available",
        "neighbours": {
            "14": "Retired Army Colonel",
            "16": "Civil Lawyer",
            "5": "Business Owner"
        },
        "community_profile": "Mixed Community",
        "neighbourhood_score": 7.0,
        "park_proximity": 7,
        "main_road_proximity": 6,
        "amenities_proximity": 8,
        "demand_score": 53,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard South-facing residential plot located on a 12m street. It represents a peaceful Mixed Community with moderate demand and good utility value."
    },
    "3": {
        "id": 3,
        "coords": [
            [
                330,
                883
            ],
            [
                363,
                883
            ],
            [
                363,
                985
            ],
            [
                330,
                985
            ]
        ],
        "area_sqft": 1500,
        "area_sqm": 139.4,
        "dims": "30' \u00d7 50'",
        "facing": "North",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Available",
        "neighbours": {
            "2": "Corporate Director",
            "4": "Merchant Navy Captain",
            "13": "Senior Scientist"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.0,
        "park_proximity": 6,
        "main_road_proximity": 6,
        "amenities_proximity": 9,
        "demand_score": 55,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard North-facing residential plot located on a 9m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "16": {
        "id": 16,
        "coords": [
            [
                363,
                768
            ],
            [
                396,
                768
            ],
            [
                396,
                883
            ],
            [
                363,
                883
            ]
        ],
        "area_sqft": 1500,
        "area_sqm": 139.4,
        "dims": "30' \u00d7 50'",
        "facing": "South",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "12m",
        "status": "Available",
        "neighbours": {
            "15": "Real Estate Consultant",
            "17": "Corporate Director",
            "6": "Cardiologist"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.5,
        "park_proximity": 7,
        "main_road_proximity": 6,
        "amenities_proximity": 8,
        "demand_score": 53,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard South-facing residential plot located on a 12m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "2": {
        "id": 2,
        "coords": [
            [
                363,
                883
            ],
            [
                396,
                883
            ],
            [
                396,
                985
            ],
            [
                363,
                985
            ]
        ],
        "area_sqft": 1500,
        "area_sqm": 139.4,
        "dims": "30' \u00d7 50'",
        "facing": "North",
        "corner": "Normal Plot",
        "is_corner": false,
        "road_width": "9m",
        "status": "Sold",
        "neighbours": {
            "1": "Civil Lawyer",
            "3": "Architect",
            "12": "University Professor"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 10.0,
        "park_proximity": 6,
        "main_road_proximity": 6,
        "amenities_proximity": 9,
        "demand_score": 55,
        "demand_level": "Low",
        "demand_explanation": "Low demand plot. This is a standard North-facing residential plot located on a 9m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "17": {
        "id": 17,
        "coords": [
            [
                396,
                768
            ],
            [
                433,
                768
            ],
            [
                433,
                883
            ],
            [
                396,
                883
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "36' \u00d7 50'",
        "facing": "South",
        "corner": "Corner Plot",
        "is_corner": true,
        "road_width": "12m",
        "status": "Reserved",
        "neighbours": {
            "16": "Civil Lawyer",
            "7": "Chartered Accountant"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 10.0,
        "park_proximity": 7,
        "main_road_proximity": 7,
        "amenities_proximity": 8,
        "demand_score": 68,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard South-facing residential plot located on a 12m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    },
    "1": {
        "id": 1,
        "coords": [
            [
                396,
                883
            ],
            [
                433,
                883
            ],
            [
                433,
                985
            ],
            [
                396,
                985
            ]
        ],
        "area_sqft": 1800,
        "area_sqm": 167.2,
        "dims": "36' \u00d7 50'",
        "facing": "North",
        "corner": "Corner Plot",
        "is_corner": true,
        "road_width": "9m",
        "status": "Available",
        "neighbours": {
            "2": "Corporate Director",
            "11": "Doctor"
        },
        "community_profile": "Professional Community",
        "neighbourhood_score": 9.5,
        "park_proximity": 6,
        "main_road_proximity": 7,
        "amenities_proximity": 8,
        "demand_score": 68,
        "demand_level": "Medium",
        "demand_explanation": "Medium demand plot. This is a standard North-facing residential plot located on a 9m street. It represents a peaceful Professional Community with moderate demand and good utility value."
    }
};

// DOM References
const viewport = document.getElementById('viewport');
const mapCanvas = document.getElementById('mapCanvas');
const layoutImage = document.getElementById('layoutImage');
const overlay = document.getElementById('overlay');

// Zoom & Pan controls
const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const zoomResetBtn = document.getElementById('zoomResetBtn');
const zoomFitBtn = document.getElementById('zoomFitBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');

// Left Sidebar Controls
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const filterFacing = document.getElementById('filterFacing');
const filterCorner = document.getElementById('filterCorner');
const filterStatus = document.getElementById('filterStatus');
const filterMinArea = document.getElementById('filterMinArea');
const filterMaxArea = document.getElementById('filterMaxArea');
const filterDemand = document.getElementById('filterDemand');

// Analytics elements
const statTotal = document.getElementById('statTotal');
const statAvailable = document.getElementById('statAvailable');
const statReserved = document.getElementById('statReserved');
const statSold = document.getElementById('statSold');
const statAvgArea = document.getElementById('statAvgArea');
const statHighDemand = document.getElementById('statHighDemand');
const statPremium = document.getElementById('statPremium');
const statEastFacing = document.getElementById('statEastFacing');
const statCornerCount = document.getElementById('statCornerCount');

// Right Sidebar / Plot Info Drawer
const plotDetailsDrawer = document.getElementById('plotDetailsDrawer');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');
const infoPlotNum = document.getElementById('infoPlotNum');
const infoStatusBadge = document.getElementById('infoStatusBadge');
const infoAreaSqft = document.getElementById('infoAreaSqft');
const infoAreaSqm = document.getElementById('infoAreaSqm');
const infoDims = document.getElementById('infoDims');
const infoFacing = document.getElementById('infoFacing');
const infoCorner = document.getElementById('infoCorner');
const infoRoadWidth = document.getElementById('infoRoadWidth');

// Demand Index elements
const infoDemandScore = document.getElementById('infoDemandScore');
const infoDemandLevel = document.getElementById('infoDemandLevel');
const infoDemandGaugeFill = document.getElementById('infoDemandGaugeFill');
const infoDemandExplain = document.getElementById('infoDemandExplain');

// Neighbour elements
const infoNeighboursList = document.getElementById('infoNeighboursList');
const infoCommunityProfile = document.getElementById('infoCommunityProfile');
const infoNeighbourhoodScore = document.getElementById('infoNeighbourhoodScore');

// Comparison Elements
const btnAddToCompare = document.getElementById('btnAddToCompare');
const comparisonTray = document.getElementById('comparisonTray');
const comparisonCount = document.getElementById('comparisonCount');
const btnOpenCompareModal = document.getElementById('btnOpenCompareModal');
const comparisonModal = document.getElementById('comparisonModal');
const closeCompareModal = document.getElementById('closeCompareModal');
const comparisonTableBody = document.getElementById('comparisonTableBody');
const btnClearCompare = document.getElementById('btnClearCompare');

// Map State
let scale = 1;
let panX = 0;
let panY = 0;

// Mouse Drag State
let isDragging = false;
let startX = 0;
let startY = 0;
let clickStartX = 0;
let clickStartY = 0;

// Touch Zoom/Pinch State
let isPinching = false;
let initialPinchDist = 0;
let initialScale = 1;
let initialPanX = 0;
let initialPanY = 0;
let pinchMidX = 0;
let pinchMidY = 0;

// Selected & Comparison State
let selectedPlotId = null;
let comparisonList = []; // Array of plot IDs

// Canvas Original Size
const MAP_WIDTH = 1448;
const MAP_HEIGHT = 1086;

// Create floating tooltip element
const tooltip = document.createElement('div');
tooltip.className = 'map-tooltip';
document.body.appendChild(tooltip);

/**
 * Initialize SVG Overlay
 */
function initOverlay() {
    overlay.innerHTML = '';
    
    const plotIds = Object.keys(PLOT_DATABASE).sort((a, b) => parseInt(a) - parseInt(b));
    
    plotIds.forEach(id => {
        const data = PLOT_DATABASE[id];
        const points = data.coords;
        if (!points || points.length < 3) return;
        
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        const pointsStr = points.map(pt => `${pt[0]},${pt[1]}`).join(' ');
        
        polygon.setAttribute('points', pointsStr);
        
        // Dynamic status classes
        let statusClass = 'plot-available';
        if (data.status === 'Reserved') statusClass = 'plot-reserved';
        if (data.status === 'Sold') statusClass = 'plot-sold';
        
        polygon.setAttribute('class', `plot-polygon ${statusClass}`);
        polygon.setAttribute('data-plot-id', id);
        
        // Hover handlers (Tooltip)
        polygon.addEventListener('mousemove', (e) => {
            tooltip.classList.add('active');
            tooltip.innerHTML = `
                <div style="font-weight: 700; color: #fff;">Plot ${id}</div>
                <div style="font-size: 11px; margin-top: 2px;">
                    Status: <span class="status-indicator status-${data.status.toLowerCase()}">${data.status}</span>
                </div>
                <div style="font-size: 10px; color: #cbd5e1; margin-top: 2px;">
                    ${data.area_sqft} sqft | ${data.facing} | ${data.corner}
                </div>
            `;
            tooltip.style.left = (e.clientX + 15) + 'px';
            tooltip.style.top = (e.clientY + 15) + 'px';
        });
        
        polygon.addEventListener('mouseleave', () => {
            tooltip.classList.remove('active');
        });
        
        // Click selection
        polygon.addEventListener('mousedown', (e) => {
            clickStartX = e.clientX;
            clickStartY = e.clientY;
        });
        
        polygon.addEventListener('click', (e) => {
            const dist = Math.hypot(e.clientX - clickStartX, e.clientY - clickStartY);
            if (dist > 5) return; // Ignore drags
            
            selectPlot(id, true);
            e.stopPropagation();
        });
        
        overlay.appendChild(polygon);
    });
}

/**
 * Handle Plot Selection
 */
function selectPlot(id, zoomTo = false) {
    if (selectedPlotId) {
        const prevPoly = overlay.querySelector(`.plot-polygon[data-plot-id="${selectedPlotId}"]`);
        if (prevPoly) prevPoly.classList.remove('active');
    }
    
    if (selectedPlotId === id) {
        // Toggle off
        selectedPlotId = null;
        plotDetailsDrawer.classList.remove('active');
        btnAddToCompare.style.display = 'none';
        return;
    }
    
    selectedPlotId = id;
    const poly = overlay.querySelector(`.plot-polygon[data-plot-id="${id}"]`);
    if (poly) poly.classList.add('active');
    
    // Update Details
    const data = PLOT_DATABASE[id];
    infoPlotNum.textContent = id;
    
    // Status Badge
    infoStatusBadge.className = `status-badge status-${data.status.toLowerCase()}`;
    infoStatusBadge.textContent = data.status;
    
    infoAreaSqft.textContent = `${data.area_sqft} sq.ft`;
    infoAreaSqm.textContent = `${data.area_sqm} sq.m`;
    infoDims.textContent = data.dims;
    infoFacing.textContent = data.facing;
    infoCorner.textContent = data.corner;
    infoRoadWidth.textContent = data.road_width;
    
    // Demand Indicator
    infoDemandScore.textContent = data.demand_score;
    infoDemandLevel.textContent = data.demand_level;
    infoDemandLevel.className = `demand-level-tag level-${data.demand_level.toLowerCase().replace(' ', '-')}`;
    infoDemandGaugeFill.style.width = `${data.demand_score}%`;
    
    // Gauge color scheme based on score
    if (data.demand_score >= 85) {
        infoDemandGaugeFill.style.background = 'linear-gradient(90deg, #38bdf8, #0ea5e9)';
    } else if (data.demand_score >= 70) {
        infoDemandGaugeFill.style.background = 'linear-gradient(90deg, #10b981, #34d399)';
    } else if (data.demand_score >= 55) {
        infoDemandGaugeFill.style.background = 'linear-gradient(90deg, #f59e0b, #fbbf24)';
    } else {
        infoDemandGaugeFill.style.background = 'linear-gradient(90deg, #ef4444, #f87171)';
    }
    
    infoDemandExplain.textContent = data.demand_explanation;
    
    // Neighbour Analysis
    infoNeighboursList.innerHTML = '';
    const neighbours = data.neighbours;
    for (const [nid, prof] of Object.entries(neighbours)) {
        const li = document.createElement('li');
        li.className = 'neighbour-item';
        li.innerHTML = `
            <span class="neighbour-plot">Plot ${nid}</span>
            <span class="neighbour-profession">${prof}</span>
        `;
        li.addEventListener('click', () => selectPlot(nid, true));
        infoNeighboursList.appendChild(li);
    }
    
    infoCommunityProfile.textContent = data.community_profile;
    infoNeighbourhoodScore.textContent = `${data.neighbourhood_score}/10`;
    
    // Update Compare Button state
    updateCompareButtonState(id);
    btnAddToCompare.style.display = 'block';
    
    // Open Details Sidebar
    plotDetailsDrawer.classList.add('active');
    
    // Focus Zoom
    if (zoomTo) {
        focusOnPlot(id);
    }
}

/**
 * Focus and Center Map on Specific Plot
 */
function focusOnPlot(id) {
    const data = PLOT_DATABASE[id];
    if (!data) return;
    
    const pts = data.coords;
    const cx = pts.reduce((sum, p) => sum + p[0], 0) / pts.length;
    const cy = pts.reduce((sum, p) => sum + p[1], 0) / pts.length;
    
    const vWidth = viewport.clientWidth;
    const vHeight = viewport.clientHeight;
    
    // Set a solid target scale for viewing the plot clearly
    scale = 1.6;
    
    // Center it
    panX = vWidth / 2 - cx * scale;
    panY = vHeight / 2 - cy * scale;
    
    applyTransform();
}

/**
 * Zoom and Pan Transformation Math
 */
function applyTransform() {
    const minScale = 0.15;
    const maxScale = 5.0;
    scale = Math.max(minScale, Math.min(maxScale, scale));
    
    mapCanvas.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
}

function fitToViewport() {
    const vWidth = viewport.clientWidth;
    const vHeight = viewport.clientHeight;
    
    const padding = 64;
    const scaleX = (vWidth - padding) / MAP_WIDTH;
    const scaleY = (vHeight - padding) / MAP_HEIGHT;
    
    scale = Math.min(scaleX, scaleY);
    
    panX = (vWidth - MAP_WIDTH * scale) / 2;
    panY = (vHeight - MAP_HEIGHT * scale) / 2;
    
    applyTransform();
}

/**
 * Panning Mouse Listeners
 */
viewport.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    isDragging = true;
    startX = e.clientX - panX;
    startY = e.clientY - panY;
    clickStartX = e.clientX;
    clickStartY = e.clientY;
    e.preventDefault();
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    panX = e.clientX - startX;
    panY = e.clientY - startY;
    applyTransform();
});

window.addEventListener('mouseup', () => {
    isDragging = false;
});

// Mouse Scroll Zoom
viewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    const rect = viewport.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    
    const zoomFactor = e.deltaY < 0 ? 1.15 : 1 / 1.15;
    const oldScale = scale;
    
    scale *= zoomFactor;
    
    // Apply zoom centered at mouse cursor
    scale = Math.max(0.15, Math.min(5.0, scale));
    panX = mx - (mx - panX) * (scale / oldScale);
    panY = my - (my - panY) * (scale / oldScale);
    
    applyTransform();
}, { passive: false });

/**
 * Touch Gestures (Mobile Pan/Pinch Zoom)
 */
viewport.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
        isDragging = true;
        isPinching = false;
        startX = e.touches[0].clientX - panX;
        startY = e.touches[0].clientY - panY;
        clickStartX = e.touches[0].clientX;
        clickStartY = e.touches[0].clientY;
    } else if (e.touches.length === 2) {
        isDragging = false;
        isPinching = true;
        initialScale = scale;
        initialPanX = panX;
        initialPanY = panY;
        
        initialPinchDist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
        );
        
        pinchMidX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        pinchMidY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        
        const rect = viewport.getBoundingClientRect();
        pinchMidX -= rect.left;
        pinchMidY -= rect.top;
    }
}, { passive: true });

viewport.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches.length === 1) {
        panX = e.touches[0].clientX - startX;
        panY = e.touches[0].clientY - startY;
        applyTransform();
    } else if (isPinching && e.touches.length === 2) {
        const dist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
        );
        
        if (initialPinchDist > 0) {
            const factor = dist / initialPinchDist;
            const targetScale = initialScale * factor;
            
            const oldScale = scale;
            scale = Math.max(0.15, Math.min(5.0, targetScale));
            
            panX = pinchMidX - (pinchMidX - initialPanX) * (scale / initialScale);
            panY = pinchMidY - (pinchMidY - initialPanY) * (scale / initialScale);
            
            applyTransform();
        }
    }
}, { passive: true });

viewport.addEventListener('touchend', (e) => {
    if (e.touches.length === 0) {
        isDragging = false;
        isPinching = false;
    } else if (e.touches.length === 1) {
        isPinching = false;
        isDragging = true;
        startX = e.touches[0].clientX - panX;
        startY = e.touches[0].clientY - panY;
    }
}, { passive: true });

/**
 * Filter Engine - Dim Non-matching plots
 */
function applyFilters() {
    const facingVal = filterFacing.value;
    const cornerVal = filterCorner.value;
    const statusVal = filterStatus.value;
    const minArea = parseInt(filterMinArea.value) || 0;
    const maxArea = parseInt(filterMaxArea.value) || 99999;
    const demandVal = filterDemand.value;
    
    const polygons = overlay.querySelectorAll('.plot-polygon');
    
    polygons.forEach(poly => {
        const id = poly.getAttribute('data-plot-id');
        const data = PLOT_DATABASE[id];
        if (!data) return;
        
        let matches = true;
        
        if (facingVal && data.facing !== facingVal) matches = false;
        
        if (cornerVal) {
            const isCornerPlot = data.is_corner;
            if (cornerVal === 'yes' && !isCornerPlot) matches = false;
            if (cornerVal === 'no' && isCornerPlot) matches = false;
        }
        
        if (statusVal && data.status !== statusVal) matches = false;
        if (data.area_sqft < minArea || data.area_sqft > maxArea) matches = false;
        
        if (demandVal && data.demand_level !== demandVal) matches = false;
        
        if (matches) {
            poly.classList.remove('filtered-out');
            poly.style.pointerEvents = 'auto';
        } else {
            poly.classList.add('filtered-out');
            poly.style.pointerEvents = 'none';
            // If the filtered plot is currently selected, deselect it
            if (selectedPlotId === id) {
                selectPlot(id);
            }
        }
    });
}

// Attach filter listeners
[filterFacing, filterCorner, filterStatus, filterMinArea, filterMaxArea, filterDemand].forEach(elem => {
    elem.addEventListener('change', applyFilters);
    elem.addEventListener('input', applyFilters);
});

/**
 * Search Auto-Focus Logic
 */
searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    searchResults.innerHTML = '';
    
    if (!query) {
        searchResults.classList.remove('active');
        return;
    }
    
    // Find matching plot numbers (prefix matching)
    const matches = Object.keys(PLOT_DATABASE).filter(id => id.startsWith(query));
    
    if (matches.length > 0) {
        searchResults.classList.add('active');
        matches.slice(0, 5).forEach(id => {
            const data = PLOT_DATABASE[id];
            const div = document.createElement('div');
            div.className = 'search-result-item';
            div.innerHTML = `
                <span style="font-weight: 700;">Plot ${id}</span>
                <span style="font-size: 11px; color: #cbd5e1;">${data.status} | ${data.area_sqft} sqft | ${data.facing}</span>
            `;
            div.addEventListener('click', () => {
                searchInput.value = id;
                searchResults.classList.remove('active');
                selectPlot(id, true);
            });
            searchResults.appendChild(div);
        });
    } else {
        searchResults.classList.remove('active');
    }
});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const val = searchInput.value.trim();
        if (PLOT_DATABASE[val]) {
            searchResults.classList.remove('active');
            selectPlot(val, true);
        }
    }
});

// Close search suggestions on outer clicks
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove('active');
    }
});

/**
 * Analytics Calculations & Rendering
 */
function initAnalytics() {
    const plots = Object.values(PLOT_DATABASE);
    const total = plots.length;
    
    const available = plots.filter(p => p.status === 'Available').length;
    const reserved = plots.filter(p => p.status === 'Reserved').length;
    const sold = plots.filter(p => p.status === 'Sold').length;
    
    const avgArea = Math.round(plots.reduce((sum, p) => sum + p.area_sqft, 0) / total);
    
    // Highest demand
    const sortedByDemand = [...plots].sort((a, b) => b.demand_score - a.demand_score);
    const highestDemandPlot = sortedByDemand[0].id;
    
    // Most Premium
    // Large sizes facing East are highest premium
    const sortedPremium = [...plots].sort((a, b) => {
        const scoreA = a.area_sqft + (a.facing === 'East' ? 1000 : 0) + (a.is_corner ? 500 : 0);
        const scoreB = b.area_sqft + (b.facing === 'East' ? 1000 : 0) + (b.is_corner ? 500 : 0);
        return scoreB - scoreA;
    });
    const mostPremiumPlot = sortedPremium[0].id;
    
    const eastFacingCount = plots.filter(p => p.facing === 'East').length;
    const cornerCount = plots.filter(p => p.is_corner).length;
    
    statTotal.textContent = total;
    statAvailable.textContent = available;
    statReserved.textContent = reserved;
    statSold.textContent = sold;
    statAvgArea.textContent = `${avgArea} sq.ft`;
    statHighDemand.textContent = `Plot ${highestDemandPlot} (${sortedByDemand[0].demand_score}/100)`;
    statPremium.textContent = `Plot ${mostPremiumPlot}`;
    statEastFacing.textContent = eastFacingCount;
    statCornerCount.textContent = cornerCount;
}

/**
 * Comparison Drawer & Modal Logic
 */
function updateCompareButtonState(id) {
    if (comparisonList.includes(id)) {
        btnAddToCompare.textContent = 'Remove from Compare';
        btnAddToCompare.classList.add('remove-state');
    } else {
        btnAddToCompare.textContent = 'Add to Compare';
        btnAddToCompare.classList.remove('remove-state');
    }
}

btnAddToCompare.addEventListener('click', () => {
    if (!selectedPlotId) return;
    
    const id = selectedPlotId;
    const idx = comparisonList.indexOf(id);
    
    if (idx > -1) {
        // Remove
        comparisonList.splice(idx, 1);
    } else {
        // Add (limit to 3)
        if (comparisonList.length >= 3) {
            alert('You can select a maximum of 3 plots for comparison.');
            return;
        }
        comparisonList.push(id);
    }
    
    updateCompareButtonState(id);
    updateComparisonTray();
});

function updateComparisonTray() {
    comparisonCount.textContent = comparisonList.length;
    
    if (comparisonList.length > 0) {
        comparisonTray.classList.add('active');
    } else {
        comparisonTray.classList.remove('active');
    }
}

btnOpenCompareModal.addEventListener('click', () => {
    if (comparisonList.length === 0) return;
    
    renderComparisonTable();
    comparisonModal.classList.add('active');
});

closeCompareModal.addEventListener('click', () => {
    comparisonModal.classList.remove('active');
});

comparisonModal.addEventListener('click', (e) => {
    if (e.target === comparisonModal) {
        comparisonModal.classList.remove('active');
    }
});

btnClearCompare.addEventListener('click', () => {
    comparisonList = [];
    updateComparisonTray();
    if (selectedPlotId) {
        updateCompareButtonState(selectedPlotId);
    }
    comparisonModal.classList.remove('active');
});

function renderComparisonTable() {
    comparisonTableBody.innerHTML = '';
    
    // Gather details for selected plots
    const compareData = comparisonList.map(id => PLOT_DATABASE[id]);
    
    // Determine the best plot based on demand score
    let bestPlotId = null;
    let maxScore = -1;
    
    compareData.forEach(p => {
        if (p.demand_score > maxScore) {
            maxScore = p.demand_score;
            bestPlotId = p.id.toString();
        }
    });
    
    const rows = [
        { label: 'Plot Number', key: 'id', prefix: 'Plot ' },
        { label: 'Availability', key: 'status', badge: true },
        { label: 'Area (Sq.Ft)', key: 'area_sqft', suffix: ' sq.ft' },
        { label: 'Area (Sq.M)', key: 'area_sqm', suffix: ' sq.m' },
        { label: 'Dimensions', key: 'dims' },
        { label: 'Facing Direction', key: 'facing' },
        { label: 'Corner / Normal', key: 'corner' },
        { label: 'Adjacent Road Width', key: 'road_width' },
        { label: 'Community Profile', key: 'community_profile' },
        { label: 'Neighbourhood Score', key: 'neighbourhood_score', suffix: ' / 10' },
        { label: 'Demand Score', key: 'demand_score', suffix: ' / 100', highlightValue: true }
    ];
    
    rows.forEach(row => {
        const tr = document.createElement('tr');
        
        // Label header cell
        const th = document.createElement('th');
        th.textContent = row.label;
        tr.appendChild(th);
        
        // Plot cells
        compareData.forEach(p => {
            const td = document.createElement('td');
            const isBest = p.id.toString() === bestPlotId;
            
            if (isBest) {
                td.classList.add('best-plot-cell');
            }
            
            let val = p[row.key];
            
            // Format rendering
            if (row.prefix) val = row.prefix + val;
            if (row.suffix) val = val + row.suffix;
            
            if (row.badge) {
                td.innerHTML = `<span class="status-badge status-${val.toLowerCase()}">${val}</span>`;
            } else if (row.key === 'id') {
                td.innerHTML = `<strong>${val}</strong> ${isBest ? '<span class="best-badge">Best Match</span>' : ''}`;
            } else if (row.highlightValue) {
                td.innerHTML = `<span class="compare-score-badge ${isBest ? 'score-highest' : ''}">${val}</span>`;
            } else {
                td.textContent = val;
            }
            
            tr.appendChild(td);
        });
        
        comparisonTableBody.appendChild(tr);
    });
}

/**
 * Control Dock Listeners
 */
zoomInBtn.addEventListener('click', () => {
    const mx = viewport.clientWidth / 2;
    const my = viewport.clientHeight / 2;
    scale *= 1.30;
    scale = Math.min(5.0, scale);
    panX = mx - (mx - panX) * 1.3;
    panY = my - (my - panY) * 1.3;
    applyTransform();
});

zoomOutBtn.addEventListener('click', () => {
    const mx = viewport.clientWidth / 2;
    const my = viewport.clientHeight / 2;
    const oldScale = scale;
    scale /= 1.30;
    scale = Math.max(0.15, scale);
    panX = mx - (mx - panX) * (scale / oldScale);
    panY = my - (my - panY) * (scale / oldScale);
    applyTransform();
});

zoomResetBtn.addEventListener('click', () => {
    fitToViewport();
});

zoomFitBtn.addEventListener('click', () => {
    fitToViewport();
});

fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        viewport.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
});

// Adjust map canvas zoom on layout resize
window.addEventListener('resize', () => {
    fitToViewport();
});

closeDrawerBtn.addEventListener('click', () => {
    if (selectedPlotId) {
        selectPlot(selectedPlotId); // Toggle selection off
    }
});

// Core App Initialization
initOverlay();
initAnalytics();

if (layoutImage.complete) {
    fitToViewport();
} else {
    layoutImage.addEventListener('load', fitToViewport);
}
