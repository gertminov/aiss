import {AudioQuestion} from "$lib/data/AudioQuestion";


export const QuestionsWithMetaphors = [
    AudioQuestion.generateWithVariations({
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
        description: "Big: Low pitch, high volume, reverb.\nSmall: High pitch, low volume, no reverb",
        metaphors: [
            {id: "much-little", option1: "Viel", option2: "Wenig"},
            {id: "powerful-powerless", option1: "Kraftvoll", option2: "Kraftlos"},
            {id: "more-less", option1: "Mehr", option2: "Weniger"},
            {id: "dominant-submissive", option1: "Dominant", option2: "Unterwürfig"},
            {id: "creative-logic", option1: "Kreativ", option2: "Logisch"},
            {id: "important-unimportant", option1: "Wichtig", option2: "Unwichtig"}
        ],
        variants: [
            {
                answerURL1: "big-small/low-high/bs-big.mp3",
                answerURL2: "big-small/low-high/bs-small.mp3",
                description: "Big: Low pitch sine tone.\n Small: High pitch sine pulse."
            }
        ]
    }),
    AudioQuestion.generateWithVariations({
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
        description: "Bright: White Noise. lots of high frequencies.\nDark: Brown Noise, lots of low frequencies",
        metaphors: [
            {id: "happy-sad", option1: "Fröhlich", option2: "Traurig"},
            {id: "good-bad", option1: "Gut", option2: "Schlecht"},
        ],
        variants: [
            {
                answerURL1: "bright-dark/harmonic-high-cut/bd-bright.mp3",
                answerURL2: "bright-dark/harmonic-high-cut/bd-dark.mp3",
                description: "Bright: Major chord, sawtooth waves, boosted high frequencies.\nDark: Minor chord, sawtooth waves, lowered high frequencies"
            }
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
        description: "Clean: Sine wave.\nDirty: Sine frequency modulated (distroted)",
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
        description: "Hard: Fast attack, fast decay, fast release, 1/8th note pulse.\nSoft: Slow attack, slow decay, slow release, 1 bar chords",
        metaphors: [
            {id: "stressful-relaxing", option1: "Stressig", option2: "Entspannt"},
            {id: "abrupt-continuous", option1: "Abrupt", option2: "Fortlaufend"},
            {id: "pleasant-unpleasant", option1: "Unangenehm", option2: "Angenehm"}
        ]
    }),
    AudioQuestion.generateWithVariations({
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
        description: "Heavy: Low pitch sine wave hit.\nLight: High pitch pluck chord",
        metaphors: [
            {id: "happy-sad", option1: "Traurig", option2: "Fröhlich"},
            {id: "problematic-unproblematic", option1: "Problematisch", option2: "Unproblematisch"},
            {id: "complicated-simple", option1: "Kompliziert", option2: "Unkompliziert"}
            // {id: "effort-no_effort", option1: "Beschwerlich", option2: "Unbeschwert"}
        ],
        variants: [
            {
                answerURL1: "heavy-light/fast-slow/hl-heavy.mp3",
                answerURL2: "heavy-light/fast-slow/hl-light.mp3",
                description: "Heavy: Low pitch 1/4th notes.\nLight: High pitch 1/8th notes"
            }
        ]
    }),
    AudioQuestion.generateWithVariations({
        option1: "Zusammengehörig",
        option2: "Nicht Zusammengehörig",
        answer1: {
            id: "matching",
            audioURL: "matching-nonmatching/different-same-sound/mn-same-sine.mp3"
        },
        answer2: {
            id: "different",
            audioURL: "matching-nonmatching/different-same-sound/mn-difference.mp3"
        },
        description: "Matching: Same sine Pulse four times.\nDifferent: Sine, Rhodes, Synth Flute, Saw, Saw Based Synth Bass",
        metaphors: [
            {id: "excited-calm", option1: "Ruhig", option2: "Aufgeregt"}
        ],
        variants: [
            {
                answerURL1: "matching-nonmatching/harmonic-disharmonic/mn-matching.mp3",
                answerURL2: "matching-nonmatching/harmonic-disharmonic/mn-non-matching.mp3",
                description: "Matching: Base note and A chord arpeggio.\nDifferent: Base note and random notes not in the same key on top."
            },
            {
                answerURL1: "matching-nonmatching/repetition/mn-repetition.mp3",
                answerURL2: "matching-nonmatching/repetition/mn-difference.mp3",
                description: "Matching: The same chord sequence twice.\nDifferent: Two different chord sequences in different keys."
            }

        ]
    }),
    AudioQuestion.generateWithMetaphors({
        option1: "Nah",
        option2: "Fern",
        answer1: {
            id: "near",
            audioURL: "near-far/nf-near.mp3"
        },
        answer2: {
            id: "far",
            audioURL: "near-far/nf-far.mp3"
        },
        description: "Far: Reverb, low volume.\nNear: No Reverb, high volume",
        metaphors: [
            {id: "important-unimportant", option1: "Wichtig", option2: "Unwichtig"},
            {id: "present-past", option1: "Gegenwart", option2: "Vergangenheit"}
        ],
        nach: true
    }),
    AudioQuestion.generateWithVariations({
        option1: "Glatt",
        option2: "Rau",
        answer1: {
            id: "smooth",
            audioURL: "smooth-rough/smooth-chopped/sr-smooth.mp3"
        },
        answer2: {
            id: "rough",
            audioURL: "smooth-rough/smooth-chopped/sr-rough-dist.mp3"
        },
        description: "Smooth: Simple smooth chrods,.\nRough: complex jumpy melody, derived from the smooth Melo. using Abletons Warp feature in beat mode, adding distortion and boosting the Transients",
        metaphors: [
            {id: "boring-dangerous", option1: "Langweilig", option2: "Gefährlich"},
            {id: "problematic-unproblematic", option1: "Unproblematisch", option2: "Problematisch"},
            {id: "pleasant-unpleasant", option1: "Angenehm", option2: "Unangenehm"}
        ],
        variants: [
            {
                answerURL1: "smooth-rough/sine-distord/sr-rough.mp3",
                answerURL2: "smooth-rough/sine-distord/sr-smooth.mp3",
                description: "Smooth: Sine pulse. Rough: Heavily distorted saw pulse"
            }
        ]
    }),
    AudioQuestion.generateWithMetaphors({
        option1: "Gerade",
        option2: "Krumm",
        answer1: {
            id: "straight",
            audioURL: "straight-crooked/sc-straight.mp3"
        },
        answer2: {
            id: "crooked",
            audioURL: "straight-crooked/sc-bendy-pitch.mp3"
        },
        description: "Straight: Sine Tone that holds the same pitch throughout the whole sample,.\nCrooked: Sine Tone that changes pitch",
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
        description: "Up: Sine Tone that starts at a low pitch and goes up,.\nDown: Sine Tone that starts at a high pitch and goes down",
        metaphors: [
            {id: "more-less", option1: "Weniger", option2: "Mehr"},
            {id: "good-bad", option1: "Schlecht", option2: "Gut"},
        ],
        nach: true
    }),
    AudioQuestion.generateWithMetaphors({
        option1: "Warm",
        option2: "Kalt",
        answer1: {
            id: "warm",
            audioURL: "warm-cold/chord-plug/wc-warm-sound.mp3"
        },
        answer2: {
            id: "cold",
            audioURL: "warm-cold/chord-plug/wc-cold-sound.mp3"
        },
        description: "Warm: rhodes piano, lots of saturation, low slow chords.\nCold: high, compressed, reverby metallic sounds, high short notes",
        metaphors: [
            {id: "emotional-unemotional", option1: "Emotional", option2: "Emotionslos"},
            {id: "angry-calm", option1: "Wütend", option2: "Ruhig"},
            // {id: "red-blue", option1: "Blau", option2: "Rot"}
        ]
    }),
    AudioQuestion.generateWithVariations({
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
        description: "Center: Sine pulse,mono.\nPeriphery: Sine pulse, random panning, Reverb",
        variants: [
            {
                answerURL1:"center-perifery/random-mono/cp-center-mono.mp3",
                answerURL2: "center-perifery/random-mono/cp-perifery-random_pan.mp3",
                description: "Center: Sine pulse, mono.\nPeriphery: Sine pulse, random panning"
            }
        ]
    })


]
export const AudioQuestions = [
    AudioQuestion.generate({
        option1: "Langsam",
        option2: "Schnell",
        answer1: {
            id: "slow",
            audioURL: "fast-slow/8th-16th/fs-slow-note.mp3"
        },
        answer2: {
            id: "fast",
            audioURL: "fast-slow/8th-16th/fs-fast-note.mp3"
        },
        description: "Slow: Sine Pulse, 4th notes.\nFast: Sine Pulse, 16th notes"
    }),
    AudioQuestion.generate({
        option1: "Vereinigen",
        option2: "Auseinandergehend",
        answer1: {
            id: "merging",
            audioURL: "matching-nonmatching/different-same-sound/mn-same-sine.mp3"
        },
        answer2: {
            id: "diverging",
            audioURL: "merging/me-diverging.mp3"
        },
        description: "Merging: A Chord, all notes a slightly (500ct) out of tune and get automated to be in tune.\nDiverging: A Chord all notes are in tune and slowly start to detune",
        nach: true
    }),
    AudioQuestion.generate({
        option1: "Aufgeteilt",
        option2: "Ganz",
        answer1: {
            id: "part",
            audioURL: "part-whole/ph-part.mp3"
        },
        answer2: {
            id: "whole",
            audioURL: "part-whole/ph-whole.mp3"
        },
        description: "Part: Melody, Bass and Drums played after each other.\nWhole: Melody, Bass and Drums played at the same Time"
    }),
]

const TutorialQuestion: AudioQuestion = AudioQuestion.generate({
    answer1: {id: "wavy", audioURL: "part-whole/ph-whole.mp3"},
    answer2: {id: "spicky", audioURL: "part-whole/ph-whole.mp3"},
    option1: "Gewellt",
    option2: "Gezackt",
    description: "noope"
})

export const AudioQuestionsList: AudioQuestion[] = [
    // TutorialQuestion,
    ...QuestionsWithMetaphors.flat(),
    ...AudioQuestions
]
