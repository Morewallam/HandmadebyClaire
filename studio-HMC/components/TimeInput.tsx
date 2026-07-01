import { StringInputProps, set, unset } from 'sanity'

export function TimeInput(props: StringInputProps) {
  const { value, onChange } = props

  return (
    <input
      type="time"
      value={value ?? ''}
      onChange={(e) => {
        const val = e.target.value
        onChange(val ? set(val) : unset())
      }}
      style={{ padding: '6px', fontSize: '14px' }}
    />
  )
}