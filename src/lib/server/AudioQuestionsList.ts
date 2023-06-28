import {AudioQuestion} from "$lib/data/AudioQuestion";


export const QuestionsWithMetaphors = [
    AudioQuestion.generate("big", "small", {
        schema: {
            big: "Groß",
            small: "Klein"
        },
        metaphors: [
            {id: "much-little", big: "Viel", small: "Wenig"},
            {id: "powerful-powerless", big: "Kraftvoll", small: "Kraftlos"},
            // {id: "more-less", big: "Mehr", small: "Weniger"},
            {id: "dominant-submissive", big: "Dominant", small: "Unterwürfig"},
            {id: "creative-logic", big: "Kreativ", small: "Logisch"},
            {id: "important-unimportant", big: "Wichtig", small: "Unwichtig"}
        ],
        audios: [
            {
                big: "combined/bs-big",
                small: "combined/bs-small",
                description: "Big: Low pitch, high volume, reverb.\nSmall: High pitch, low volume, no reverb"
            },
            {
                big: "low-high/bs-big",
                small: "low-high/bs-small",
                description: "Big: Low pitch sine tone.\n Small: High pitch sine pulse."
            }
        ]
    }),
    AudioQuestion.generate("bright", "dark", {
        schema: {
            bright: "Hell",
            dark: "Dunkel"
        },
        metaphors: [
            {id: "happy-sad", bright: "Fröhlich", dark: "Traurig"},
            {id: "good-bad", bright: "Gut", dark: "Schlecht"},
        ],
        audios: [
            // {
            //     bright: "birght-dark-noise/bd-bright-noise",
            //     dark: "birght-dark-noise/bd-dark-noise",
            //     description: "Bright: White Noise. lots of high frequencies.\nDark: Brown Noise, lots of low frequencies"
            // },
            {
                bright: "harmonic-high-cut/bd-bright",
                dark: "harmonic-high-cut/bd-dark",
                description: "Bright: Major chord, sawtooth waves, boosted high frequencies.\nDark: Minor chord, sawtooth waves, lowered high frequencies"
            }
        ]
    }),
    AudioQuestion.generate("clean", "dirty", {
        schema: {
            clean: "Sauber",
            dirty: "Dreckig"
        },
        metaphors: [
            {id: "moral-imoral", clean: "Moralisch", dirty: "Unmoralisch"}
        ],
        audios: [
            {
                clean: "sine-fm/cd-clean",
                dirty: "sine-fm/cd-dirty-fm",
                description: "Clean: Sine wave.\nDirty: Sine frequency modulated (distroted)"
            }
        ]
    }),
    AudioQuestion.generate("hard", "soft", {
        schema: {
            hard: "Hart",
            soft: "Weich"
        },
        metaphors: [
            {id: "stressful-relaxing", hard: "Stressig", soft: "Entspannt"},
            {id: "abrupt-continuous", hard: "Abrupt", soft: "Fortlaufend"},
            {id: "pleasant-unpleasant", hard: "Unangenehm", soft: "Angenehm"}
        ],
        audios: [
            {
                hard: "fast-slow-adsr/hs-hard", soft: "fast-slow-adsr/hs-soft",
                description: "Hard: Fast attack, fast decay, fast release, 1/8th note pulse.\nSoft: Slow attack, slow decay, slow release, 1 bar chords"
            }
        ]
    }),
    AudioQuestion.generate("heavy", "light", {
        schema: {
            heavy: "Schwer",
            light: "Leicht"
        },
        metaphors: [
            {id: "happy-sad", heavy: "Traurig", light: "Fröhlich"},
            {id: "problematic-unproblematic", heavy: "Problematisch", light: "Unproblematisch"},
            {id: "complicated-simple", heavy: "Kompliziert", light: "Unkompliziert"}
        ],
        audios: [
            {
                heavy: "808-plug/hl-heavy-sine-noise",
                light: "808-plug/hl-light-sine",
                description: "Heavy: Low pitch sine wave hit.\nLight: High pitch pluck chord"
            },
            {

                heavy: "fast-slow/hl-heavy",
                light: "fast-slow/hl-light",
                description: "Heavy: Low pitch 1/4th notes.\nLight: High pitch 1/8th notes"
            }
        ]
    }),
    AudioQuestion.generate("matching", "different", {
        schema: {matching: "Zusammengehörig", different: "Nicht Zusammengehörig"},
        metaphors: [
            {id: "excited-calm", matching: "Ruhig", different: "Aufgeregt"}
        ],
        audios: [
            {
                matching: "different-same-sound/mn-same-sine",
                different: "different-same-sound/mn-difference",
                description: "Matching: Same sine Pulse four times.\nDifferent: Sine, Rhodes, Synth Flute, Saw, Saw Based Synth Bass"
            },
            {
                matching: "repetition/mn-repetition",
                different: "repetition/mn-difference",
                description: "Matching: The same chord sequence twice.\nDifferent: Two different chord sequences in different keys."
            }
        ]
    }),
    AudioQuestion.generate("near", "far", {
        schema: {near: "Nah", far: "Fern"},
        metaphors: [
            {id: "important-unimportant", near: "Wichtig", far: "Unwichtig"},
            {id: "present-past", near: "Gegenwärtig", far: "Vergangen"}
        ],
        audios: [
            {
                near: "nf-near", far: "nf-far",
                description: "Far: Reverb, low volume.\nNear: No Reverb, high volume"
            }
        ],
    }),
    AudioQuestion.generate("smooth", "rough", {
        schema: {smooth: "Glatt", rough: "Rau"},
        metaphors: [
            {id: "safe-dangerous", smooth: "Sicher", rough: "Gefährlich"},
            {id: "problematic-unproblematic", smooth: "Unproblematisch", rough: "Problematisch"},
            {id: "pleasant-unpleasant", smooth: "Angenehm", rough: "Unangenehm"}
        ],
        audios: [
            {
                smooth: "smooth-chopped/sr-smooth",
                rough: "smooth-chopped/sr-rough-dist",
                description: "Smooth: Simple smooth chords,.\nRough: complex jumpy melody, derived from the smooth Melo. using Abletons Warp feature in beat mode, adding distortion and boosting the Transients"
            },
            {
                rough: "sine-distord/sr-rough",
                smooth: "sine-distord/sr-smooth",
                description: "Smooth: Sine pulse.\nRough: Heavily distorted saw pulse"
            }
        ]
    }),
    AudioQuestion.generate("straight", "crooked", {
        schema: {straight: "Gerade", crooked: "Krumm"},
        metaphors: [
            {id: "moral-imoral", straight: "Moralisch", crooked: "Unmoralisch"},
            {id: "good-evil", straight: "Gut", crooked: "Böse"}
        ],
        audios: [
            {
                straight: "sc-straight",
                crooked: "sc-bendy-pitch",
                description: "Straight: Sine Tone that holds the same pitch throughout the whole sample,.\nCrooked: Sine Tone that changes pitch"
            }
        ]
    }),
    AudioQuestion.generate("up", "down", {
        schema: {down: "Runter", up: "Hoch"},
        metaphors: [
            {id: "more-less", down: "Weniger", up: "Mehr"},
            {id: "good-bad", down: "Schlecht", up: "Gut"},
        ],
        audios: [
            {
                down: "ud-down",
                up: "ud-up",
                description: "Up: Sine Tone that starts at a low pitch and goes up,.\nDown: Sine Tone that starts at a high pitch and goes down"
            }
        ],
        nach: true
    }),
    AudioQuestion.generate("warm", "cold", {
        schema: {warm: "Warm", cold: "Kalt"},
        metaphors: [
            {id: "emotional-unemotional", warm: "Emotional", cold: "Emotionslos"},
            {id: "angry-calm", warm: "Wütend", cold: "Ruhig"},
        ],
        audios: [
            {
                warm: "chord-plug/wc-warm-sound",
                cold: "chord-plug/wc-cold-sound",
                description: "Warm: rhodes e-piano, lots of saturation, low slow chords.\nCold: high, compressed, reverby metallic sounds, high short notes"
            }
        ]
    }),
    AudioQuestion.generate("center", "periphery", {
        schema: {center: "Zentral", periphery: "Peripher"},
        metaphors: [
            {id: "important-unimportant", center: "Wichtig", periphery: "Unwichtig"}
        ],
        audios: [
            {
                center: "diffuse_pan-mono/cp-center",
                periphery: "diffuse_pan-mono/cp-perifery",
                description: "Center: Sine pulse,mono.\nPeriphery: Sine pulse, random panning, Reverb"
            },
            {
                center: "random-mono/cp-center-mono",
                periphery: "random-mono/cp-perifery-random_pan",
                description: "Center: Sine pulse, mono.\nPeriphery: Sine pulse, random panning"
            }
        ]
    }),
]
export const AudioQuestions = [
    AudioQuestion.generate("fast", "slow",{
        schema: {slow: "Langsam", fast: "Schnell"},
        metaphors:[],
        audios: [
            {
                slow: "8th-16th/fs-slow-note",
                fast: "8th-16th/fs-fast-note",
                description: "Slow: Sine Pulse, 4th notes.\nFast: Sine Pulse, 16th notes"
            }
        ]
    }),
    AudioQuestion.generate( "merging", "diverging", {
        schema: {merging: "Vereinigen", diverging: "Auseinandergehend"},
        metaphors: [],
        audios:[
            {
                merging: "me-merging",
                diverging: "me-diverging",
                description: "Merging: A Chord, all notes a slightly (500ct) out of tune and get automated to be in tune.\nDiverging: A Chord all notes are in tune and slowly start to detune",
            }
        ],
        nach: true
    }),
    AudioQuestion.generate("part", "whole",{
        schema: {part: "Aufgeteilt", whole: "Ganz"},
        metaphors:[],
        audios:[
            {
                part: "ph-part",
                whole: "ph-whole",
                description: "Part: Melody, Bass and Drums played after each other.\nWhole: Melody, Bass and Drums played at the same Time"
            }
        ]
    }),
]

const TutorialQuestion: AudioQuestion[] = AudioQuestion.generate("wavy", "spiky",{
    schema: {wavy: "Gewellt", spiky: "Gezackt"},
    metaphors: [],
    audios: [{
        wavy: "ph-whole",
        spiky: "ph-part",
        description: "noope"
    }]

})

export const AudioQuestionsList: AudioQuestion[] = [
    // TutorialQuestion,
    ...QuestionsWithMetaphors.flat(),
    ...AudioQuestions.flat()
]
