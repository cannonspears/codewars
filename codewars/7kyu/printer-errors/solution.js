function printerError(s) {
  let bad = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] >= "a" && s[i] <= "m" ? null : bad++;
  }
  return `${bad}/${s.length}`;
}
