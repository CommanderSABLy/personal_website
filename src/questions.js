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
    questions: [
        {
            question: 'Life imprisonment is justified for certain crimes.',
            choices: nine_scale,
            scoring: 'None'
        },
        {
            question: 'Women should have to promise to obey their husbands when they get married.',
            choices: nine_scale,
            scoring: 'None'
        },
        {
            question: 'The established authorities in our country are usually smarter, better informed, and more competent than others are, and the people can rely on them.',
            choices: nine_scale,
            scoring: 'None'
        },
        {
            question: 'It is important to protect fully the rights of radicals and deviants.',
            choices: nine_scale,
            scoring: 'None'
        },
        {
            question: 'Our country desperately needs a mighty leader who will do what has to be done to destroy the radical new ways and sinfulness that are ruining us.',
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: 'Gays and lesbians are just as healthy and moral as anybody else.',
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: 'Our country will be great if we honor the ways of our forefathers, do what the authorities tell us to do, and get rid of the rotten apples who are ruining everything.',
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: 'Atheists and others who have rebelled against established religion are no doubt every bit as good and virtuous as those who attend church regularly.',
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: 'The real keys to the good life are obedience, discipline, and sticking to the straight and narrow.',
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: 'A lot of our rules regarding modesty and sexual behavior are just customs which are not necessarily any better or holier than those which other people follow.',
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: 'There are many radical, immoral people in our country today who are trying to ruin it for their own godless purposes, whom the authorities should put out of action.',
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: 'It is always better to trust the judgment of the proper authorities in government and religion than to listen to the noisy rabble-rousers in our society who are trying to create doubt in people\'s minds.',
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: 'There is absolutely nothing wrong with nudist camps.',
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: 'There is no one right way to live your life. Everybody has to create their own way.',
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: 'Our country will be destroyed someday if we do not smash the perversions eating away at our moral fiber and traditional beliefs.',
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: 'It\'s a mistake to stick strictly to the straight and narrow in life, for you\'ll miss a lot of interesting people from quite different backgrounds who can change you, and some of the best experiences you can have.',
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: 'The situation in our country is getting so serious, the strongest methods would be justified if they eliminated the troublemakers and got us back to our true path.',
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: 'It would be best for everyone if the proper authorities censored magazines so that people could not get their hands on trashy and disgusting material.',
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: 'Everyone should have their own lifestyle, religious beliefs, and sexual preferences, even if it makes them different from everyone else.',
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: 'A woman\'s place should be wherever she wants to be. The days when women are submissive to their husbands and social conventions belong strictly in the past.',
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: 'What our country really needs is a strong, determined leader who will crush evil and take us back to our true path.',
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: 'People should pay less attention to the Bible and the other old traditional forms of religious guidance and instead develop their own personal standards of what is moral and immoral.',
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: 'Enough is enough! If the loafers, deviants, and troublemakers won\'t shape up, then they should be severely disciplined and taught a lesson they\'ll never forget.',
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: 'Our country needs freethinkers who will have the courage to defy traditional ways, even if this upsets many people.',
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: 'There is nothing wrong with premarital sexual intercourse.',
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: 'It may be considered old-fashioned by some, but having a normal, proper appearance is still the mark of a gentleman and, especially, a lady.',
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: 'It is wonderful that young people today have greater freedom to protest against things they don\'t like and to make their own rules to govern their behavior.',
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: 'What our country really needs, instead of more civil rights, is a good stiff dose of law and order.',
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: 'Government, judges, and the police should never be allowed to censor books.',
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: 'Obedience and respect for authority are the most important virtues children should learn.',
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: 'We should treat protesters and radicals with open arms and open minds, since new ideas are the lifeblood of progressive change.',
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: 'Once our government leaders and the authorities condemn the dangerous elements in our society, it will be the duty of every patriotic citizen to help stomp out the rot that is poisoning our country from within.',
            choices: nine_scale,
            scoring: 'Ascend9'
        },
        {
            question: 'Rules about being well-behaved and respectable should be changed in favor of greater freedom and new ways of living.',
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: 'The facts on crime, sexual immorality, and recent public disorders all show we have to crack down harder on deviant groups and troublemakers if we are going to save our moral standards and preserve law and order.',
            choices: nine_scale,
            scoring: 'Ascend9'
        },
    ],
    info: 'The Right Wing Authoritarianism Test is about whether or not you are a fascist and comes from the 60s. You can see this in Question something when it asks about "More civil rights." Now don\'t be a fascist.',
    img_credit: 'Image credit: citation',
    citation: 'Test credit: citation'
}

