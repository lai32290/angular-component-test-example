import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { WelcomeComponent } from './welcome.component';
import { UserService } from "../user.service";
import { UserModule } from "../user/user.module";
import { DebugElement } from "@angular/core";

describe('WelcomeComponent', () => {
    let component: WelcomeComponent;
    let fixture: ComponentFixture<WelcomeComponent>;
    let userService: UserService;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        let u = new UserModule();
        u.name = 'Test User';
        let userServiceStub = {
            isLoggedIn: true,
            user: u
        };

        TestBed.configureTestingModule({
            declarations: [ WelcomeComponent ],
            providers: [ { provide: UserService, useValue: userServiceStub } ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WelcomeComponent);
        component = fixture.componentInstance;
        userService = TestBed.get(UserService);

        de = fixture.debugElement.query(By.css('.welcome'));
        el = de.nativeElement;
    });

    it('should welcome the user', () => {
        fixture.detectChanges();

        const content = el.textContent;
        expect(content).toContain('Welcome', '"Welcome ..."');
        expect(content).toContain('Test User', 'expected name');
    });

    it('should welcome "Bubba"', () => {
        userService.user.name = "Bubba";
        fixture.detectChanges();
        expect(el.textContent).toContain('Bubba');
    });

    it('should request login if not logged in', () => {
        userService.isLoggedIn = false;
        fixture.detectChanges();

        const content = el.textContent;
        expect(content).not.toContain('Welcome', 'not welcomed');
        expect(content).toMatch(/log in/i, '"log in"');
    });

});
