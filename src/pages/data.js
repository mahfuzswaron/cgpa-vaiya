export const questions_options = [
    {
        "question": "স্বাগতম! বলো, কত সিজিপিএ পেতে চাও?",
        "response_type": "text-input",
        "querry": "target"
    },
    {
        "question": "তোমার প্রবিধান কত?",
        "response_type": "option",
        "querry": "scale",
        "options": [
            {
                "label": "2016",
                "value": "diploma_2016"
            }
            ,
            {
                "label": "2022",
                "value": "diploma_2022"
            }
        ],
    },
    {
        "question": "তুমি কোন সেমিস্টারে পড়ো?",
        "response_type": "option",
        "querry": "semester",
        "options": [
            { "label": '1st', "value": 1 },
            { "label": '2nd', "value": 2 },
            { "label": '3rd', "value": 3 },
            { "label": '4th', "value": 4 },
            { "label": '5th', "value": 5 },
            { "label": '6th', "value": 6 },
            { "label": '7th', "value": 7 },
            { "label": '8th', "value": 8 }
        ]
        ,
    },
    {
        "question": "পূর্ববর্তী রেজাল্ট বলো",
        "response_type": "option-input",
        "querry": "previous_result",
        "option_input_keys": ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th']
    },
];