import { Directive, ElementRef, OnInit } from '@angular/core';
import * as cloud from 'd3-cloud';
import * as d3 from 'd3';

@Directive({
    selector: '[awcWordCloud]'
})
export class WordCloudDirective implements OnInit {

    constructor(
        protected el: ElementRef
    ) { }

    ngOnInit(): void {
        let c = cloud().size([this.el.nativeElement.clientWidth, this.el.nativeElement.clientHeight])
            .words([{ text: 'one', size: 1 }, { text: 'two', size: 2 }, { text: 'three', size: 3 }, { text: 'four', size: 4 }, { text: 'five', size: 5 }])
            .rotate(0)
            .on('end', (words) => this.draw(words))
        c.start();
    }

    private draw(words: any[]): void {
        let html = '<svg>';

        words.forEach((word: any) => {
            console.dir(word);
        });


        html += '</svg>';


        this.el.nativeElement.innerHTML = html;
    }
}
