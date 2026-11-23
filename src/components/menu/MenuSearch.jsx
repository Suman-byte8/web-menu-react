import { Icon } from '../../UI/index.js'

/** Glass search field for one menu. Filters as you type. */
function MenuSearch({ value, onChange, placeholder = 'Search the menu' }) {
  return (
    <label className="glass flex h-14 items-center gap-3 rounded-2xl pr-2 pl-4 transition-[outline-color] focus-within:outline-2 focus-within:outline-ember/60">
      <Icon name="search" className="shrink-0 text-[22px] text-smoke" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => event.key === 'Enter' && event.currentTarget.blur()}
        placeholder={placeholder}
        aria-label={placeholder}
        enterKeyHint="search"
        autoComplete="off"
        spellCheck="false"
        // 16px text: smaller would make iOS zoom in on focus.
        className="h-full min-w-0 flex-1 bg-transparent font-body text-body-lg text-white outline-none placeholder:text-smoke"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/8 text-mist transition-transform active:scale-90"
        >
          <Icon name="close" className="text-[18px]" />
        </button>
      )}
    </label>
  )
}

export default MenuSearch
