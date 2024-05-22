// ******** Generic Types ********

function getFirst<T>(arr: T[], n: number) {
  return arr.slice(0, n);
}

function compare<T, U>(a: T, b: U) {
  if (typeof a === 'number' && typeof b === 'number')
    return a < b ? -1 : a > b ? 1 : 0;
}

// ******** Constraining Generic Types ********
type objectWithTeam = {
  team: string;
};

type Programmer = objectWithTeam & {
  name: string;
  language: string;
};
// constrain with extends keyword (type must contain some other type)
function updateTeam<T extends objectWithTeam>(arg: T, newTeam: string): T {
  arg.team = newTeam;
  return arg;
}
