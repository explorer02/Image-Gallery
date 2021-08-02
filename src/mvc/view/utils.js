export function truncateMid(content, length) {
  return content.slice(0, length / 2) + "..." + content.slice(-length / 2);
}

export function helper(div, maxHeight, content, length) {
  div.textContent = truncateMid(content, length);
  console.log(div.offsetHeight, maxHeight, length);
  return div.offsetHeight <= maxHeight;
}

export function binarySearch(div, maxHeight, width, content) {
  div.style.width = width;
  // div.style.maxHeight = maxHeight;
  div.style.border = "1px solid black";

  let start = 0,
    end = content.length;
  let answer = start;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (helper(div, maxHeight, content, mid)) {
      answer = mid;
      start = mid + 1;
    } else end = mid - 1;
  }
  console.log(answer);
  div.textContent = truncateMid(content, answer);
}
