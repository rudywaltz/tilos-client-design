export function formatDuration(time) {
  if (isNaN(time)) return '--:--:--';
  const hours = Math.floor(time / (60 * 60));
  const minutes = Math.floor((time / 60) % 60);
  const seconds = Math.ceil(time % 60);
  return padding`${hours}:${minutes}:${seconds}`;
}

function padding(strings, ...values) {
  let result = '';

  for (let index = 0; index < strings.length; index++) {
    if (index > 0) {
      const element = values[index - 1];
      result += String(element).padStart(2, '0');
    }
    result += strings[index];
  }

  return result;
}
