import { syllabler } from "../syllabler/syllabler";
import { writing } from "../syllabler/writing";

class Mixer {
  public mixWords(stWord: string, ndWord: string): string[] {
    let finalMixes: string[] = [];
    finalMixes = finalMixes.concat(this.mixBySyllables(stWord, ndWord));
    finalMixes = finalMixes.concat(this.mixBySimilarLetters(stWord, ndWord));
    return finalMixes;
  }

  private mixBySyllables(stWord: string, ndWord: string): string[] {
    const mixes = [];
    const stSyllables = syllabler.split(stWord);
    const ndSyllables = syllabler.split(ndWord);

    for (let stIndex = 0; stIndex < stSyllables.length; stIndex++) {
      const stSyllable = stSyllables[stIndex];
      for (let ndIndex = 0; ndIndex < ndSyllables.length; ndIndex++) {
        const ndSyllable = ndSyllables[ndIndex];
        mixes.push(
          [
            stSyllables.slice(0, stIndex + 1).join(""),
            ndSyllables.slice(ndIndex).join("")
          ].join("")
        );
      }
    }
    return mixes;
  }

  // we're want to glue togeter parts with the same letter
  // or if both are vovels
  private mixBySimilarLetters(stWord: string, ndWord: string): string[] {
    const mixes = [];
    for (let stIndex = 0; stIndex < stWord.length; stIndex++) {
      const stLetter = stWord[stIndex];
      for (let ndIndex = 0; ndIndex < ndWord.length; ndIndex++) {
        const ndLetter = ndWord[ndIndex];

        if (
          stLetter === ndLetter ||
          (writing.isVowel(stLetter) && writing.isVowel(ndLetter))
        ) {
          const beginningPart = stWord.slice(0, stIndex);
          const endingPart = ndWord.slice(ndIndex, ndWord.length);

          // avoid two letter mixes and duplicates
          mixes.push(beginningPart + endingPart);
        }
      }
    }
    return mixes;
  }
}

export const mixer = new Mixer();
