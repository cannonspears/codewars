function pickPeaks(arr) {
  var result = { pos: [], peaks: [] };
  if (arr.length > 2) {
    var pos = -1;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) {
        pos = i;
      } else if (arr[i] < arr[i - 1] && pos != -1) {
        result.pos.push(pos);
        result.peaks.push(arr[pos]);
        pos = -1;
      }
    }
  }
  return result;
}

// Pipeline approach
function pickPeaks(arr) {
  var pos = arr
    .map((x, i) => (i > 0 ? Math.sign(x - arr[i - 1]) * i : 0))
    .filter((i) => i != 0)
    .filter((x, i, a) => i < a.length - 1 && a[i + 1] < 0 && x > 0);
  return { pos: pos, peaks: pos.map((i) => arr[i]) };
}

// Guide to Pipeline approach
// My mind approaches most of these kinds of katas in a functional pipeline approach like this -- but that wasn't always the case. If you want to get better at functional approaches, I suggest making a game of it -- go about solving katas using your conventional loop-based implementations BUT see if you can figure out how to refactor the loops in your solutions into pipeline approaches (via map/filter/reduce/every/any). Once you can do that, see whether you can implement the pipeline approach to new katas without having to resort to loops.
// If you find that too difficult, you could start building understanding by expanding implementations like mine out into loop-based implementations. This can get a little gnarly since you may need to introduce (and name) variables for each stage of the pipeline -- those names aren't necessary in the pipeline since the output is simply "piped"/chained as the input to the next step in the pipeline via the "dot". In my above implementation, map(...).filter(...).filter(...).
