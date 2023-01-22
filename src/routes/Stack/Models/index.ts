import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";

export type propsNavigationStack = {
  Scorer: undefined
  Result?: {
    resultWe: number
    resultThey: number
  }
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>