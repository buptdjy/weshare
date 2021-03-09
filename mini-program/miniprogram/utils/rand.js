export default function getRndInteger() {
  return Math.floor(Math.random() * (99999999 - 10000000) ) + 10000000;
}