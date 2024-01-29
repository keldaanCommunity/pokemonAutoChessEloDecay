import { Schema, model } from "mongoose"

export interface ITitleStatistic {
  name: string
  rarity: number
}

const titleSchema = new Schema({
  name: {
    type: String
  },
  rarity: {
    type: Number
  }
})

export default model<ITitleStatistic>("TitleStatistic", titleSchema)