export const MRS = {
    topic: 'Modern Racism Scale',
    max_score: 56,
    questions: [
        {
            question: 'It is easy to understand the anger of black people in America.',
            choices: nine_scale,
            scoring: 'Descend9'
        },
        {
            question: 'Blacks have more influence upon school desegregation plans that they ought to have.',
            choices: nine_scale,
            scoring: 'Ascend9',
        },
        {
            question:'Blacks are getting too demanding in their push for equal rights.',
            choices: nine_scale,
            scoring: 'Ascend9',
        },
        {
            question:'Over the past few years blacks have gotten more economically than they deserve.',
            choices: nine_scale,
            scoring: 'Ascend9',
        },
        {
            question: 'Over the past few years the government and news media have shown more respect to blacks than they deserve.',
            choices: nine_scale,
            scoring: 'Ascend9',
        },
        {
            question: 'Blacks should not push themselves where they\'re not wanted.',
            choices: nine_scale,
            scoring: 'Ascend9',
        },
        {
            question: 'Discrimination against blacks is no longer a problem in the United States.',
            choices: nine_scale,
            scoring: 'Ascend9',
        },
    ],
    info: 'The Modern Racism Scale is actually a bit old so it isn\'t particularly modern anymore. It should be obvious what to say as a non-racist.',
    img_credit: 'Image credit: citation',
    citation: 'Test credit: citation'
}

export const SRS = {
    topic: 'Sybmolic Racism Scale',
    max_score: 8,
    questions: [
        {
            question: 'It\'s really a matter of some people not trying hard enough; if blacks would only try harder they could be just as well off as whites.',
            choices: four_scale,
            scoring: 'Descend4',
        },
        {
            question: 'Irish, Italian, Jewish and many other minorities overcame prejudice and worked their way. Blacks should do the same.',
            choices: four_scale,
            scoring: 'Descend4'
        },
        {
            question: 'Some say that black leaders have been trying to push too fast. Others feel that they haven\'t pushed fast enough. What do you think?',
            choices: ['Trying to push very much too fast', 'Going too slowly', 'Moving at about the right speed'],
            scoring: 'HiLoMid3'
        },
        {
            question: 'How much of the racial tension that exists in the United States today do you think blacks are responsible for creating?',
            choices: ['All of it', 'Most', 'Some', 'Not much at all'],
            scoring: 'SRSQ4'
        },
        {
            question: 'How much discrimination against blacks do you feel there is in the United States today, limiting their chances to get ahead?',
            choices: ['A lot', 'Some', 'Just a little', 'None at all'],
            scoring: 'SRSQ5'
        },
        {
            question: 'Generations of slavery and discrimination have created conditions that make it difficult for blacks to work their way out of the lower class.',
            choices: four_scale,
            scoring: 'Ascend4'
        },
        {
            question: 'Over the past few years, blacks have gotten less than they deserve.',
            choices: four_scale,
            scoring: 'Ascend4'
        },
        {
            question: 'Over the past few years, blacks have gotten more economically than they deserve.',
            choices: four_scale,
            scoring: 'Descend4'
        }
    ],
    info: 'The Symbolic Racism Scale is the newer of the two racism tests, coming from 2002. It should still be obvious.',
    img_credit: 'Image credit: citation',
    citation: 'Test credit: citation'
}