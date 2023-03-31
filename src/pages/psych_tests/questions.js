const rwa_strings = require('./rwa.json')
const mrs_strings = require('./mrs.json')
const srs_strings = require('./srs.json')

const nine_scale = [
    'Very Strongly Disagree',
    'Strongly Disagree',
    'Moderately Disagree',
    'Slightly Disagree',
    'Exactly Neutral',
    'Slightly Agree',
    'Moderately Agree',
    'Strongly Agree',
    'Very Strongly Agree',
]

const four_scale = [
    'Strongly Agree',
    'Somewhat Agree',
    'Somewhat Disagree',
    'Strongly Disagree',
]

export const RWA = {
    topic: 'Right Wing Authoritarianism',
    max_score: 240,
    scored: 30,
    questions: [
        {
            question: rwa_strings.q01,
            choices: nine_scale,
            scoring: 'None'
        },
        {
            question: rwa_strings.q02,
            choices: nine_scale,
            scoring: 'None'
        },
        {
            question: rwa_strings.q03,
            choices: nine_scale,
            scoring: 'None'
        },
        {
            question: rwa_strings.q04,
            choices: nine_scale,
            scoring: 'None'
        },
        {
            question: rwa_strings.q05,
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: rwa_strings.q06,
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: rwa_strings.q07,
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: rwa_strings.q08,
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: rwa_strings.q09,
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: rwa_strings.q10,
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: rwa_strings.q11,
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: rwa_strings.q12,
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: rwa_strings.q13,
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: rwa_strings.q14,
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: rwa_strings.q15,
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: rwa_strings.q16,
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: rwa_strings.q17,
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: rwa_strings.q18,
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: rwa_strings.q19,
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: rwa_strings.q20,
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: rwa_strings.q21,
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: rwa_strings.q22,
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: rwa_strings.q23,
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: rwa_strings.q24,
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: rwa_strings.q25,
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: rwa_strings.q26,
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: rwa_strings.q27,
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: rwa_strings.q28,
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: rwa_strings.q29,
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: rwa_strings.q30,
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: rwa_strings.q31,
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: rwa_strings.q32,
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: rwa_strings.q33,
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: rwa_strings.q34,
            choices: nine_scale,
            scoring: 'Ascend9'
        },
    ],
    info: rwa_strings.info,
    img_credit: rwa_strings.image,
    citation: rwa_strings.citation,
    img_explanation: rwa_strings.image_ex,
}

export const MRS = {
    topic: 'Modern Racism Scale',
    max_score: 56,
    scored: 7,
    questions: [
        {
            question: mrs_strings.q01,
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: mrs_strings.q02,
            choices: nine_scale,
            scoring: 'Ascend9',
        },
        {
            question: mrs_strings.q03,
            choices: nine_scale,
            scoring: 'Ascend9',
        },
        {
            question: mrs_strings.q04,
            choices: nine_scale,
            scoring: 'Ascend9',
        },
        {
            question: mrs_strings.q05,
            choices: nine_scale,
            scoring: 'Ascend9',
        },
        {
            question: mrs_strings.q06,
            choices: nine_scale,
            scoring: 'Ascend9',
        },
        {
            question: mrs_strings.q07,
            choices: nine_scale,
            scoring: 'Ascend9',
        },
    ],
    info: mrs_strings.info,
    img_credit: mrs_strings.image,
    citation: mrs_strings.citation,
    img_explanation: mrs_strings.image_ex,
}

export const SRS = {
    topic: 'Sybmolic Racism Scale',
    max_score: 8,
    scored: 8,
    questions: [
        {
            question: srs_strings.q01,
            choices: four_scale,
            scoring: 'Descend4',
        },
        {
            question: srs_strings.q02,
            choices: four_scale,
            scoring: 'Descend4'
        },
        {
            question: srs_strings.q03,
            choices: ['Trying to push very much too fast', 'Going too slowly', 'Moving at about the right speed'],
            scoring: 'HiLoMid3'
        },
        {
            question: srs_strings.q04,
            choices: ['All of it', 'Most', 'Some', 'Not much at all'],
            scoring: 'SRSQ4'
        },
        {
            question: srs_strings.q05,
            choices: ['A lot', 'Some', 'Just a little', 'None at all'],
            scoring: 'SRSQ5'
        },
        {
            question: srs_strings.q06,
            choices: four_scale,
            scoring: 'Ascend4'
        },
        {
            question: srs_strings.q07,
            choices: four_scale,
            scoring: 'Ascend4'
        },
        {
            question: srs_strings.q08,
            choices: four_scale,
            scoring: 'Descend4'
        }
    ],
    info: srs_strings.info,
    img_credit: srs_strings.image,
    citation: srs_strings.citation,
    img_explanation: srs_strings.image_ex,
}