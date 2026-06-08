export const GRAMMAR_RULES = [
  "S -> a A C | b B",
  "A -> c A | ε",
  "B -> d B | e C",
  "C -> f",
];

export const FIRST_SETS = {
  S: ["a", "b"],
  A: ["c", "ε"],
  B: ["d", "e"],
  C: ["f"],
};
export const FOLLOW_SETS = { S: ["$"], A: ["f"], B: ["$"], C: ["$"] };

const GRAMMAR_PRODUCTIONS = {
  S: [
    ["a", "A", "C"],
    ["b", "B"],
  ],
  A: [["c", "A"], ["ε"]],
  B: [
    ["d", "B"],
    ["e", "C"],
  ],
  C: [["f"]],
};

export const PARSING_TABLE: Record<string, Record<string, string[] | null>> = {
  S: { a: ["a", "A", "C"], b: ["b", "B"] },
  A: { c: ["c", "A"], f: ["ε"] },
  B: { d: ["d", "B"], e: ["e", "C"] },
  C: { f: ["f"] },
};

export const isTerminal = (sym: string) => /^[abcdef$ε]$/.test(sym);

export function generateValidSentence(): string {
  const sentenceTokens: string[] = [];

  const expand = (symbol: string) => {
    if (isTerminal(symbol)) {
      if (symbol !== "ε") sentenceTokens.push(symbol);
      return;
    }

    const productions =
      GRAMMAR_PRODUCTIONS[symbol as keyof typeof GRAMMAR_PRODUCTIONS];
    const randomProduction =
      productions[Math.floor(Math.random() * productions.length)];

    randomProduction.forEach(expand);
  };

  expand("S");
  return sentenceTokens.join(" ");
}
