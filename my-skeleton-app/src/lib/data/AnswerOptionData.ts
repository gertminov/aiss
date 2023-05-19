interface AnswerOptionData {
    id: number
    text: string
}

interface DndItem extends AnswerOptionData{
    isDndShadowItem?: boolean
}