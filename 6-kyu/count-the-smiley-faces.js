//return the total number of smiling faces in the array
function countSmileys(arr) {
  return arr
    .filter((face) => {
      if (face.length === 3) {
        if (face.includes(':') && face.includes('-') && face.includes(')') ||
          face.includes(':') && face.includes('-') && face.includes('D') ||
          face.includes(':') && face.includes('~') && face.includes(')') ||
          face.includes(':') && face.includes('~') && face.includes('D') ||
          face.includes(';') && face.includes('-') && face.includes(')') ||
          face.includes(';') && face.includes('-') && face.includes('D') ||
          face.includes(';') && face.includes('~') && face.includes(')') ||
          face.includes(';') && face.includes('~') && face.includes('D')) {
          return face;
        }
      } else if (face.length === 2) {
        if (face.includes(':') && face.includes(')') ||
          face.includes(':') && face.includes('D') ||
          face.includes(';') && face.includes(')') ||
          face.includes(';') && face.includes('D')) {
          return face;
        }
      }
    })
    .length;
}