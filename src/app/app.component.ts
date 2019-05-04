import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'masterMindReitano';

  codeLength = 3;
  source: number[];
  userInput: number[];
  rightPositionElements: number;
  wrongPositionElements: number;
  rightCombination = false;
  logMessages = false;
  gameIsSet = false;
  userGiveUp = false;

  constructor(
    private appService: AppService
  ) { }
  ngOnInit() {

  }

  giveUp() {
    this.userGiveUp = true;
  }

  setGame() {
    this.gameIsSet = true;
    this.rightCombination = false;
    this.userGiveUp = false;
    this.generateSource(this.codeLength);
    this.setupInput(this.codeLength);
  }

  resetGame() {
    this.setGame();
  }

  endGame() {
    this.gameIsSet = false;
    this.logMessages = false;
    this.rightCombination = false;
    this.userGiveUp = false;
  }

  setupInput(len: number) {
    this.userInput = this.appService.generateEmpty(len);
  }

  generateSource(len: number) {
    this.source = this.appService.generateRandom(len);
  }

  inputInArray(): number {
    let counter = 0;
    this.userInput.forEach((element, index) => {
      if (this.source.includes(element) && element !== this.source[index]) {
        counter++;
      }
    });
    this.wrongPositionElements = counter;
    return counter;
  }

  inputInPosition(): number {
    let counter = 0;
    this.userInput.forEach((element, index) => {
      if (element === this.source[index]) {
        counter++;
      }
    });
    this.rightPositionElements = counter;
    return counter;
  }

  compareNumbers() {
    this.inputInArray();
    this.inputInPosition();
    if (this.inputInPosition() === this.codeLength) {
      this.rightCombination = true;
      this.logMessages = false;
    } else {
      this.logMessages = true;
    }
  }




}
