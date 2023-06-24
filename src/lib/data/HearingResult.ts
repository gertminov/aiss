import {integer, pgTable, serial} from "drizzle-orm/pg-core";
import {createInsertSchema} from "drizzle-zod";
import type {InferModel} from "drizzle-orm";

export const HearingResultRable = pgTable(
    "hearing_results",
    {
        id: serial("id").primaryKey(),
        volLeft: integer("vol_left").notNull(),
        volRight: integer("vol_right").notNull(),
        lowFreq: integer("low_freq").notNull(),
        highFreq: integer("high_freq").notNull(),
        sessionID: integer("session_id").notNull()
    }
)

export type HearingResult = InferModel<typeof HearingResultRable, "insert">

export const hearingResultSchema = createInsertSchema(HearingResultRable)