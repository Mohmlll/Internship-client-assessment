import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.scss']
})
export class AnagramComponent implements OnInit {
  public output: any;
  //default assignment value
  public input: string = "rope, pore, repo, red rum, murder, listen, silent, endeavor";

  constructor() {

  }

  ngOnInit(): void {

  }

  log() {
    //splits eachs word of the input and adds it to an array
    let input_array = this.input.split(",");
    console.log("input is: " + this.input);
    this.output = this.getAnagrams(input_array)
    console.log("output is: ");
    console.log(this.output);
  }

  //input is an array of strings
  //output is an array with arrays of strings.
  private getAnagrams(input: string[]): Array<string[]> {
    const sorted: { [key: string]: string[] | undefined } = {};
    for (const word of input) {
      // Sort the word's letters to be in alphabetical order
      const sorted_word = word.replace(/ /g, "").split("").sort().join("");
      // Check if word's order exists in the obj
      if (sorted[sorted_word]) {
        sorted[sorted_word]!.push(word);
      } else {
        sorted[sorted_word] = [word];
      }
    }
    return Object.keys(sorted).map((key) => {
      return sorted[key]!;
    });
  }
}
