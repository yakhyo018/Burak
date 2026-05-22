// MIT TASK L

function reverseSentence(txt: string): string {
  return txt
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}
const result = reverseSentence("i like typescript");
console.log("result:", result);
