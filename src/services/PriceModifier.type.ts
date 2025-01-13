export type PriceModifier = {
  type: number
  id?: number
  name: string
  description: string
  is_mandatory: boolean
  is_fiscal: boolean
  is_per_person: boolean
  is_daily: boolean
  amount: number
  amount_age_group_1: number
  amount_age_group_2: number
  amount_age_group_3: number
  amount_age_group_4: number
  amount_age_group_5: number
  is_percent_amount: boolean
  min_days?: number
  max_days?: number,
  apply_from_date?: string,
  apply_to_date?: string
}
