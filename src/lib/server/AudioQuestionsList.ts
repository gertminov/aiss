import {AudioQuestion} from "$lib/data/AudioQuestion";


export const QuestionsWithMetaphors = [
    AudioQuestion.generateWithMetaphors({
        id: "big_small",
        option1: "Groß",
        option2: "Klein",
        answer1: {
            id: "big",
            audioURL: "big-small/combined/bs-big.mp3"
        },
        answer2: {
            id: "small",
            audioURL: "big-small/combined/bs-small.mp3"
        },
        desciption: "Big: Low pitch, high volume, reverb.\nSmall: High pitch, low volume, no reverb",
        metaphors: [
            {id: "much-little", option1: "Viel", option2: "Wenig"},
            {id: "powerful-powerless", option1: "Kraftvoll", option2: "Kraftlos"},
            {id: "more-less", option1: "Mehr", option2: "Weniger"},
            {id: "dominant-submissive", option1: "Dominant", option2: "Unterwürfig"},
            {id: "creative-logic", option1: "Kreativ", option2: "Logisch"},
            {id: "important-unimportant", option1: "Wichtig", option2: "Unwichtig"}
        ]
    }),
    AudioQuestion.generateWithMetaphors({
        option1: "Hell",
        option2: "Dunkel",
        answer1: {
            id: "bright",
            audioURL: "bright-dark/birght-dark-noise/bd-bright-noise.mp3"
        },
        answer2: {
            id: "dark",
            audioURL: "bright-dark/birght-dark-noise/bd-dark-noise.mp3"
        },
        desciption: "Bright: White Noise. lots of high frequencies.\nDark: Brown Noise, lots of low frequencies",
        metaphors: [
            {id: "happy-sad", option1: "Fröhlich", option2: "Traurig"},
            {id: "good-bad", option1: "Gut", option2: "Schlecht"},
        ]
    }),
    AudioQuestion.generateWithMetaphors({
        option1: "Sauber",
        option2: "Dreckig",
        answer1: {
            id: "clean",
            audioURL: "clean-dirty/sine-fm/cd-clean.mp3"
        },
        answer2: {
            id: "dirty",
            audioURL: "clean-dirty/sine-fm/cd-dirty-fm.mp3"
        },
        desciption: "Clean: Sine wave.\nDirty: Sine frequency modulated (distroted)",
        metaphors: [
            {id: "moral-imoral", option1: "Moralisch", option2: "Unmoralisch"}
        ]
    }),
    AudioQuestion.generateWithMetaphors({
        option1: "Hart",
        option2: "Weich",
        answer1: {
            id: "hard",
            audioURL: "hard-soft/fast-slow-adsr/hs-hard.mp3"
        },
        answer2: {
            id: "soft",
            audioURL: "hard-soft/fast-slow-adsr/hs-soft.mp3"
        },
        desciption: "Hard: Fast attack, fast decay, fast release.\nSoft: Slow attack, slow decay, slow release",
        metaphors: [
            {id: "stressful-relaxing", option1: "Stressig", option2: "Entspannt"},
            {id: "abrupt-continuous", option1: "Abrupt", option2: "Fortlaufend"},
            {id: "pleasant-unpleasant", option1: "Angenehm", option2: "Unangenehm"}
        ]
    }),
    AudioQuestion.generateWithMetaphors({
        option1: "Schwer",
        option2: "Leicht",
        answer1: {
            id: "heavy",
            audioURL: "heavy-light/808-plug/hl-heavy-sine-noise.mp3"
        },
        answer2: {
            id: "light",
            audioURL: "heavy-light/808-plug/hl-light-sine.mp3"
        },
        desciption: "Heavy: Low pitch sine wave hit.\nLight: High pitch pluck chord",
        metaphors: [
            {id: "happy-sad", option1: "Traurig", option2: "Fröhlich"},
            {id: "problematic-unproblematic", option1: "Problematisch", option2: "Unproblematisch"},
            {id: "complicated-simple", option1: "Kompliziert", option2: "Unkompliziert"}
            // {id: "effort-no_effort", option1: "Beschwerlich", option2: "Unbeschwert"}
        ]
    }),
    AudioQuestion.generateWithMetaphors({
        option1: "Zusammengehörig",
        option2: "Nicht Zusammengehörig",
        answer1: {
            id: "different",
            audioURL: "matching-nonmatching/different-same-sound/mn-difference.mp3"
        },
        answer2: {
            id: "matching",
            audioURL: "matching-nonmatching/different-same-sound/mn-same-sine.mp3"
        },
        desciption: "Matching: Same sine Pulse four times.\nNonMatching: Sine, Rhodes, Synth Flute, Saw, Saw Based Synth Bass",
        metaphors: [
            {id: "excited-calm", option1: "Aufgeregt", option2: "Ruhig"}
        ]
    }),
    AudioQuestion.generateWithMetaphors({
        option1: "Nah",
        option2: "Fern",
        answer1: {
            id: "far",
            audioURL: "near-far/nf-far.mp3"
        },
        answer2: {
            id: "near",
            audioURL: "near-far/nf-near.mp3"
        },
        desciption: "Far: Reverb, low volume.\nNear: No Reverb, high volume",
        metaphors: [
            {id: "important-unimportant", option1: "Wichtig", option2: "Unwichtig"},
            {id: "present-past", option1: "Gegenwart", option2: "Vergangenheit"}
        ],
        nach: true
    }),
    AudioQuestion.generateWithMetaphors({
        option1: "Glatt",
        option2: "Rau",
        answer1: {
            id: "rough",
            audioURL: "smooth-rough/smooth-chopped/sr-rough.mp3"
        },
        answer2: {
            id: "smooth",
            audioURL: "smooth-rough/smooth-chopped/sr-smooth.mp3"
        },
        desciption: "Smooth: Simple smooth chrods,.\nRough: complex jumpy melody, derived from the smooth Melo. using Abletons Warp feature in beat mode, adding distortion and boosting the Transients",
        metaphors: [
            {id: "boring-dangerous", option1: "Langweilig", option2: "Gefährlich"},
            {id: "problematic-unproblematic", option1: "Problematisch", option2: "Unproblematisch"},
            {id: "pleasant-unpleasant", option1: "Angenehm", option2: "Unangenehm"}
        ]
    }),
    AudioQuestion.generateWithMetaphors({
        option1: "Gerade",
        option2: "Krumm",
        answer1: {
            id: "crooked",
            audioURL: "straight-crooked/sc-bendy-pitch.mp3"
        },
        answer2: {
            id: "straight",
            audioURL: "straight-crooked/sc-straight.mp3"
        },
        desciption: "Straight: Sine Tone that holds the same pitch throughout the whole sample,.\nCrooked: Sine Tone that changes pitch",
        metaphors: [
            {id: "moral-imoral", option1: "Moralisch", option2: "Unmoralisch"},
            {id: "good-evil", option1: "Gut", option2: "Böse"}
        ]
    }),
    AudioQuestion.generateWithMetaphors({
        option1: "Unten",
        option2: "Oben",
        answer1: {
            id: "down",
            audioURL: "up-down/ud-down.mp3"
        },
        answer2: {
            id: "up",
            audioURL: "up-down/ud-up.mp3"
        },
        desciption: "Up: Sine Tone that starts at a low pitch and goes up,.\nDown: Sine Tone that starts at a high pitch and goes down",
        metaphors: [
            {id: "more-less", option1: "Mehr", option2: "Weniger"},
            {id: "good-bad", option1: "Gut", option2: "Schlecht"},
        ],
        nach: true
    }),
    AudioQuestion.generateWithMetaphors({
        option1: "Warm",
        option2: "Kalt",
        answer1: {
            id: "cold",
            audioURL: "warm-cold/chord-plug/wc-cold-sound.mp3"
        },
        answer2: {
            id: "warm",
            audioURL: "warm-cold/chord-plug/wc-warm-sound.mp3"
        },
        desciption: "Warm: rhodes piano, lots of saturation, low slow chords.\nCold: high, compressed, reverby metallic sounds, high short notes",
        metaphors: [
            {id: "emotional-unemotional", option1: "Emotional", option2: "Emotionslos"},
            {id: "angry-calm", option1: "Wütend", option2: "Ruhig"},
            // {id: "red-blue", option1: "Blau", option2: "Rot"}
        ]
    }),
    AudioQuestion.generateWithMetaphors({
        option1: "Zentral",
        option2: "Peripher",
        answer1: {
            id: "center",
            audioURL: "center-perifery/diffuse_pan-mono/cp-center.mp3"
        },
        answer2: {
            id: "periphery",
            audioURL: "center-perifery/diffuse_pan-mono/cp-perifery.mp3"
        },
        metaphors: [
            {id: "important-unimportant", option1: "Wichtig", option2: "Unwichtig"}
        ],
        desciption: "Center: Sine Pulse,Mono.\nPeriphery: Sine Pulse, random panning, Reverb"
    }),


]
export const AudioQuestions = [
    AudioQuestion.generate({
        option1: "Langsam",
        option2: "Schnell",
        answer1: {
            id: "fast",
            audioURL: "fast-slow/8th-16th/fs-fast-note.mp3"
        },
        answer2: {
            id: "slow",
            audioURL: "fast-slow/8th-16th/fs-slow-note.mp3"
        },
        desciption: "Slow: Sine Pulse, 4th notes.\nFast: Sine Pulse, 16th notes"
    }),
    AudioQuestion.generate({
        option1: "Vereinigen",
        option2: "Auseinandergehend",
        answer1: {
            id: "diverging",
            audioURL: "merging/me-diverging.mp3"
        },
        answer2: {
            id: "merging",
            audioURL: "mathing-nonmatching/different-same-sound/mn-same-sine.mp3"
        },
        desciption: "Merging: A Chord, all notes a slightly (500ct) out of tune and get automated to be in tune.\nDiverging: A Chord all notes are in tune and slowly start to detune",
        nach: true
    }),
    AudioQuestion.generate({
        option1: "Ganz",
        option2: "Aufgeteilt",
        answer1: {
            id: "part",
            audioURL: "part-whole/ph-part.mp3"
        },
        answer2: {
            id: "whole",
            audioURL: "part-whole/ph-whole.mp3"
        },
        desciption: "Part: Melody, Bass and Chrods played after each other.\nWhole: Melody, Bass and Chords played at the same Time"
    }),
]

const TutorialQuestion: AudioQuestion = AudioQuestion.generate({
    answer1: {id: "wavy", audioURL: "part-whole/ph-whole.mp3"  },
    answer2: {id: "spicky", audioURL:"part-whole/ph-whole.mp3" },
    option1: "Gewellt",
    option2: "Gezackt",
    desciption: "noope"
})

export const AudioQuestionsList: AudioQuestion[] = [
    // TutorialQuestion,
    ...QuestionsWithMetaphors.flat(),
    ...AudioQuestions
]
