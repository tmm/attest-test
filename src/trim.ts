export type trim<value extends string> = trimLeft<trimRight<value, ' '>, ' '>
type trimLeft<
  value extends string,
  chars extends string = ' ',
> = value extends `${chars}${infer tail}` ? trimLeft<tail> : value
type trimRight<
  value extends string,
  chars extends string = ' ',
> = value extends `${infer head}${chars}` ? trimRight<head> : value

export function trim<value extends string>(value: value): trim<value> {
  return value.trim() as trim<value>
}
