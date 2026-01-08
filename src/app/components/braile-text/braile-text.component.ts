import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import p5 from 'p5';

@Component({
  selector: 'braile-text',
  standalone: true,
  templateUrl: './braile-text.component.html',
  styleUrls: ['./braile-text.component.scss'],
})
export class BrailleComponent implements AfterViewInit {
  @ViewChild('canvasHost', { static: true }) canvasHost!: ElementRef;

  private p5!: p5;

  // ------------------ BRAILLE MAP ------------------
  brailleMap: Record<string, string> = {
    '100000': 'a',
    '110000': 'b',
    '100100': 'c',
    '100110': 'd',
    '100010': 'e',
    '110100': 'f',
    '110110': 'g',
    '110010': 'h',
    '010100': 'i',
    '010110': 'j',
    '101000': 'k',
    '111000': 'l',
    '101100': 'm',
    '101110': 'n',
    '101010': 'o',
    '111100': 'p',
    '111110': 'q',
    '111010': 'r',
    '011100': 's',
    '011110': 't',
    '101001': 'u',
    '111001': 'v',
    '010111': 'w',
    '101101': 'x',
    '101111': 'y',
    '101011': 'z',
    '111011': 'á',
    '110101': 'à',
    '100001': 'â',
    '001110': 'ã',
    '111111': 'é',
    '110001': 'ê',
    '011101': 'è',
    '001100': 'í',
    '100101': 'ì',
    '110111': 'ï',
    '001101': 'ó',
    '100111': 'ô',
    '010101': 'õ',
    '011111': 'ú',
    '110011': 'ü',
    '111101': 'ç',
    '001000': '.',
    '001010': ',',
    '010010': ':',
    '011000': ';',
    '011010': '!',
    '010001': '?',
    '001001': '-',
    '100011': '@',
  };

  keyToDot: Record<string, number> = {
    d: 1,
    s: 2,
    a: 3,
    g: 4,
    h: 5,
    j: 6,
  };

  pressedDots = [0, 0, 0, 0, 0, 0];
  textData: string[] = 'braile é Muito fácil!'
    .toLowerCase()
    .split('')
    // quebre a linha quando passar de 5 caracteres
    .reduce((acc, ch, idx) => {
      if (idx > 0 && idx % 7 === 0) acc.push('\n');
      acc.push(ch);
      return acc;
    }, [] as string[]);

  ngAfterViewInit() {
    this.p5 = new p5((p: p5) => {
      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, 450);
        canvas.parent(this.canvasHost.nativeElement);
        canvas.elt.tabIndex = 0;
        canvas.elt.focus();

        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(18);
      };

      p.draw = () => {
        p.background(255);
        this.drawTypedText(p);
        this.drawLivePreview(p);
      };
    });
  }

  // ------------------ INPUT ------------------
  @HostListener('document:keydown', ['$event'])
  handleKey(event: KeyboardEvent) {
    if (event.repeat) return; // <<< ESSENCIAL

    event.preventDefault();

    const k = event.key.toLowerCase();

    if (k in this.keyToDot) {
      const idx = this.keyToDot[k] - 1;
      this.pressedDots[idx] = this.pressedDots[idx] ? 0 : 1;
      return;
    }

    if (k === 'f') this.commitLetter();
    if (k === 'r') this.textData.pop();
    if (k === 'e') this.textData.push('\n');
    if (k === ' ') this.speakText();
  }

  commitLetter() {
    const pattern = this.pressedDots.join('');
    if (pattern !== '000000') {
      const letter = this.brailleMap[pattern];
      if (letter) {
        this.textData.push(letter);
        this.speak(letter);
      }
    } else {
      this.textData.push(' ');
    }
    this.pressedDots.fill(0);
  }

  // ------------------ DRAW ------------------
  drawTypedText(p: p5) {
    let x = 20;
    let y = 30;

    for (const ch of this.textData) {
      if (ch === '\n') {
        x = 20;
        y += 80;
        continue;
      }

      const pat = this.getPattern(ch);
      for (let i = 0; i < 6; i++) {
        const col = i < 3 ? 0 : 1;
        const row = i % 3;
        p.fill(pat[i] === '1' ? 0 : 210);
        p.ellipse(x + col * 22, y + row * 18, 14);
      }

      p.fill(0);
      p.text(ch, x + 20, y + 60);
      x += 56;
    }
  }

  drawLivePreview(p: p5) {
    const pattern = this.pressedDots.join('');
    const letter = this.brailleMap[pattern] || ' ';
    p.textSize(28);
    p.text(letter, p.width - 80, p.height - 80);
  }

  getPattern(ch: string) {
    for (const k in this.brailleMap) {
      if (this.brailleMap[k] === ch) return k;
    }
    return '000000';
  }

  // ------------------ SPEECH ------------------
  speak(text: string) {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'pt-BR';
    speechSynthesis.speak(u);
  }

  speakText() {
    this.speak(this.textData.join(''));
  }

  saveText() {
    const blob = new Blob([this.textData.join('')], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'braille_text.txt';
    a.click();
  }
}
