import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { BannerComponent } from './banner.component';
import { ComponentFixtureAutoDetect } from "@angular/core/testing";

describe('BannerComponent', () => {
    let component: BannerComponent;
    let fixture: ComponentFixture<BannerComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BannerComponent ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BannerComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display original title', () => {
        expect(el.textContent).toContain(component.title);
    });

    it('should still see original title after component.title change', () => {
        let oldTitle = el.title;
        component.title = "Test Title";
        expect(el.textContent).toContain(oldTitle);
    });

    it('should display updated title after detectChanges', () => {
        component.title = "Test Title";
        fixture.detectChanges();
        expect(el.textContent).toEqual(component.title);
    });

    it('no title in the DOM until manually call `detectChanges`', () => {
        expect(el.textContent).not.toEqual('');
    });
});
